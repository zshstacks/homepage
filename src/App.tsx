import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router";
import { createContext, useState, useEffect, lazy, Suspense } from "react";
import { ContextProps } from "./types/types";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Layout from "@/components/Layout/Layout";

const Homepage = lazy(() => import("./components/Homepage/Homepage"));
const WorksContent = lazy(
    () => import("./components/Homepage/WorksContent/WorksContent"),
);
const WorkItem = lazy(
    () => import("./components/Homepage/WorksContent/WorkItem/WorkItem"),
);
const SetupContent = lazy(
    () => import("./components/Homepage/SetupContent/SetupContent"),
);
const SetupItem = lazy(
    () => import("./components/Homepage/SetupContent/SetupItem/SetupItem"),
);
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

const LoadingFallback = () => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#202023] dark:bg-[#f0e7db]">
        <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#81e6d9] dark:border-[#319795]"></div>
            <div className="absolute top-0 left-0 animate-spin rounded-full h-12 w-12 border-r-2 border-l-2 border-[#ff63c3] dark:border-indigo-400" style={{ animationDirection: "reverse", animationDuration: "1.5s" }}></div>
        </div>
    </div>
);

export const MyContext = createContext<ContextProps | null>(null);

const THEME_STORAGE_KEY = "preferred-theme";

const getInitialTheme = (): "dark" | "light" => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }
  if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/works" element={<WorksContent />} />
          <Route path="/works/:projectId" element={<WorkItem />} />
          <Route path="/setup" element={<SetupContent />} />
          <Route path="/setup/:setupId" element={<SetupItem />} />
          <Route path="*" element={<NotFound />} />
        </Route>,
    ),
);

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
      <ErrorBoundary>
        <MyContext.Provider value={{ theme, setTheme }}>
          <div className="min-h-screen flex justify-center">
            <Suspense fallback={<LoadingFallback />}>
              <RouterProvider router={router} />
            </Suspense>
          </div>
        </MyContext.Provider>
      </ErrorBoundary>
  );
}

export default App;
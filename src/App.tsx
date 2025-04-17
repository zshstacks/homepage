import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./components/Homepage/Homepage";
import WorksContent from "./components/Homepage/WorksContent/WorksContent";
import NotFound from "./components/NotFound/NotFound";
import WorkItem from "./components/Homepage/WorksContent/WorkItem/WorkItem";
import { createContext, useState } from "react";
import { ContextProps } from "./types/types";
import SetupContent from "./components/Homepage/SetupContent/SetupContent";
import SetupItem from "./components/Homepage/SetupContent/SetupItem/SetupItem";

export const MyContext = createContext<ContextProps | null>(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/works",
    element: <WorksContent />,
  },
  {
    path: "/works/:projectId",
    element: <WorkItem />,
  },
  {
    path: "/setup",
    element: <SetupContent />,
  },
  {
    path: "/setup/:setupId",
    element: <SetupItem />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <div className="bg-[#202023] dark:bg-[#f0e7db] min-h-screen flex justify-center">
        <RouterProvider router={router} />
      </div>
    </MyContext.Provider>
  );
}

export default App;

import { createBrowserRouter, Router, RouterProvider } from "react-router";
import Homepage from "./components/Homepage/Homepage";
import WorksContent from "./components/Homepage/WorksContent/WorksContent";
import NotFound from "./components/NotFound/NotFound";

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
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { createBrowserRouter, Router, RouterProvider } from "react-router";
import Homepage from "./components/Homepage/Homepage";
import WorksContent from "./components/Homepage/WorksContent/WorksContent";
import NotFound from "./components/NotFound/NotFound";
import WorkItem from "./components/Homepage/WorksContent/WorkItem/WorkItem";

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

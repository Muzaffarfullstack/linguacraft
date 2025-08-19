import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/courses/",
          element: <Courses />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;

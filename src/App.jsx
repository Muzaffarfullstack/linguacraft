import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Contact from "./pages/contact/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import { useGlobalContext } from "./hooks/useGlobalContext";
import CourseDetail from "./pages/courses/CourseDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { user, authReady } = useGlobalContext();
  // console.log(user);
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
        {
          path: "/courses/:title",
          element: (
            <ProtectedRoutes user={false}>
              <CourseDetail />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;

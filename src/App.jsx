/* eslint-disable react/prop-types */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./pages/Root";
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";
import TablesSection from "./pages/TablesSection";
import PostsPage from "./pages/PostsPage";
import Profile from "./pages/Profile";
// import Billing from "./pages/Billing";
import { loader } from "./misc/loaders";
import { lazy } from "react";

// const { Dashboard } = lazy(() => import("./pages/Dashboard"));
// const DashboardPage = () => {
//   return <Dashboard/>;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        loader: loader,
      },
      {
        path: "tables",
        element: (
          <PrivateRoute>
            <TablesSection />
          </PrivateRoute>
        ),
      },
      {
        path: "posts",
        element: (
          <PrivateRoute>
            <PostsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      // { path: "billing", element: <Billing /> },
    ],
  },
  { path: "admin", element: <Login /> },
]);

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("admin-jwt");
  return isAuthenticated ? children : <Navigate to="../admin" />;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;

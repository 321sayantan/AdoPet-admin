/* eslint-disable react/prop-types */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Root } from "./pages/Root";
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";
import TablesSection from "./pages/TablesSection";
import AdoptPostsPage from "./pages/AdoptPostsPage";
import RescuePostsPage from "./pages/RescuePostsPage";
// import Profile from "./pages/Profile";
// import Billing from "./pages/Billing";
import { loader } from "./misc/loaders";

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
        loader: loader,
      },
      {
        path: "adopt-posts",
        element: (
          <PrivateRoute>
            <AdoptPostsPage />
          </PrivateRoute>
        ),
        loader: loader,
      },
      {
        path: "rescue-posts",
        element: (
          <PrivateRoute>
            <RescuePostsPage />
          </PrivateRoute>
        ),
        loader: loader,
      },
      // { path: "profile", element: <Profile /> },
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

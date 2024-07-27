/* eslint-disable react/prop-types */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./misc/httpRequests";
import { Root } from "./pages/Root";
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";
import TablesSection from "./pages/TablesSection";
import AdoptPostsPage from "./pages/AdoptPostsPage";
import RescuePostsPage from "./pages/RescuePostsPage";
import VectorMapPage from "./pages/VectorMapPage";
import MainErrorFallback from "./components/MainErrorFallback";
// import Profile from "./pages/Profile";
// import Billing from "./pages/Billing";
import { loader } from "./misc/loaders";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <MainErrorFallback />,
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
      {
        path: "tables/users-locations",
        element: (
          <PrivateRoute>
            <VectorMapPage />
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
  useEffect(() => {
    console.log(111, isAuthenticated);
  }, []);
  return isAuthenticated ? children : <Navigate to="../admin" />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

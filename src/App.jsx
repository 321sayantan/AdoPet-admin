import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import DashboardSection from "./pages/Dashboard";
import Login from "./pages/Login";
import Billing from "./pages/Billing";
import TablesSection from "./pages/TablesSection";
import NotificationsPage from "./pages/Notifications";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <DashboardSection /> },
      { path: "tables", element: <TablesSection /> },
      { path: "billing", element: <Billing /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "admin", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

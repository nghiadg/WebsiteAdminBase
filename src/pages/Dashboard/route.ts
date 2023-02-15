import { lazy } from "react";
import { DEFAULT } from "routes/route.constant";
const Dashboard = lazy(() => import("pages/Dashboard"));

export default {
  path: DEFAULT,
  element: Dashboard,
};

import { lazy } from "react";
import { STAFF_LIST } from "routes/route.constant";
const StaffList = lazy(() => import("pages/StaffManager/StaffList"));

export default {
  path: STAFF_LIST,
  element: StaffList,
};

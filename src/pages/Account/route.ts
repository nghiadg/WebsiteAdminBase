import { lazy } from "react";
import { ACCOUNT } from "routes/route.constant";
const Account = lazy(() => import("pages/Account"));

export default {
  path: ACCOUNT,
  element: Account,
};

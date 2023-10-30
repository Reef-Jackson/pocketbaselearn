import { g as getPocketbase } from "../../../chunks/databaseHandler.js";
import { r as redirect } from "../../../chunks/index.js";
function load({ params }) {
  const pb = getPocketbase();
  pb.authStore.clear();
  throw redirect(301, "/login");
}
export {
  load
};

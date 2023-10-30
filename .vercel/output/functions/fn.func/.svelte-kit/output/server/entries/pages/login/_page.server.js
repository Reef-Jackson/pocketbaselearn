import { r as redirect } from "../../../chunks/index.js";
import { d as databaseHandler } from "../../../chunks/databaseHandler.js";
const actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    console.log(...data);
    const response = await databaseHandler.login(data);
    if (response.success)
      throw redirect(301, "/");
  }
};
export {
  actions
};

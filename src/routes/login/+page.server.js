import { redirect } from "@sveltejs/kit";
import databaseHandler from "$lib/server/databaseHandler";

export const actions = {
    default: async ({ request, locals }) => {
        const data = await request.formData();
        console.log(...data)
        const response = await databaseHandler.login(data);
        if (response.success) throw redirect(301, "/bucket");
    }
}
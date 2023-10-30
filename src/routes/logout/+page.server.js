import { getPocketbase } from "../../lib/server/databaseHandler";
import { redirect } from "@sveltejs/kit";

export function load({ params }) {
    const pb = getPocketbase();
    pb.authStore.clear(); //logout
    throw redirect(301, '/login');
}


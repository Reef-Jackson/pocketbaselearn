import { getPocketbase } from "../../lib/server/databaseHandler";

export function load({ params }) {
    const pb = getPocketbase();
    pb.authStore.clear(); //logout
}


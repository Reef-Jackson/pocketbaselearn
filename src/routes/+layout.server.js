import databaseHandler from "$lib/server/databaseHandler";
import { writable } from "svelte/store";
import { getPocketbase } from "../lib/server/databaseHandler";

const loggedInState = writable(databaseHandler.isLoggedIn());

export const load = ({locals}) => {
    return {pb: getPocketbase()};
}
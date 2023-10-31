import databaseHandler from "$lib/server/databaseHandler";

export const load = () => {
    return {loggedIn: databaseHandler.isLoggedIn()};
}

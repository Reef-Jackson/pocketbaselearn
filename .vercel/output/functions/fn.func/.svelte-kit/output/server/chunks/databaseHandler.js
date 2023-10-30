import pocketbase from "pocketbase";
const PUBLIC_POCKETBASE_HOST = "https://reefpb.isaac238.dev";
let pb = new pocketbase(PUBLIC_POCKETBASE_HOST);
pb.autoCancellation(false);
function startPocketbase() {
  pb = new pocketbase(PUBLIC_POCKETBASE_HOST);
  pb.autoCancellation(false);
}
function getPocketbase() {
  return pb;
}
class databaseHandler {
  static async login(formData) {
    try {
      await pb.collection("users").authWithPassword(formData.get("email"), formData.get("password"));
      return { success: true, message: "Logged in" };
    } catch (e) {
      console.log(e);
      return { success: false, message: "Error occured" };
    }
  }
  static async register(formData) {
    try {
      const data = {
        "username": formData.get("username"),
        "email": formData.get("email"),
        "emailVisibility": true,
        "password": formData.get("password"),
        "passwordConfirm": formData.get("confirm-password")
      };
      const record = await pb.collection("users").create(data);
      return { success: true, message: "Registered" };
    } catch (e) {
      console.log(e);
      return { success: false, message: "Error" };
    }
  }
}
export {
  databaseHandler as d,
  getPocketbase as g,
  startPocketbase as s
};

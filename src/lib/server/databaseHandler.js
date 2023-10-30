import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import pocketbase from 'pocketbase';

let pb = new pocketbase(PUBLIC_POCKETBASE_URL);
pb.autoCancellation(false);

export function startPocketbase() { //Grabs ENV variable and lets you start a new pocketbase instance 
    pb = new pocketbase(PUBLIC_POCKETBASE_URL);
    pb.autoCancellation(false);
}

export function getPocketbase() { //for grabbing pocketbase url
    return pb;
}

export default class databaseHandler { 
    static async login(formData) { //takes formData as a parameter
        try {
            await pb.collection('users').authWithPassword(formData.get('email'), formData.get('password')); //checks the database for records with the user and pass, if successful, returns success, to be used in the login action.
            return {success: true, message: 'Logged in'};
        } catch (e) {
            console.log(e);
            return {success: false, message: 'Error occured'};
        }
    }
    static async register(formData) {
        try {
            const data = {
                "username": formData.get('username'),
                "email": formData.get('email'),
                "emailVisibility": true,
                "password": formData.get('password'),
                "passwordConfirm": formData.get('confirm-password')
            }

            const record = await pb.collection('users').create(data);
            return{success:true, message: "Registered"};
        } catch (e) {
            console.log(e);
            return{success: false, message: "Error"};
        } 

    }
}
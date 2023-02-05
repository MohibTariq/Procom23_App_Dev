import axios from "axios";
import ROUTES from "../routes";

const backend_url = "http://192.168.1.3:4000/";
export async function login(data){
    let response = await axios.post(backend_url + ROUTES.LOGIN, data);
    if(response.data.code != 200){
        throw new Error("Invalid credentials!");
    }else{
        return response.data.data
    }
}

export async function signup(data){
    let response = await axios.post(backend_url + ROUTES.SIGNUP, data);
    if(response.data.code != 200){
        throw new Error("Email already in use!");
    }else{
        return response.data.data
    }
}
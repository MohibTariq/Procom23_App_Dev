import axios from "axios";
import ROUTES from "../routes";

const backend_url = "http://192.168.1.22:4000/";
export async function login(data){
    let response = await axios.post(backend_url + ROUTES.LOGIN, data);
    if(response.data.code != 200){
        throw new Error("Invalid credentials!");
    }else{
        console.log(response.data);
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

export async function getCompetitions(type){
    let response = await axios.get(backend_url + ROUTES.GET_COMPS + `/${type}`);
    if(response.data.code != 200){
        return [];
    }else{
        console.log(response.data.data)
        return response.data.data;
    }
}
import axios from "axios";
import ROUTES from "../routes";

const backend_url = "http://ec2-3-113-8-105.ap-northeast-1.compute.amazonaws.com/";
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

export async function getUserByEmail(email){
    let response = await axios.post(backend_url + ROUTES.GET_USER_BY_EMAIL, {email});
    if(response.data.code != 200){
        return null;
    }else{
        return response.data.data;
    }
}

export async function registerTeam(teamLead, teamName, numOfMembers, ambassador_id, compId, totalFee){
    let response = await axios.post(backend_url + ROUTES.REGISTER_TEAM, {teamLead, teamName, numOfMembers, compId, totalFee, paymentMethod: "cash", paymentReference: "none", ambassador_id });
    if(response.data.code != 200){
        return null;
    }else{
        return response.data.data;
    }
}

export async function getRegisteredCompeitions(userid){
    let response = await axios.get(backend_url + ROUTES.GET_USER_COMPS + `/${userid}`);
    if(response.data.code != 200){
        return [];
    }else{
        return response.data.data;
    }
}
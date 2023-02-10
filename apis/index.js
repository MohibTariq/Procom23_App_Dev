import axios from "axios";
import ROUTES from "../routes";

const backend_url = "http://ec2-3-113-8-105.ap-northeast-1.compute.amazonaws.com/";
const paypar_auth = " https://api.paypro.com.pk/v2/ppro/auth";
const paypro_create_order = "https://api.paypro.com.pk/v2/ppro/co";
const checkstatus = "https://api.paypro.com.pk/v2/ppro/ggos"

const clientid = "WpjGlWwJ9ASWUkK";
const clientsecret = "cm3gmbj7kQU3kgo";

function makeid() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 10) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

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

export async function getCompetitions(type){
    let response = await axios.get(backend_url + ROUTES.GET_COMPS + `/${type}`);
    if(response.data.code != 200){
        return [];
    }else{
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
    console.log(ambassador_id)
    let response = await axios.post(backend_url + ROUTES.REGISTER_TEAM, {teamLead, teamName, numOfMembers, compId, totalFee, paymentMethod: "cash", paymentReference: "none", ambassador_id });
    if(response.data.code != 200){
        console.log(response.data)
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

export async function make_payment(name, email, contact, amount){
    let response = await axios.post(paypar_auth, {clientid, clientsecret});
    const token = response?.headers?.token;
    if(response.data == "Authorized"){
        const date = new Date();
        let res = await axios.post(paypro_create_order, [{
            "MerchantId": "Pro_Com",
            },
            {
            "OrderNumber": `PayPro-${makeid()}`,
            "OrderAmount": "50",
            "OrderDueDate": date.toLocaleDateString(),
            "OrderType": "Service",
            "IssueDate": date.toLocaleDateString(),
            "OrderExpireAfterSeconds": "0",
            "CustomerName": name,
            "CustomerMobile": contact,
            "CustomerEmail": email,
            "CustomerAddress": "N/A"
            }], {headers: {Token: token}} );
        const click2pay = res.data[1]?.Click2Pay;
        const payproId = res.data[1]?.PayProId;
        return [click2pay, payproId];
    }else{
        throw Error("There was an error in the request!");
    }
}

export async function checkStatus(cpayId) {
    const url = `https://api.paypro.com.pk/cpay/gos?userName=Pro_Com&password=Live@pro23&cpayId=${cpayId}`;
    let response = await axios.get(url);
    return response.data[1]?.OrderStatus == "PAID"
}
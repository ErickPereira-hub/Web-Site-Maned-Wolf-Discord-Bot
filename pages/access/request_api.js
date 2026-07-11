import { generateDashbord } from "./generate_dashboard.js";

const errorMsg = document.getElementsByClassName("error")[0];

export function pushDataFromApi(serverId, token) {

    let status = null;
    const URL = "http://localhost:3000/pull";

    fetch(URL, {
        "method" : "POST",
        "headers" : { "Content-Type" : "application/json" },
        "body" : JSON.stringify({
            "sid" : serverId,
            "token" : token
        })
    }).then(resp => {
        
        status = resp.status; //Setting the status code.
        return resp.json(); //Promise with the JSON.

    }).then(json => {

        if (status !== 200) {
            if (status === 400) {
                errorMsg.innerText = "❌ Server Id must be an integer";
            } else {
                errorMsg.innerText = "❌ " + json["message"];
            }
        } else {
            errorMsg.innerText = "";
            generateDashbord(json); //Will generate the dashboard on the frontend.
        }
    
    }).catch(err => console.log(err));
}
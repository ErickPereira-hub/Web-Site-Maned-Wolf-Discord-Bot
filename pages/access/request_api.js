import { generateDashbord } from "./dashboard/generate_dashboard.js";
import { buildMessageMemberProbabilityInfo } from "./build_probability_info.js";

export function pushAccessDataFromApi(serverId, token) {

    let status = null;
    const URL = "http://localhost:3000/pull";
    const errorMsg = document.getElementsByClassName("error")[0];

    fetch(URL, {
        "credentials" : "include",
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

export function pushMessagesProbabilityFromApi(from, until) {

    let status = null;
    const URL = `http://localhost:3000/msg/poisson_for_web?from=${from}&until=${until}`;
    const errorHtmlMsg = document.querySelectorAll("section#imodal_msg p.error")[0];
    const modal = document.getElementById("imodal_msg");
    const infoContainer = document.getElementById("idiv_with_prob");
    if (infoContainer !== null) {
        modal.removeChild(infoContainer); //<--- Deleting the information if it already exists.
    }

    fetch(URL, {
        "credentials" : "include", //<--- Important because we are going to send and receive a cookie
        "method" : "get"
        }
    ).then(response => {
        status = response.status;
        return response.json();
        }
    ).then(JSON =>{
        
        if (status !== 200) {

            if (status === 401) {
                window.href = "./index.html";
            }

            errorHtmlMsg.innerText = "❌" + JSON["message"];
        } else {
            errorHtmlMsg.innerText = "";
            buildMessageMemberProbabilityInfo(JSON, modal, "messages", "idiv_with_prob");
        }
    }
    )
}

export function pushMembersProbabilityFromApi(from, until) {

    let status = null;
    const URL = `http://localhost:3000/member/poisson_for_web?from=${from}&until=${until}`;
    const errorHtmlMsg = document.getElementById("imember_prob_error");
    const modalMember = document.getElementById("imodal_member");
    const memberInfoContainer = document.getElementById("idiv_with_member_prob");
    if (memberInfoContainer !== null) {
        modal.removeChild(memberInfoContainer); //<--- Deleting the information if it already exists.
    }

    fetch(URL, {
        "credentials" : "include", //<--- Important because we are going to send and receive a cookie
        "method" : "get"
        }
    ).then(response => {
        status = response.status;
        return response.json();
        }
    ).then(JSON =>{
        
        if (status !== 200) {

            if (status === 401) {
                window.href = "./index.html";
            }

            errorHtmlMsg.innerText = "❌" + JSON["message"];
        } else {
            errorHtmlMsg.innerText = "";
            buildMessageMemberProbabilityInfo(JSON, modalMember, "members", "idiv_with_member_prob"); //Constructing the probability information on the frontend
        }
    }
    )
}
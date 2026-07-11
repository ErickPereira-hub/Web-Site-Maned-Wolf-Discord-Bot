import { pushDataFromApi } from "./request_api.js";

const formHTML = document.getElementsByTagName("form")[0];

formHTML.addEventListener("submit", evt => {
    evt.preventDefault();
    const sid = document.getElementById("isid").value;
    const token = document.getElementById("itoken").value;
    pushDataFromApi(sid, token);
})
import { pushProbabilityFromApi } from "./request_api.js";

const form = document.getElementById("imember_prob_form");

form.addEventListener("submit", evt => {
    evt.preventDefault(); //Prevents reloading over the web page
    const startingAmmountOfMembers = Number(document.getElementById("istart_member").value);
    const endingAmmountOfMembers = Number(document.getElementById("iend_member").value);
    pushProbabilityFromApi(startingAmmountOfMembers, endingAmmountOfMembers, "http://localhost:3000/member/poisson_for_web", "member");
});
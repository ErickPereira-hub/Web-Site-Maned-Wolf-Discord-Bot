import { pushMessagesProbabilityFromApi } from "./request_api.js";

const formHTML = document.getElementById("imsg_prob_form");

formHTML.addEventListener("submit", evt => {
    evt.preventDefault(); //Blocking reset of the DOM.
    const from = Number(document.getElementById("istart").value);
    const until = Number(document.getElementById("iend").value);
    pushMessagesProbabilityFromApi(from, until);
    }
);
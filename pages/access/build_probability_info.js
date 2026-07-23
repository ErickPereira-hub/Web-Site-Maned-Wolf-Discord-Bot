export function buildMessageProbabilityInfo(JSON, modal) {
    /*
    The inputted JSON must have the structure:
    {
        "probability" : float,
        "from" : integer,
        "until" : integer
    }
    */
    const infoContainer = document.createElement("div");
    infoContainer.className = "show_information";
    infoContainer.id = "idiv_with_prob";
    const headerInfo = document.createElement("p");
    headerInfo.style.textAlign = "center";
    headerInfo.style.fontSize = "1.1em";
    headerInfo.style.paddingBottom = "10px";
    headerInfo.innerText = `The probability of receiving between ${JSON["from"]} to ${JSON["until"]} new messages tomorrow is:`
    const bodyInfo = document.createElement("p");
    bodyInfo.style.textAlign = "center";
    bodyInfo.style.fontSize = "2.8em";
    bodyInfo.innerText = `${(JSON["probability"] * 100).toFixed(2)}%`
    infoContainer.append(headerInfo);
    infoContainer.append(bodyInfo);
    modal.append(infoContainer);
}
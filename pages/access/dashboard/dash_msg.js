import { stdHistStyle } from "./std_style.js";
import { getSubProbArray } from "./get_sub_prob_array.js";

export function getMsgDashboard(JSON, pallet) {
    document.getElementById("itxt_msg_poisson").innerText = `The histogram bellow shows the probability distribution of acquiring a new ammount of messages tomorrow. Moreover, the probability of obtaining ${JSON["new_msg_probability"]["from"]} to ${JSON["new_msg_probability"]["until"]} new messages tomorrow is ${(JSON["new_msg_probability"]["probability"] * 100).toFixed(2)}%`

    //Extracting and organizing the data from the JSON
    const newMsgProbabilities = JSON["new_msg_probability"]["points"];
    const qtt = []; //<--- Volume of messages
    const prob = []; //<--- Probability of each volume based on Poisson distribution
    
    //Filling the arrays of volume and probability
    for (let i = 0; i < newMsgProbabilities.length; i++) {
        qtt.push(newMsgProbabilities[i][0]);
        prob.push(newMsgProbabilities[i][1]);
    }
    
    const probToShow = {
        from : JSON["new_msg_probability"]["from"],
        until : JSON["new_msg_probability"]["until"],
        p : JSON["new_msg_probability"]["probability"]
    } //<---Probability that will be shown and its volume range
    
    const subProb = getSubProbArray(probToShow.from, probToShow.until, newMsgProbabilities); //<--- Subarray with probabilities of a range of volume
    
    //Generating the chart
    new Chart("inew_msg_dist", {
        type : "bar",
        data : {
            labels : qtt,
            datasets : [
                {
                    label : "overall",
                    data : prob,
                    backgroundColor : pallet["COL1"]
                },
                {
                    label : `between ${probToShow.from} to ${probToShow.until} new members`,
                    data : subProb,
                    backgroundColor : pallet["COL2"]
                }
            ]
        },
        options : stdHistStyle("Probability distribution for new ammount of members tomorrow", pallet, true)
    })
}
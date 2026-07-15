import { stdHistStyle } from "./std_style.js";
import { getSubProbArray } from "./get_sub_prob_array.js";

export function getPoissonForMembersDashboard(JSON, pallets) {
    
    //Extracting and organizing the data from the JSON
    const newMemberProbabilities = JSON["new_member_probability"]["points"];
    const qtt = [];
    const prob = [];
    
    for (let i = 0; i < newMemberProbabilities.length; i++) {
        qtt.push(newMemberProbabilities[i][0]);
        prob.push(newMemberProbabilities[i][1]);
    }
    
    const probToShow = {
        from : JSON["new_member_probability"]["from"],
        until : JSON["new_member_probability"]["until"],
        p : JSON["new_member_probability"]["probability"]
    }

    const subProb = getSubProbArray(probToShow.from, probToShow.until, newMemberProbabilities);

    //Generating the chart
    new Chart("iprob_new_members", {
        type : "bar",
        data : {
            labels : qtt,
            datasets : [
                {
                    label : "graph",
                    data : prob,
                    backgroundColor : pallets["COL1"]
                },
                {
                    label : `between ${probToShow.from} to ${probToShow.until} new members`,
                    data : subProb,
                    backgroundColor : pallets["COL2"]
                }
            ]
        },
        options : stdHistStyle("Probability distribution for new ammount of members tomorrow", pallets, true)
    })
}
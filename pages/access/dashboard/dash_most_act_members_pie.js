import { stdHistStyle, stdLegend, stdTitle } from "./std_style.js";

export function getMostActiveMembersDashboard(JSON, pallet) {

    const mostActiveMembersJSON = JSON["most_active_members"];
    const colors = [pallet["COL1"], pallet["COL2"], pallet["COL3"], pallet["COL4"], pallet["COL5"]];
    const labels = [];
    const activity = [];

    mostActiveMembersJSON.forEach(data => {
        const objMember =  data
        const label = Object.keys(objMember)[0];
        labels.push(label);
        activity.push(objMember[label]);
    });

    new Chart("imost_act_members", {
        type : "pie",
        data : {
            labels: labels,
            datasets: [
                {
                    data: activity,
                    backgroundColor : colors
                }
            ]
        },
        options : {
            title : stdTitle(`Top ${mostActiveMembersJSON.length} members in the server`),
            legend: stdLegend(15)
        }
    }) //<---Drawing the pie chart in canvas.
}
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
            labels: (labels.length !== 0) ? labels : ["no user"],
            datasets: [
                {
                    data: (activity.length !== 0) ? activity : [1],
                    backgroundColor : colors,
                    borderWidth: 0
                }
            ]
        },
        options : {
            title : stdTitle((activity.length !== 0) ? `Top ${mostActiveMembersJSON.length} members in the server` : "There is no active user"),
            legend: {display : false}
        }
    }) //<---Drawing the pie chart in canvas.
}
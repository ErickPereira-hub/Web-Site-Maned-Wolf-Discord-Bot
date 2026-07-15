import { getChannelsDashboard } from "./dash_channels.js";
import { getMembersDashboard } from "./dash_member_qtt.js";
import { genDashboardHTML } from "./gen_dashboard_HTML.js";
import { getPoissonForMembersDashboard } from "./dash_poisson_member.js"
import { getMostActiveMembersDashboard } from "./dash_most_act_members_pie.js";
import { getMsgDashboard } from "./dash_msg.js";
import { allZeros, getSubArray } from "./utils.js";
import { mockedJson } from "./mocked.js";

export function generateDashbord(JSON) {
    genDashboardHTML(JSON); //<--- Generating the HTML where the dashboard will be placed at.

    const PALLET = {
        "COL1" : "#679c67",
        "COL2" : "#708ad3",
        "COL3" : "#76c0b0",
        "COL4" : "#9070da",
        "COL5" : "#96b85f",
        "COL6" : "rgba(0, 162, 255, 0.2)",
        "COL7" : "rgba(255, 255, 255, 0.3)",
        "COL8" : "rgba(255, 255, 255, 0.8)",
        "COL9" : "rgba(255, 81, 0, 0.2)",
        "COL10" : "rgb(123, 255, 0)"
    } //<--- Palet of colors that will be used in the dashboard

    //Calling the charts over the injected HTML
    getChannelsDashboard(JSON, PALLET); //<--- Call the part of the dashboard concerning the channels
    getMembersDashboard(JSON, PALLET); //<--- Call the part of the dashboard concerning the members
    getMostActiveMembersDashboard(JSON, PALLET); //<--- Call the graph with the most active members in the server.

    //If the backend doesn't throw the probabilites over messages (null case), we don't show the section with such data. It occurs when the server has been integrated with the bot less than 7 days ago.
    if (JSON["new_msg_probability"] !== null) {
        getMsgDashboard(JSON, PALLET); //<--- Calls the graph with the Poisson distribution for new messages tomorrow
    } else {
        document.getElementById("isec_msg").style.display = "none"; //<--- Hide the section
    }
    
    //If the probabilites of obtaining new members is Zero for every volume (occurs when the server doesn't have new members for the last 7 days), we don't show the new members probability section.
    if (allZeros(getSubArray(JSON["new_member_probability"]["points"], 1))) {
        document.getElementById("imember-graph").style.display = "none"; //<--- Hide the section
    } else {
        getPoissonForMembersDashboard(JSON, PALLET); //<--- Calls the graph with the Poisson distribution for new members tomorrow
    }

}
import { getChannelsDashboard } from "./dashboard/dash_channels.js";
import { getMembersDashboard } from "./dashboard/dash_member_qtt.js";
import { genDashboardHTML } from "./dashboard/gen_dashboard_HTML.js";
import { getPoissonForMembersDashboard } from "./dashboard/dash_poisson_member.js"
import { getMostActiveMembersDashboard } from "./dashboard/dash_most_act_members_pie.js";
import { getMsgDashboard } from "./dashboard/dash_msg.js";

export function generateDashbord(JSON) {
    genDashboardHTML(JSON); //<--- Generating the HTML where the dashboard will be placed at.
    console.log(JSON);

    const PALLET = {
        "COL1" : "#679c67",
        "COL2" : "#708ad3",
        "COL3" : "#76c0b0",
        "COL4" : "#9070da",
        "COL5" : "#96b85f"
    } //<--- Palet of colors that will be used in the dashboard

    getChannelsDashboard(JSON, PALLET); //<--- Call the part of the dashboard concerning the channels
    getMembersDashboard(JSON, PALLET); //<--- Call the part of the dashboard concerning the members
    getPoissonForMembersDashboard(JSON, PALLET);
    getMostActiveMembersDashboard(JSON, PALLET);

    if (JSON["new_msg_probability"] !== null) {
        getMsgDashboard(JSON, PALLET);
    } else {
        document.getElementById("isec_msg").style.display = "none";
    }
}
export function genDashboardHTML(JSON) {
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += `
        <section class = "overall" id = "isec_channel">
            <h2 class = "dash-title">Information about the channels</h2>
            <p>The pie chart bellow illustrates the most active channels in the server. It is based on the total number of messages sent in each channel since the integration of the server with the bot.</p>
            <canvas id = "imost_act_ch" class = "std-dashboard"></canvas>
            <p>The pie chart bellow shows the distribution of NSFW and non-NSFW channels in the server.</p>
            <canvas id = "insfw" class = "std-dashboard"></canvas>
        </section>
        <section class = "overall" id = "isec_member">
            <h2 class = "dash-title">Information about the members</h2>
            <div>
                <p>The figure bellow illustrates the ammount of members inside the server for the past, present and near future as well. Negative numbers represent days in the past, so -5, for example, means 5 days ago, 0 means today and positive numbers represent days in the future (1 means tomorrow, for example)</p>
                <p>The error of the prediction is ${JSON["member_prediction"]["ERROR"].toFixed(2)}%</p>
                <canvas id = "imember_qtt" class = "std-dashboard"></canvas>
            </div>
            <div class = "member-cont">
                <div id = "imember-graph">
                    <p>The histogram bellow illustrates the probability distribuition of acquiring an ammount of new members tomorrow. Furthermore, the probability of obtaining ${JSON["new_member_probability"]["from"]} to ${JSON["new_member_probability"]["until"]} new members tomorrow is ${(JSON["new_member_probability"]["probability"] * 100).toFixed(2)}%</p>
                    <canvas id = "iprob_new_members" class = "std-dashboard"></canvas>
                </div>
                <div>
                    <canvas id = "imost_act_members" class = "std-dashboard"></canvas>
                </div>
                <div>
                    <div class = "show-important-data">Average number of members is ${JSON["members_qtt"]["overall_tot_avg"].toFixed(1)}</div>
                    <div class = "show-important-data">Standard deviation for the number of members is ${JSON["members_qtt"]["overall_tot_std_dev"].toFixed(3)}</div>
                    <div class = "show-important-data">Average variation of members is ${JSON["members_qtt"]["overall_var_avg"].toFixed(2)}</div>
                    <div class = "show-important-data">Standard deviation for variation of members is ${JSON["members_qtt"]["overall_var_std_dev"].toFixed(1)}</div>
                </div>
            </div>
        </section>
        <section class = "overall" id = "isec_msg">
            <h2 class = "dash-title">Information about the messages</h2>
            <p id = "itxt_msg_poisson"></p>
            <canvas id = "inew_msg_dist" class = "std-dashboard"></canvas>
        </section>
    `
}
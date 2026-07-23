export function genDashboardHTML(JSON) {
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += `
        <section class = "overall" id = "isec_channel">
            <h2 class = "dash-title">Information about the channels</h2>
            <div id = "ichannels-cont">
                <div>
                    <p>The pie chart bellow illustrates the most active channels in the server. It is based on the total number of messages sent in each channel since the integration of the server with the bot.</p>
                    <canvas id = "imost_act_ch" class = "std-dashboard"></canvas>
                </div>    
                <div>
                    <p>The pie chart bellow shows the distribution of NSFW and non-NSFW channels in the server.</p>
                    <p style = "margin-top : -18px;">( * ) NSFW means Not Safe For Work, representing a content warning.</p>
                    <canvas id = "insfw" class = "std-dashboard"></canvas>
                </div>
            </div>
        </section>
        <section class = "overall" id = "isec_member">
            <h2 class = "dash-title">Information about the members</h2>
            <div class = "member-cont">
                <div id = "cont_member_graph">
                    <p>The figure bellow illustrates the ammount of members inside the server for the past, present and near future as well. Negative numbers represent days in the past, so -5, for example, means 5 days ago, 0 means today and positive numbers represent days in the future (1 means tomorrow, for example)</p>
                    <p>The error of the prediction is ${JSON["member_prediction"]["ERROR"].toFixed(2)}%</p>
                    <canvas id = "imember_qtt" class = "std-dashboard"></canvas>
                </div>
                <div id = "imember-graph">
                    <p>The histogram bellow illustrates the probability distribuition of acquiring an ammount of new members tomorrow.</p>
                    <p style = "padding-bottom: 4px;">The probability of obtaining ${JSON["new_member_probability"]["from"]} to ${JSON["new_member_probability"]["until"]} new members tomorrow is ${(JSON["new_member_probability"]["probability"] * 100).toFixed(2)}%</p>
                    <p>( * ) The prediction was made based on Poisson distribution</p>
                    <canvas id = "iprob_new_members" class = "std-dashboard"></canvas>
                </div>
                <div>
                    <canvas id = "imost_act_members" class = "std-dashboard"></canvas>
                </div>
                <div id = "icont-imp-info">
                    <p>Average number of members is ${JSON["members_qtt"]["overall_tot_avg"].toFixed(1)}</p>
                    <p>Standard deviation for the number of members is ${JSON["members_qtt"]["overall_tot_std_dev"].toFixed(3)}</p>
                    <p>Average variation of members is ${JSON["members_qtt"]["overall_var_avg"].toFixed(2)}</p>
                    <p>Standard deviation for variation of members is ${JSON["members_qtt"]["overall_var_std_dev"].toFixed(1)}</p>
                </div>
            </div>
        </section>
        <section class = "overall" id = "isec_msg">
            <h2 class = "dash-title">Information about the messages</h2>
            <p id = "itxt_msg_poisson"></p>
            <canvas id = "inew_msg_dist" class = "std-dashboard"></canvas>
            <p class = "aside_msg">You can access the content of deleted and updated messages. This information is sensitive and may include important auditory data. Please, ensure that auditory content is kept strictly confidential and never shared with anyone. The downloaded file will be in csv format. You can open it with any text editor or work with it throughout Excel or Google Sheets.</p>     
            <div id = "download_cont">
                <a class = "download" href = 'http://localhost:3000/download/audit_msg?audit_type=delete'>Download Deletions</a>
                <a class = "download" href = 'http://localhost:3000/download/audit_msg?audit_type=update'>Download Updates</a> 
            </div>
            <p style = "margin-bottom: 40px;">if you want to have the probability of gaining a specific number of messages tomorrow or a specific range of messages tomorrow, click at the bottom bellow</p>
            <div class = "access_but" id = "imock-data" style = "width: 240px;" onclick = "openCloseModalProbabilityMsg(true)">
                <p style = "margin-left: 5px;">PROBABILITY</p>
                <div class = "arrow_logo">
                </div>
            </div>
        </section>
    ` //<--- This HTML code must be called when the DOM has been started.
}
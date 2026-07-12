export function genDashboardHTML() {
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += `
        <section class = "overall" id = "isec_channel">
            <h2 class = "dash-title">Information about the channels</h2>
            <p>The pie chart bellow illustrates the most active channels in the server. It is based on the total number of messages sent in each channel since the integration of the server with the bot.</p>
            <canvas id = "imost_act_members" class = "std-dashboard"></canvas>
            <p>The pie chart bellow shows the distribution of NSFW and non-NSFW channels in the server.</p>
            <canvas id = "insfw" class = "std-dashboard"></canvas>
        </section>
        <section class = "overall" id = "isec_member">
            <h2 class = "dash-title">Information about the members</h2>
            <div>
                <p>The figure bellow illustrates the ammount of members inside the server for the past, present and near future as well. Negative numbers represent days in the past, so -5, for example, means 5 days ago, 0 means today and positive numbers represent days in the future (1 means tomorrow, for example)</p>
                <canvas id = "imember_qtt" class = "std-dashboard"></canvas>
            </div>
            <div>
                <p>The histogram bellow illustrates the probability distribuition of acquiring an ammount of new members tomorrow.</p>
                <canvas id = "iprob_new_members" class = "std-dashboard"></canvas>
            </div>
        </section>
    `
}
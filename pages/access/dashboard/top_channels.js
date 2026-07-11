export function getTopChannels(JSON, main, palet) {

    //Showing the most active members.
    main.innerHTML += `
        <section class = "overall">
            <h2 class = "dash-title">Information about the channels</h2>
            <p>The pie chart bellow illustrates the most active channels in the server. It is based on the total number of messages sent in each channel since the integration of the server with the bot.</p>
            <canvas id = "imost_act_members" class = "std-dashboard"></canvas>
        </section>
    ` //<--- Injecting the Channel data in the HTML

    const mostActiveChannels = JSON["most_active_channels"] //<--- Array of objects with the top channels and quantity of messages.
    const numTopChannels = mostActiveChannels.length;
    const labels = [];
    const spaceValues = [];
    const colors = [palet["green"], palet["sblue"], palet["wblue"], palet["pink"], palet["yellow"]];
    
    for(let i = 0; i < numTopChannels; i++) {
        const key = Object.keys(mostActiveChannels[i])[0];
        labels.push(key) //<--- Pussing the name of the channel
        spaceValues.push(mostActiveChannels[i][key]);//<--- Pushing the number of messages of the key
    }
    
    new Chart("imost_act_members", {
        type : "pie",
        data : {
            labels: labels,
            datasets: [
                {
                    data: spaceValues,
                    backgroundColor : colors
                }
            ]
        },
        options : {
            title : {
                display : true,
                text : `Top ${numTopChannels} channels in the server`,
                fontSize : 20,
                fontColor : "#ffffff"
            },
            legend: {
                labels: {
                    fontColor: "#ffffff",
                    fontSize: 15
                }
            }
        }
    }) //<---Drawing the pie chart in canvas.

}
export function getChannelsDashboard(JSON, pallet) {

    const mostActiveChannels = JSON["most_active_channels"] //<--- Array of objects with the top channels and quantity of messages.
    const numTopChannels = mostActiveChannels.length;
    const labels = [];
    const spaceValues = [];
    const colors = [pallet["COL1"], pallet["COL2"], pallet["COL3"], pallet["COL4"], pallet["COL5"]];
    
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

    new Chart("insfw", {
        type : "pie",
        data : {
            labels: ["nsfw", "non-nsfw"],
            datasets: [
                {
                    data: [JSON["is_nsfw"]["yes"], JSON["is_nsfw"]["no"]],
                    backgroundColor : [pallet["COL1"], pallet["COL2"]]
                }
            ]
        },
        options : {
            title : {
                display : true,
                text : `NSFW distribution`,
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
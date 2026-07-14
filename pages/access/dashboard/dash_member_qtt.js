import { stdxAxisStyle, stdTitle, stdLegend } from "./std_style.js";

export function getMembersDashboard(JSON, pallet) {
    
    //Fetching and organazing the data that concerns quantity of members
    let membersQtt = []; //<--- Array that will have the quantity of members for each day
    const comparativeArray = []; //<--- Will help the chart to take the maximum and minimum of the data with past, present and future data.
    const arrayPredictions = [];
    const posArray = []; //<--- Numeric positions of the days (negative is past and positive is future, while 0 is today)
    const tomorrowPredict = JSON["member_prediction"]["1"]
    const afterTomorrowPredict = JSON["member_prediction"]["2"]
    const afterAfterTomorrowPred = JSON["member_prediction"]["3"]
    const arrayMembersObj = JSON["members_qtt"]["data"];
    const memberDatasetSize = arrayMembersObj.length;
    const EXTREME_DIST = 2; //<--- Empty distance in the chart
    
    arrayMembersObj.forEach(data => {
        membersQtt.push(data);
    })

    if (memberDatasetSize > 20) {
        membersQtt = membersQtt.slice(memberDatasetSize - 20, memberDatasetSize);
    }

    
    for (let i = -membersQtt.length; i < 3; i++) {
        posArray.push(i + 1); //<--- Filling the positions
    }

    for (let i = 0; i < membersQtt.length; i++) {
        comparativeArray.push(membersQtt[i]); //<--- Filling with data from the past and today
    }

    for (let i = 0; i < membersQtt.length - 1; i++) {
        arrayPredictions.push(null); //<--- null is important if we want to hide the points. Hiding data from the past
    }

    arrayPredictions.push(membersQtt[membersQtt.length - 1]); //<--- Placing the todays data
    
    for (let i = 1; i < 4; i++) {
        arrayPredictions.push(JSON["member_prediction"][i]); //<--- Placing data from the future
        comparativeArray.push(JSON["member_prediction"][i]);
    }

    new Chart("imember_qtt", {
        type : "line",
        data : {
            labels: posArray,
            datasets: [
                {   
                    label : "future",
                    data : arrayPredictions,
                    backgroundColor: pallet["COL6"],
                    borderColor: pallet["COL10"],
                    pointRadius : 5,
                    fill : true,
                    lineTension : 0
                },
                {   
                    label : "past",
                    data: membersQtt,
                    backgroundColor : pallet["COL9"],
                    borderColor: pallet["COL10"],
                    pointRadius : 5,
                    fill : true,
                    lineTension : 0,
                }
            ]
        },
        options : {
            legend : stdLegend(20),
            title : stdTitle(`Quantity of members per day for the last ${membersQtt.length} days`),
            scales : {
                xAxes : stdxAxisStyle(pallet),
                yAxes : [
                    {
                        gridLines : {
                            color : pallet["COL7"],
                            zeroLineColor : pallet["COL7"]
                        },
                        ticks : {
                            fontColor : pallet["COL8"],
                            fontSize : 25,
                            min : Math.min(...comparativeArray) - EXTREME_DIST >= 0 ? Math.min(...comparativeArray) - EXTREME_DIST : 0,
                            max : Math.max(...comparativeArray) + EXTREME_DIST
                        }
                    }
                ]
            }
        }
    }) //<--- Ploting the graph of quantity of members in past, present and future
}
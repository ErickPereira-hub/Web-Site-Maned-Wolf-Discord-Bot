export function getMembersDashboard(JSON, pallet) {
    
    //Fetching and organazing the data that concerns quantity of members
    let membersQtt = [];
    const arrayMembersObj = JSON["members_qtt"]["data"];
    
    let memberDatasetSize = arrayMembersObj.length;
    for (let i = 0; i < memberDatasetSize; i++) {
        membersQtt.push(arrayMembersObj[i])
    }
    
    if (memberDatasetSize > 20) {
        membersQtt = membersQtt.slice(memberDatasetSize - 20, memberDatasetSize);
    }

    const posArray = [];
    for (let i = -membersQtt.length; i < 3; i++) {
        posArray.push(i + 1);
    }

    const tomorrowPredict = JSON["member_prediction"]["1"]
    const afterTomorrowPredict = JSON["member_prediction"]["2"]
    const afterAfterTomorrowPred = JSON["member_prediction"]["3"]

    const arrayPredictions = [];

    for (let i = 0; i < membersQtt.length - 1; i++) {
        arrayPredictions.push(null);
    }
    arrayPredictions.push(membersQtt[membersQtt.length - 1]);
    for (let i = 1; i < 4; i++) {
        arrayPredictions.push(JSON["member_prediction"][`${i}`]);
    }

    new Chart("imember_qtt", {
        type : "line",
        data : {
            labels: posArray,
            datasets: [
                {   
                    label : "future",
                    data : arrayPredictions,
                    backgroundColor: "rgba(136, 255, 0, 0.2)",
                    borderColor: "rgb(123, 255, 0)",
                    pointRadius : 5,
                    fill : true,
                    lineTension : 0
                },
                {   
                    label : "past",
                    data: membersQtt,
                    backgroundColor : "rgba(208, 255, 0, 0.2)",
                    borderColor: "rgb(123, 255, 0)",
                    pointRadius : 5,
                    fill : true,
                    lineTension : 0,
                }
            ]
        },
        options : {
            legend : {
                labels : {
                    fontColor : "#ffffff",
                    fontSize : 20
                }
            },
            title : {
                display : true,
                text : `Quantity of members per day for the last ${membersQtt.length} days`,
                fontSize : 20,
                fontColor : "#ffffff"
            },
            scales : {
                xAxes : [
                    {
                        gridLines : {
                            color : "rgba(255, 255, 255, 0.3)",
                            zeroLineColor : "rgba(255, 255, 255, 0.3)"
                        },
                        ticks : {
                            fontColor : "rgba(255, 255, 255, 0.8)",
                            fontSize : 25
                        }
                    }
                ],
                yAxes : [
                    {
                        gridLines : {
                            color : "rgba(255, 255, 255, 0.3)",
                            zeroLineColor : "rgba(255, 255, 255, 0.3)"
                        },
                        ticks : {
                            fontColor : "rgba(255, 255, 255, 0.8)",
                            fontSize : 25,
                            min : 0,
                            max : Math.max(...membersQtt) + 1
                        }
                    }
                ]
            }
        }
    }) //<--- Ploting the graph of quantity of members in past, present and future
}
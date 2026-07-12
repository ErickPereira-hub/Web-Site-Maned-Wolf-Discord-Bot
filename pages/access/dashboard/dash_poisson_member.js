export function getPoissonForMembersDashboard(JSON, pallets) {
    
    //Extracting and organizing the data from the JSON
    const newMemberProbabilities = JSON["new_member_probability"]["points"];
    const qtt = [];
    const prob = [];
    for (let i = 0; i < newMemberProbabilities.length; i++) {
        qtt.push(newMemberProbabilities[i][0]);
        prob.push(newMemberProbabilities[i][1]);
    }
    const probToShow = {
        from : JSON["new_member_probability"]["from"],
        until : JSON["new_member_probability"]["until"],
        p : JSON["new_member_probability"]["probability"]
    }
    console.log(probToShow);
    //Generating the chart
    new Chart("iprob_new_members", {
        type : "bar",
        data : {
            labels : qtt,
            datasets : [
                {
                    label : "graph",
                    data : prob,
                    backgroundColor : pallets["COL1"]
                },
                {
                    label : `between ${probToShow.from} to ${probToShow.until} new members`,
                    data : prob,
                    backgroundColor : pallets["COL2"]
                }
            ]
        },
        options : {
            legend : {
                labels : {
                    fontColor : "#ffffff",
                    fontSize : 20,
                    text : "x"
                }
            },
            title : {
                display : true,
                text : `Probability distribuition for new members tomorrow`,
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
                        }
                    }
                ]
            }
        }
    })
}
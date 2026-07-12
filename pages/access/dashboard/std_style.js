export const stdHistStyle = title => {
    return {
        legend : {
            labels : {
                fontColor : "#ffffff",
                fontSize : 20,
                text : "x"
            }
        },
        title : {
            display : true,
            text : title,
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
}

export const stdxAxisStyle = [
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
]

export const stdTitle = title => {
    return {
        display : true,
        text : title,
        fontSize : 20,
        fontColor : "#ffffff"
    }
}

export const stdLegend = size => {
    return {
        labels : {
            fontColor : "#ffffff",
            fontSize : 20
        }
    }
}
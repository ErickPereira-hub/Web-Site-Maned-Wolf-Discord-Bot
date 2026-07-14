export const stdHistStyle = (title, pallet, has_legend, xMin, xMax) => {
    return {
        legend : {
            display : has_legend,
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
                        color : pallet["COL7"],
                        zeroLineColor : pallet["COL7"]
                    },
                    ticks : {
                        fontColor : pallet["COL8"],
                        fontSize : 25,
                        min : xMin,
                        max : xMax
                    }
                }
            ],
            yAxes : [
                {
                    gridLines : {
                        color :pallet["COL7"],
                        zeroLineColor : pallet["COL7"]
                    },
                    ticks : {
                        fontColor : pallet["COL8"],
                        fontSize : 25,
                    }
                }
            ]
        }
    }
}

export const stdxAxisStyle = (pallet) =>
{
    return [
        {
            gridLines : {
                color : pallet["COL7"],
                zeroLineColor : pallet["COL7"]
            },
            ticks : {
                fontColor : pallet["COL8"],
                fontSize : 25
            }
        }
    ]
}

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
import React from "react";
import ReactEcharts from "echarts-for-react";

const Scatter : React.FC<{data : any}> =  ({data}) => {

    const passOption = () => {
        let dataSet : any = [];

        // passing  data for displaying on chart in dataSet
        data.forEach((item : any) => {
            dataSet.push([item["Color intensity"], item["Hue"]]);
        });


        // echarts scatter plot 
        const option = {
            title: {
                text: 'Scatter plot',
            },
            tooltip: {
                showDelay: 0,
                formatter: function(params : any) {
                    if (params.value.length > 1) {
                        return (
                            params.seriesName +
                            ' :<br/>' +
                            params.value[0] +
                            ' ' +
                            params.value[1] +
                            ' '
                        );
                    }
                },

                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                              }
                            }
                  },
            xAxis: [{
                type: 'value',
                scale: true,
                name: 'Hue',
                rotate: 50,

                splitLine: {
                    show: false
                }
                }],
            yAxis: [{
                type: 'value',
                scale: true,
                name: 'Color intensity',
                nameLocation: "center",
                nameGap: 25,
                nameTextStyle: {
                  align: "center"
                },
                splitLine: {
                    show: false
                }
                  }],
            series: [{
                name: 'Alchol ',
                type: 'scatter',
                data: dataSet
                    },]
        };

        return option;
    };


    return < ReactEcharts option = {passOption()} />;
}

export default Scatter;
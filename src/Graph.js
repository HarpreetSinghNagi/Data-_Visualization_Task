import React from "react";
import ReactEcharts from "echarts-for-react"; 
import variableName from "./js/name"
import arrays  from "./js/graphArray";
function Graph() {  
  
 
const option = {

  title: {
    text: 'Bar & Scatter '
  },
  
  legend: {},
  tooltip: {},
  xAxis: {
    type: 'category',
    data: variableName
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: arrays,
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};


 
return <ReactEcharts option={option} />;
} 
export default Graph;
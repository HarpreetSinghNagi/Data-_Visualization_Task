import React from "react";
import ReactEcharts from "echarts-for-react"; 
import arrays from './js/scatterArray'
function Scatter() { 

  // console.log(arrays)
  

  
 const  option = {
    title: {
      
      subtext: 'Scatter plot',
      
    },
    grid: {
      left: '3%',
      right: '7%',
      bottom: '7%',
      containLabel: true
    },
    tooltip: {
   
      showDelay: 0,
      formatter: function (params) {
        if (params.value.length > 1) {
          return (
            params.seriesName +
            ' :<br/>' +
            params.value[0] +
            ' ' +
            params.value[1] +
            ' '
          );
        } else {
          return (
            params.seriesName +
            ' :<br/>' +
            params.name +
            ' : ' +
            params.value +
            '  '
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
   
    
    legend: {
      data: ['Color intensity', 'Hue'],
      left: 'center',
      bottom: 10
    },
    xAxis: [
      {
        type: 'value',
        scale: true,
        name: 'Color intensity',
        rotate:50,
       
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: 'Hue',
       
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: 'Alchol ',
        type: 'scatter',
        emphasis: {
          focus: 'series'
        },
       
        data: arrays
          
      
       
      
      },
     
       
    ]
  };
return <ReactEcharts option={option} />;
} 
export default Scatter;
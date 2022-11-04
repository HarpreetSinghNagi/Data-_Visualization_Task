import React from "react";
import ReactEcharts from "echarts-for-react"; 
import arrays from './js/varialbes'
function Graph() { 

  console.log(arrays)
  
  var items1 = arrays[0];
  var items2 = arrays[1];
  var items3 = arrays[2] ;
 const  option = {
    title: {
      text: 'Wine Qualtiy ',
      subtext: 'Wine Data Set',
      x:'center'
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
        name: 'Color intensity ',
      
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
        name: 'Alchol 1',
        type: 'scatter',
        emphasis: {
          focus: 'series'
        },
       
        data: items1
          
      
       
      
      },
      {
        name: 'Alchol 2',
        type: 'scatter',
        emphasis: {
          focus: 'series'
        },
       
        data: items2,
      
      
     
      },
       {
        name: 'Alchol 3',
        type: 'scatter',
        emphasis: {
          focus: 'series'
        },
       
        data:items3 ,
      
      
     
      }
    ]
  };
return <ReactEcharts option={option} />;
} 
export default Graph;
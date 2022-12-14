import React from "react";
import ReactEcharts from "echarts-for-react"; 




const Graph : React.FC<{data : any}> =  ({data}) => {
  const passOption = () => {
   
    let alcholTypes : any  = {};

    
    let MalicAvg : any = [];

    data.forEach((obj : any ) => {
      if (alcholTypes[obj["Alcohol"]] ) {
        alcholTypes[obj["Alcohol"]][0] += obj["Malic Acid"];
        alcholTypes[obj["Alcohol"]][1]++;
      } else {
        alcholTypes[obj["Alcohol"]] = [obj["Malic Acid"], 1];
      }
    });

    //pushing avg malic acid of each in array
    for (let key in alcholTypes) {
 
      alcholTypes[key].push(
        alcholTypes[key][0] / alcholTypes[key][1]
      );
      MalicAvg.push(alcholTypes[key][2].toFixed(2));
    }

   
    console.log(MalicAvg)
    

  
 
const option = {

  title: {
    text: 'Bar  '
  },
  
  
  tooltip: {},
  xAxis: {
    type: 'category',
    data: [...Object.keys(alcholTypes)]
  },
  yAxis: {
    type: 'value',
    name: "Avg Malic Acid",
    nameLocation: "middle",
  },
  series: [
    {
      data: [...MalicAvg],
      type: 'bar',
      showBackground: true,
      barWidth: "40%",
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};


return option;
};


 
return <ReactEcharts option={passOption()}  />;
} 
export default Graph;
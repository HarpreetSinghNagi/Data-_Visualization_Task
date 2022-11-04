import data from '../data/wine.json'

let text = data ;

const items=[];

for (var ele of text) 
{

// array of pairs contains hue and color intensity 

  items.push([ ele.Hue , ele["Color intensity"] ]);
  
//    if(ele.Alcohol=== 2)
//   // console.log("run");
//   items.push([ele["Color intensity"] , ele.Hue]);
  
// //    if(ele.Alcohol=== 3)
// //   // console.log("run");
//   items.push([ele["Color intensity"] , ele.Hue]);
 
}




export default items;

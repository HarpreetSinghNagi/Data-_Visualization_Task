import data from '../data/wine.json'

let text = data ;

const items=[];

for (var ele of text) 
{

//   if(ele.Alcohol=== 1)
//   // console.log("run");
  items.push([ele["Color intensity"] , ele.Hue]);
  
//    if(ele.Alcohol=== 2)
//   // console.log("run");
//   items.push([ele["Color intensity"] , ele.Hue]);
  
// //    if(ele.Alcohol=== 3)
// //   // console.log("run");
//   items.push([ele["Color intensity"] , ele.Hue]);
 
}
// console.log(items1)
// console.log(items2)
// console.log(items3)



export default items;

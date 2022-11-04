import data from '../data/wine.json'

let text = data ;

const items1=[];
const items2=[];
const items3=[];
for (var ele of text) 
{

  if(ele.Alcohol=== 1)
  // console.log("run");
  items1.push([ele["Color intensity"] , ele.Hue]);
  
   if(ele.Alcohol=== 2)
  // console.log("run");
  items2.push([ele["Color intensity"] , ele.Hue]);
  
   if(ele.Alcohol=== 3)
  // console.log("run");
  items3.push([ele["Color intensity"] , ele.Hue]);
 
}
// console.log(items1)
// console.log(items2)
// console.log(items3)

let arrays = [items1 , items2 , items3];

export default arrays;

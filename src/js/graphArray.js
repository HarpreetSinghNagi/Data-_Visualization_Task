import data from '../data/wine.json'

let text = data ;


class classs {
    constructor(sum , count){
      this.sum = sum ; 
      this.count = count ; 
    }
    
    };
    
   let myMap = new Map();
  
 
 
 
 for (let i = 0; i < text.length; i += 1) 
 {
   
    
   
   if(!myMap.has(text[i].Alcohol)){
     let obj = new classs(text[i]["Malic Acid"] , 1);
   myMap.set(text[i].Alcohol , obj )
   
   // console.log(myMap.get(1))
   
   }
   else
   {
   let obj =   myMap.get(text[i].Alcohol)
       obj.sum+=text[i]["Malic Acid"];
       obj.count++;
          myMap.set(text[i].Alcohol , obj )
     
   }
   
 
 }
 let arrays =[]
 // console.log(myMap.size)
 
 for( var value of myMap.values())
 {
   arrays.push(value.sum/value.count);
 }
 
export default arrays
 
 
 
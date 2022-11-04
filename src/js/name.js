import data from '../data/wine.json'

let text = data ;

// define set for uniques alcohol types to be stored in 

const values = new Set();
for( var ele of text)
{
  values.add(ele.Alcohol);
  
}

var variableName =[];

for(var i of values)
{
    variableName.push("Alcohol "+i)
}

export default variableName;
import data from '../data/wine.json'

let text = data ;

const values = new Set();
for( var ele of text)
{
  values.add(ele.Alcohol);
  
}

var variableName = [...values];

export default variableName;
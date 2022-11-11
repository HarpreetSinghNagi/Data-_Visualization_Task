import React from 'react';
import './styles/App.css';
import Graph from './components/Graph';
import Scatter from './components/Scaller'
import data from './data/wine.js'
 
function App() {
  return (
    <div className="App">
          <Graph data={data}/>
          <Scatter  data={data} />
          
    </div>
  );
}
 
export default App;

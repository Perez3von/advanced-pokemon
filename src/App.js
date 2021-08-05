import React, { Component } from 'react';
import './App.css';
import PokeList from './PokeList.js';
import testData from './data/testData.js';

class App  extends Component {
  // state = {  }
  render() { 
    

    return ( 

      <div className='myApp' >
        <PokeList pokemon_array = {testData['results']}/>

      </div>

     );
  }
}
 
export default App;

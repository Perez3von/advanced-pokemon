import React, { Component } from 'react';
import './App.css';
import PokeList from './PokeList.js';
import testData from './data/testData.js';

class App  extends Component {

   state = { 
      data:null,
      isLoaded:false            
    }

  async componentDidMount(){
    //make url a state
    const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const response= await fetch(url);
    const data = await response.json();
    this.setState({data: data.results});
    this.setState({isLoaded:true});
  }

  render() { 
    if(!this.state.isLoaded){
      return <p> Error</p>

    }

    else{
    return ( 
 
      <div className='myApp' >

        <PokeList pokemon_array = {this.state.data}/>

      </div>

     );
    }
  }
}
 
export default App;

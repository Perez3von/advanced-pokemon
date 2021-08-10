import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Pokemon from './Pokemon.js';
import PokemonDetails from './PokemonDetails.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App  extends Component {

  render() { 

   

    
    return ( 
      <section className='app'>
          <BrowserRouter>
            <Header />
              <Switch>
                <Route path='/pokemon-details' component={PokemonDetails} />
                <Route path='/pokemon' component={Pokemon} />
                <Route path='/' component={Home} />
              </Switch>
          </BrowserRouter>
      </section>
     );
    }
  
}
 
export default App;

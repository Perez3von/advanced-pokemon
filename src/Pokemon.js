import React, { Component } from 'react';
import PokeList from './PokeList.js';
class Pokemon extends Component {
    
    state = { 
        data:null,
        isLoaded:false,
        base_url:'https://pokedex-alchemy.herokuapp.com/api/pokedex',
        sortOrder:null,
        query:''    
      }
      fetchPokemon = async () => {
  
        let searchParams = new URLSearchParams();
  
        if(this.state.query){
          searchParams.set('pokemon', this.state.query);
        }
        if(this.state.sortOrder){
  
          searchParams.set('sort', 'pokemon');
          searchParams.set('direction', this.state.sortOrder);
        }
  
        let url = this.state.base_url + `?${searchParams.toString()}`
        let res = await fetch(url);
        let data = await res.json();
        this.setState({ data: data.results, isLoaded: true});
  
      }
  
      queryPokemon = (e) => {
        this.setState({query:e.target.value});
        console.log(this.state.query);
  
      }
      sortPokemon = (e) => {
        this.setState({ sortOrder: e.target.value });
    };
  
    componentDidMount(){
      this.fetchPokemon();
    }
  
  
    // async componentDidMount(){
    //   //make url a state
    //   const url = this.state.base_url;
    //   const response= await fetch(url);
    //   const data = await response.json();
    //   this.setState({data: data.results});
    //   this.setState({isLoaded:true});
    // }
  
    render() { 
  
      const {sortOrder} = this.state;
  
      if(!this.state.isLoaded){
  
        return <p>Loading...</p>
  
      }
  
      else{
      return ( 
  
        
        <div className='myApp' >
          <h2>POKEMON LIST</h2>
  
          <input onChange={this.queryPokemon} type='text'></input>
  
          <button onClick={this.fetchPokemon}>Viw Pokemon</button>
  
          <select className="dropDown" defaultValue={sortOrder} onChange={this.sortPokemon}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
          </select>
          <PokeList pokemon_array = {this.state.data}/>
  
        </div>
  
       );
      }
    }
  }
 
export default Pokemon;
import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
class PokeList extends Component {
    
    render() { 

        const {pokemon_array} = this.props;

        return ( 
        <div className='pokemon-list'>
            <ul>
                {pokemon_array.map((pokemon_object) => {
                    const {url, _id, id, pokemon} = pokemon_object;
                    return  <PokeItem url={url} pokemon={pokemon} id={_id} key={id} />
                })}

            </ul>
        </div>


         );
    }
}
 
export default PokeList;
import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
class PokeList extends Component {
    
    render() { 

        const {pokemon_array} = this.props;

        return ( 

        <div className='pokemon-list'>
            <ul>
                {pokemon_array.map((pokemon_object) => {
                    const {url_image, _id, id, pokemon, ability_1} = pokemon_object;
                    return  <PokeItem url={url_image} pokemon={pokemon} _id={_id} key={id} ability={ability_1} /> 
                    
                })}
            </ul>
        </div>


         );
    }
}
 
export default PokeList;
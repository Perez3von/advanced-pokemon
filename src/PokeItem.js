import React, { Component } from 'react';

class PokeItem extends Component {
    
    render() { 
        //whole object
        const{url, pokemon, _id, ability} = this.props;
        return ( 

            <p>
                <img src={url} id={_id} alt={pokemon} width='200px'/>
                <label ability={ability}> Pokemon: {pokemon}---Ability: {ability}</label>
            </p>

         );
    }
}
 
export default PokeItem;
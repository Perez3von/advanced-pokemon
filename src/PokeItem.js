import React, { Component } from 'react';

class PokeItem extends Component {
    
    render() { 
        //whole object
        const{url, pokemon, _id} = this.props;
        return ( 

            <p>
                <img src={url} id={_id} alt={pokemon}  width='200px'/>
            </p>

         );
    }
}
 
export default PokeItem;
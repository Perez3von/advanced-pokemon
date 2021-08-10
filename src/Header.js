import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    
    render() { 
        return ( 
            <header>
                <h2>Here the header</h2>
                <div className='links'>

                    <NavLink exact to='/'>
                        Home
                    </NavLink>
                    <NavLink exact to='/pokemon'>
                        Pokemon List
                    </NavLink>
                    <NavLink exact to='/pokemon-details'>
                        Pokemon Details
                    </NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;
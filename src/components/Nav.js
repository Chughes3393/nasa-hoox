import React from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
    return(
        <nav>
           
            <Link to='/'>Home</Link>
            <Link to='nasalist'>NASA List</Link>
            <Link to='about'>About</Link>
            <Link to='giphy'>Giphy</Link>
            <Link to='starships'>StarShips</Link>
        </nav>
    );
}

export default Nav;
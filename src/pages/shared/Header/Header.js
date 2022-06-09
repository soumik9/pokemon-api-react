import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="w-full bg-indigo-400 shadow-lg px-6 py-4 text-center">
            <Link to='/'><h1 className="font-bold text-xl text-white uppercase tracking-wider">PokeMon Api</h1></Link>
            
        </div>
    );
};

export default Header;
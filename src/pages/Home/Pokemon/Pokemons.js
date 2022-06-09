import React from 'react';
import Pokemon from './Pokemon';

const Pokemons = ({ pokemons }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>

        {
            pokemons.map((pokemon, index) => <Pokemon
                key={index}
                pokemon={pokemon}
            />)
        }

    </div>
    );
};

export default Pokemons;
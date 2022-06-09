import React, { useEffect, useState } from 'react';
import Spinner from '../shared/Spinner/Spinner';
import Pokemons from './Pokemon/Pokemons';
import Search from './Search/Search';

const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.json())
            .then(data => {
                setPokemons(data.results);
                setLoading(false);
            })
    }, [pokemons]);

    if(loading){ return <Spinner />}

    return (
        <div className="p-10">

            <Search />
            <Pokemons pokemons={pokemons} />

        </div>
    );
};

export default Home;
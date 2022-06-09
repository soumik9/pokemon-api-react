import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';

const Search = ({ setPokemons }) => {

    const [error, setError] = useState('');    
    const [apiError, setApiError] = useState('');    
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState({});

    useEffect( () => {
        if(searchText){
            fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
            .then(res => {
                if(res.status === 404){
                    setSearchResult({});
                    setApiError('Please give valid Pokemon name!')
                }
                return res.json();
            })
            .then(data => {
                setApiError('');
                setSearchResult(data);
            })
        }
    }, [searchText]);

    const getSearchText = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        console.log(text);

        if(text) {
            setSearchText(text);
            setError('')
         
        }else{
            setSearchResult({});
            setApiError('');
            setError('Please insert something to get result!');
        }
    }

    return (
        <>
            <div className="flex justify-center mb-5">
                <form className="flex border-2 rounded" onSubmit={getSearchText}>
                    <input type="text" name='search' id='search' className="px-4 py-2 w-80" placeholder="Search..." />
                    <button type='submit' className="flex items-center justify-center px-4 border-l">Search</button>
                </form>
            </div>

            { error && <p className='text-center text-red-500 mb-5'>{error}</p> }
            { apiError && <p className='text-center text-red-500 mb-5'>{apiError}</p> }

            { searchResult.abilities && <SearchResult searchResult={searchResult} /> }
            {/* <SearchResult searchResult={searchResult} /> */}
        </>
    );
};

export default Search;
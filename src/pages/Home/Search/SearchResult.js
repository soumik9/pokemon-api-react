import React from 'react';

const SearchResult = ({ searchResult }) => {

    const { abilities, name, game_indices, moves, sprites, types } = searchResult;

    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex flex justify-center mb-5">
            <div className="border-r border-b border-l bordet-t border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className='flex gap-3'>
                        <img src={sprites?.back_default} alt="" />
                        <img src={sprites?.back_female} alt="" />
                        <img src={sprites?.back_shiny} alt="" />
                        <img src={sprites?.front_default} alt="" />
                        <img src={sprites?.front_shiny} alt="" />
                        <img src={sprites?.front_shiny_female} alt="" />
                    </div>

                    <p className="text-sm flex items-center mb-2">
                        Pokemon Name: <span className='text-red-600 ml-1'> {name}</span>
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Abilities: {abilities?.map((ab, index) => <span key={index} className='mr-2 text-orange-500'>{ab.ability.name}</span>)}</div>
                    <p className="text-gray-900 mb-2">Types: {types?.map((ty, index) => <span key={index} className='mr-2 text-orange-500'>{ty.type.name}</span>)}</p>
                    <p className="text-gray-900 mb-2">Game Indices: {game_indices?.map((gi, index) => <span key={index} className='mr-2 text-orange-500'>{gi.version.name}</span>)}</p>

                    <p className="text-gray-900 mb-2">Moves: </p>

                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
                        {moves?.map((mo, index) => (
                            <>
                                <div className="max-w-sm rounded overflow-hidden bg-teal-400 shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-sm inline-block bg-gray-200 rounded-full px-3 py-1 text-orange-900 mb-2 mr-2">
                                        {mo.move.name}</div>
                                        <div className='flex flex-wrap'>
                                            <p className='text-white mr-2'>Move Learn Method: </p>
                                            {mo.version_group_details.map((vgd, index) => <p key={index} className="text-sm text-violet-100 mr-2">
                                            {vgd.move_learn_method.name}</p> )}
                                            
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchResult;
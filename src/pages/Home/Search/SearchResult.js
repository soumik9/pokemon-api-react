import React from 'react';

const SearchResult = ({ searchResult }) => {

    const {abilities, forms} = searchResult;

    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex flex justify-center mb-5">
            <div className="border-r border-b border-l bordet-t border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm flex items-center">
                       Pokemon Name: <span className='text-red-600 ml-1'> {forms[0].name}</span>
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Abilities: {abilities?.map((ab, index) => <span key={index} className='mr-2 text-orange-500'>{ab.ability.name}</span>)}</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
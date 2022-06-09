import React from 'react';

const Pokemon = ({ pokemon }) => {

    const { name } = pokemon;

    return (
        <div className="max-w-sm rounded overflow-hidden bg-teal-700 shadow-lg">
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-sm inline-block bg-gray-200 rounded-full px-3 py-1 text-orange-900 mr-2">{ name }</div>
            </div>
        </div>
    );
};

export default Pokemon;
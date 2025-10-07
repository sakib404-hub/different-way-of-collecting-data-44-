import React from 'react';
import Special from './Special';

const Cousin = ({ name, anotherAsset }) => {
    return (
        <div className='border border-cyan-300 m-4 p-4 rounded-2xl'>
            <h3>{name}</h3>
            {
                name === 'Tom Tom' && <Special anotherAsset={anotherAsset}></Special>
            }
        </div>
    );
};

export default Cousin;
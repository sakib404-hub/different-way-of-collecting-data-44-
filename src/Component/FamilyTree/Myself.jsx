import React from 'react';
import Special from './Special';

const Myself = ({ asset }) => {
    return (
        <div className='border border-cyan-300 m-4 p-4 rounded-2xl'>
            <h3 className='text-center'>MySelf</h3>

            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;
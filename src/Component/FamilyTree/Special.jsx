import React from 'react';

const Special = ({ asset, anotherAsset }) => {
    return (
        <div className='border border-cyan-300 m-4 p-4 rounded-2xl'>
            <h3>Special : {asset} {anotherAsset}</h3>
        </div>
    );
};

export default Special;
import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({ asset, anotherAsset }) => {
    const newAsset = useContext(AssetContext);
    return (
        <div className='border border-cyan-300 m-4 p-4 rounded-2xl'>
            <h3>Special : {asset} {anotherAsset}</h3>
            <p>New Asset :{newAsset}</p>
        </div>
    );
};

export default Special;
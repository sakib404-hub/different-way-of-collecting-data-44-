import React, { createContext } from 'react';
import Grandpa from './Grandpa';

export const AssetContext = createContext('');

const FamilyTree = () => {
    const asset = 'Diamond'
    const asset2 = 'Black Diamond'
    return (
        <div>
            <h2 className='text-2xl font-bold'>Family Tree</h2>
            <AssetContext.Provider value={asset2}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;
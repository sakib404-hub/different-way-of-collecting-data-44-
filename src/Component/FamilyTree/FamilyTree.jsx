import React from 'react';
import Grandpa from './Grandpa';

const FamilyTree = () => {
    const asset = 'Diamond'
    return (
        <div>
            <h2 className='text-2xl font-bold'>Family Tree</h2>
            <Grandpa asset={asset}></Grandpa>
        </div>
    );
};

export default FamilyTree;
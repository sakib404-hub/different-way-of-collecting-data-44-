import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({ asset }) => {
    const anotherAsset = 'Gold';
    return (
        <div className='border border-cyan-300 m-4 p-4 rounded-2xl'>
            <p className='text-xl font-semibold text-center'>Grandpa</p>
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt anotherAsset={anotherAsset}></Aunt>
            </section>
        </div>
    );
};

export default Grandpa; <p>Grandpa</p>
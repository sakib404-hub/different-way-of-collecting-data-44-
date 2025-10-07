import React from 'react';
import Cousin from './Cousin';

const Aunt = ({ anotherAsset }) => {
    return (
        <div className='border border-cyan-300 m-4 p-4 rounded-2xl'>
            <h2 className='text-center'>Aunt</h2>
            <section className='flex'>
                <Cousin name={'Tom Tom'}
                    anotherAsset={anotherAsset}></Cousin>
                <Cousin name={'Jo Jo'}></Cousin>
            </section>
        </div>
    );
};

export default Aunt; <h2>Aunt</h2>
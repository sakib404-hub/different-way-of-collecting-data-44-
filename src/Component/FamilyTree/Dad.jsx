import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({ asset }) => {
    return (
        <div className='border border-cyan-300 m-4 p-4 rounded-2xl'>
            <h2 className='text-center'>Dad</h2>
            <section className='border border-cyan-300 m-4 p-4 rounded-2xl flex'>
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;
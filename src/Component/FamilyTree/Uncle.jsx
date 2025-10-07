import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='border border-cyan-300 m-4 p-4 rounded-2xl'>
            <h3 className='text-center'>Uncle</h3>
            <section className='border border-cyan-300 m-4 p-4 rounded-2xl flex'>
                <Cousin name={'Rafsan'}>
                </Cousin>
                <Cousin name={'Rafsana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
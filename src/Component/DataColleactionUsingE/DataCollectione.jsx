import React, { useState } from 'react';

const DataCollectione = () => {

    const [error, setError] = useState('');

    const handleDataCollection = (FormData) => {

        const username = FormData.get('username');
        const email = FormData.get('email');
        const password = FormData.get('password');

        if ((password.length < 5)) {
            setError('Password must be six digits or longer')
        }
        else {
            setError('');
            const newPerson = {
                username,
                email,
                password
            }
            console.log(newPerson)
        }
    }

    return (
        <div className='shadow-lg bg-gray-800 flex flex-col items-center justify- p-8 rounded-2xl space-y-4'>
            <form
                action={handleDataCollection}
                className='flex flex-col items-between justify-center'>
                <div className='p-4 flex items-center justify-between gap-3'>
                    <label htmlFor="username"
                        className=''>Username</label>
                    <input
                        type="text"
                        id='username'
                        name='username'
                        placeholder='username'
                        className='border px-4 py-2 rounded-2xl' />
                </div>
                <div className='p-4 flex items-center justify-between gap-3'>
                    <label htmlFor="email"
                        className=''>Email</label>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        placeholder='email'
                        required
                        className='border px-4 py-2 rounded-2xl' />
                </div>
                <div className='p-4 flex items-center justify-between gap-3'>
                    <label htmlFor="password"
                        className=''>Password  </label>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        placeholder='password'
                        required
                        className='border px-4 py-2 rounded-2xl' />
                </div>
                <div className='flex items-center justify-center'>
                    <input
                        type="submit"
                        value="submit"
                        className='border px-8 py-1 rounded-2xl bg-gray-700 
                        hover:bg-amber-600 duration-800' />
                </div>

            </form>
            <div className='text-rose-600'>
                {error}
            </div>
        </div>
    );
};

export default DataCollectione;
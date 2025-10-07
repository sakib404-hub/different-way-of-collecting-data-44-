import React from 'react';

const Form = () => {
    return (
        <div className='shadow-lg bg-gray-800 flex items-center justify-center p-8 rounded-2xl'>
            <form className='flex flex-col items-between justify-center'>
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
        </div>
    );
};

export default Form;
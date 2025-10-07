import React, { useRef } from 'react';

const Uncontrolled = () => {

    const emailRef = useRef('');
    const nameRef = useRef('');
    const passRef = useRef('');

    const handleFormSubmission = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        const newLog = {
            name,
            email,
            password
        }
        console.log(newLog);

        // another option is availabe for the uncontrolled version 
        //! nameRef.current.value = '';
        //! emailRef.current.value = '';
        //! passRef.current.value = '';


        e.target.reset(); //This is the option 1 os resetting
    }
    return (
        <div className='shadow-lg bg-gray-800 flex items-center justify-center p-8 rounded-2xl'>
            <form
                onSubmit={handleFormSubmission}
                className='flex flex-col items-between justify-center'>
                <div className='p-4 flex items-center justify-between gap-3'>
                    <label htmlFor="username"
                        className=''>Username</label>
                    <input
                        type="text"
                        id='username'
                        name='username'
                        ref={nameRef}
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
                        ref={emailRef}
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
                        ref={passRef}
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

export default Uncontrolled;
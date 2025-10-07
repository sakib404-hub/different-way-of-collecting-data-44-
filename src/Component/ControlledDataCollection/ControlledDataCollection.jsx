// import React, { useState } from 'react';
import useInputChange from '../../Hooks/useInputChange/useInputChange';

const ControlledDataCollection = () => {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');

    const [name, setName] = useInputChange('');
    const [email, setEmail] = useInputChange('');
    const [password, setPassword] = useInputChange('');

    console.log(name, email, password);


    // const handleOnChangeUsername = (e) => {
    //     setUsername(e.target.value);
    //     console.log(username);
    // }

    // const handlePassWordOnChange = (e) => {
    //     setPassword(e.target.value)
    //     console.log(password);
    // }

    // const handleEmailOnChange = (e) => {
    //     setEmail(e.target.value);
    //     console.log(email);
    // }

    const handleFormSubmission = (e) => {
        e.preventDefault();

        const name = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const newLog = {
            name,
            email,
            password
        }
        console.log(newLog)
    }
    return (
        <div>
            <div className='shadow-lg bg-gray-800 flex flex-col items-center justify- p-8 rounded-2xl space-y-4'>
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
                            defaultValue={name}
                            onChange={setName}
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
                            defaultValue={email}
                            onChange={setEmail}
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
                            defaultValue={password}
                            onChange={setPassword}
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
                {/* <div className='text-rose-600'>
                    {error}
                </div> */}
            </div>
        </div>
    );
};

export default ControlledDataCollection;
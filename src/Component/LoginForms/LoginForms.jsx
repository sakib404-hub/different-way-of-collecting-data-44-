import React, { useState } from 'react';
import useInputChange from '../../Hooks/useInputChange/useInputChange';

const LoginForms = ({ handleLoginForm }) => {
    const [password, setPasswod] = useInputChange('');
    const [name, setName] = useInputChange('');
    const [email, setEmail] = useInputChange('');
    const [error, setError] = useState('');

    const handleFormSubmission = (e) => {
        e.preventDefault();

        // ✅ Email validation
        if (!email.includes('@')) {
            setError('Email must include "@" symbol.');
            return;
        }

        // ✅ Password validation
        if (password.length < 6) {
            setError('Password must be six characters or longer.');
            return;
        }

        // ✅ If all validations pass
        setError('');
        const newLogin = {
            name,
            email,
            password
        };

        handleLoginForm(newLogin);

        // ✅ Reset form fields
        setName({ target: { value: '' } });
        setEmail({ target: { value: '' } });
        setPasswod({ target: { value: '' } });
        e.target.reset();
    };

    return (
        <div className='shadow-lg bg-gray-800 flex flex-col space-y-6 items-center justify-center p-8 rounded-2xl'>
            <form
                onSubmit={handleFormSubmission}
                className='flex flex-col items-between justify-center'>
                <div className='p-4 flex items-center justify-between gap-3'>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id='username'
                        name='username'
                        defaultValue={name}
                        onChange={setName}
                        placeholder='username'
                        className='border px-4 py-2 rounded-2xl'
                    />
                </div>

                <div className='p-4 flex items-center justify-between gap-3'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        defaultValue={email}
                        onChange={setEmail}
                        placeholder='email'
                        className='border px-4 py-2 rounded-2xl'
                    />
                </div>

                <div className='p-4 flex items-center justify-between gap-3'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        defaultValue={password}
                        onChange={setPasswod}
                        placeholder='password'
                        className='border px-4 py-2 rounded-2xl'
                    />
                </div>

                <div className='flex items-center justify-center'>
                    <input
                        type="submit"
                        value="Submit"
                        className='border px-8 py-1 rounded-2xl bg-gray-700 
                        hover:bg-amber-600 duration-800 text-white cursor-pointer'
                    />
                </div>
            </form>

            {error && <div className='text-red-500 font-medium'>{error}</div>}
        </div>
    );
};

export default LoginForms;

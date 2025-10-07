import React from 'react';

const LoginDetails = ({ logins }) => {
    return (
        <div className='p-6 text-black'>
            <h2 className='text-2xl font-semibold text-center mb-4 text-gray-800'>Login Details</h2>

            <div className='overflow-x-auto'>
                <table className='min-w-full border border-gray-300 rounded-lg shadow-md'>
                    <thead className='bg-gray-700 text-white'>
                        <tr>
                            <th className='px-6 py-3 text-left'>Serial No</th>
                            <th className='px-6 py-3 text-left'>Username</th>
                            <th className='px-6 py-3 text-left'>Email</th>
                            <th className='px-6 py-3 text-left'>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logins.length === 0 ? (
                            <tr>
                                <td
                                    colSpan='4'
                                    className='text-center py-4 text-gray-500 italic'
                                >
                                    No login data available
                                </td>
                            </tr>
                        ) : (
                            logins.map((login, index) => (
                                <tr
                                    key={index}
                                    className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                        }`}
                                >
                                    <td className='px-6 py-2 border-t'>{index + 1}</td>
                                    <td className='px-6 py-2 border-t'>{login.name}</td>
                                    <td className='px-6 py-2 border-t'>{login.email}</td>
                                    <td className='px-6 py-2 border-t'>{login.password}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoginDetails;

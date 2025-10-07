import React from 'react';

const LoginDetails = ({ logins }) => {
    return (
        <div className='p-6 text-black '>
            <h2 className='text-2xl font-semibold text-center mb-4 text-white'>Login Details</h2>

            <div className='overflow-x-auto'>
                <table className='min-w-full border-gray-300 rounded-lg shadow-md'>
                    <thead className='bg-gray-700 text-white'>
                        <tr>
                            <th className='px-6 py-3 text-center'>Serial No</th>
                            <th className='px-6 py-3 text-center'>Username</th>
                            <th className='px-6 py-3 text-center'>Password</th>
                            <th className='px-6 py-3 text-center'>Email</th>
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
                                    <td className='px-6 py-2 border-t text-center'>{index + 1}</td>
                                    <td className='px-6 py-2 border-t text-center'>{login.name}</td>
                                    <td className='px-6 py-2 border-t text-center'>{login.email}</td>
                                    <td className='px-6 py-2 border-t text-center'>{login.password}</td>
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

import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Assuming FiEye and FiEyeOff from react-icons as examples

const ShowPassword = ({ passwords, onDelete }) => {
    const [visiblePasswords, setVisiblePasswords] = useState([]);

    const togglePasswordVisibility = (index) => {
        const updatedVisiblePasswords = [...visiblePasswords];
        updatedVisiblePasswords[index] = !updatedVisiblePasswords[index];
        setVisiblePasswords(updatedVisiblePasswords);
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Your Saved Passwords</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            <th scope="col" className="relative px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {passwords.map((password, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap">{password.userName}</td>
                                <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center">
                                    {visiblePasswords[index] ? (
                                        <span>{password.password}</span>
                                    ) : (
                                        <span className="flex items-center">
                                            ********{/* Display stars instead of actual password */}
                                        </span>
                                    )}
                                    <button
                                        onClick={() => togglePasswordVisibility(index)}
                                        className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                                    >
                                        {visiblePasswords[index] ? (
                                            <FiEyeOff className="text-lg" />
                                        ) : (
                                            <FiEye className="text-lg" />
                                        )}
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{password.url}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{password.notes}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => onDelete(index)}
                                        className="text-red-600 hover:text-red-900 focus:outline-none"
                                    >
                                        {/* Add your delete icon or action */}
                                        <lord-icon
                                            src="https://cdn.lordicon.com/skkahier.json"
                                            trigger="hover"
                                            className="w-6 h-6"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowPassword;

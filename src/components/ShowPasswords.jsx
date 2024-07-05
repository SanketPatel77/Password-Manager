import React from 'react';

const ShowPassword = ({ passwords, onDelete }) => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold">Your Saved Passwords</h2>
            <ul className="space-y-2 mt-4">
                {passwords.map((password, index) => (
                    <li key={index} className="border p-3 rounded flex justify-between items-center">
                        <div>
                            <p><strong>User Name:</strong> {password.userName}</p>
                            <p><strong>Password:</strong> {password.password}</p>
                            <p><strong>URL:</strong> {password.url}</p>
                            <p><strong>Notes:</strong> {password.notes}</p>
                        </div>
                        <button
                            onClick={() => onDelete(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowPassword;

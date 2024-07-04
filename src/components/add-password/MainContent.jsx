import React, { useState } from 'react';
import heroImage from '../../assets/hero-lock.jpg';
import AddPassword from './AddPassword';

const MainContent = () => {
    const [showAddPassword, setShowAddPassword] = useState(false);

    const handleAddPasswordClick = () => {
        setShowAddPassword(true);
    };

    const handleCloseAddPassword = () => {
        setShowAddPassword(false);
    };

    return (
        <div className="relative flex flex-grow justify-center items-center p-4">
            {showAddPassword && <AddPassword onClose={handleCloseAddPassword} />}
            <div className="text-center">
                <h1 className="text-2xl font-semibold mb-4">All Passwords</h1>
                <img src={heroImage} alt="Add your first password" className="mx-auto mb-4 w-1/2 md:w-1/4" />
                <h2 className="text-xl font-medium mb-2">Add your first password</h2>
                <p className="text-gray-500 mb-4">
                    All passwords and other critical data that you add will appear here
                </p>
                <div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                        onClick={handleAddPasswordClick}
                    >
                        Add Password
                    </button>

                </div>
            </div>
        </div>
    );
};

export default MainContent;

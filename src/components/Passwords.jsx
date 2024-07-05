import React, { useState, useEffect } from 'react';
import Sidebar from './add-password/Sidebar';
import MainContent from './add-password/MainContent';
import ShowPassword from './ShowPasswords';
import './add-password/addPassword.css';
import Button from './Button';
import AddPassword from './add-password/AddPassword';
import { FaPlus } from "react-icons/fa";

function Passwords() {
    const [passwordArray, setPasswordArray] = useState([]);
    const [showAddPassword, setShowAddPassword] = useState(false);

    useEffect(() => {
        const passwords = localStorage.getItem('passwords');
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);

    const handleAddPassword = (newPassword) => {
        const updatedPasswords = [...passwordArray, newPassword];
        setPasswordArray(updatedPasswords);
        localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
    };

    const handleDeletePassword = (index) => {
        const updatedPasswords = passwordArray.filter((_, i) => i !== index);
        setPasswordArray(updatedPasswords);
        localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
    };

    const handleAddPasswordClick = () => {
        setShowAddPassword(true);
    };

    const updatePassword = (updatedPassword, index) => {
        // Create a copy of the current password array
        const updatedPasswords = passwordArray.map((password, i) =>
            i === index ? updatedPassword : password
        );

        // Update state with the modified password array
        setPasswordArray(updatedPasswords);

        // Convert the updated passwords array to JSON string
        const passwordsJSON = JSON.stringify(updatedPasswords);

        // Store the JSON string in localStorage
        localStorage.setItem('passwords', passwordsJSON);

        // Close the AddPassword form after saving
        setShowAddPassword(false);
    };



    return (
        <div className="App">
            <div className='flex p-4'>
                {passwordArray.length === 0 ? (
                    <MainContent onAddPassword={handleAddPassword} />
                ) : (
                    <div>
                        <ShowPassword passwords={passwordArray} onDelete={handleDeletePassword} onUpdate={updatePassword} />
                        <button
                            className={`bg-blue-500 text-white px-4 py-4  hover:bg-blue-600 rounded-full absolute right-32 bottom-32 `}
                            onClick={handleAddPasswordClick}
                            style={{ fontSize: '2.5rem' }} // Adjust the font size as needed
                        >
                            <FaPlus />
                        </button>
                        {showAddPassword && <AddPassword onClose={() => setShowAddPassword(false)} onAddPassword={handleAddPassword} updatePassword={updatePassword} />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Passwords;

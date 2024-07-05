import React, { useState, useEffect } from 'react';
import Sidebar from './add-password/Sidebar';
import MainContent from './add-password/MainContent';
import ShowPassword from './ShowPasswords';
import './add-password/addPassword.css';
import Button from './Button';
import AddPassword from './add-password/AddPassword';

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

    return (
        <div className="App">
            <div className='flex p-4'>
                <Sidebar />
                {passwordArray.length === 0 ? (
                    <MainContent onAddPassword={handleAddPassword} />
                ) : (
                    <div>
                        <ShowPassword passwords={passwordArray} onDelete={handleDeletePassword} />
                        <Button onClick={handleAddPasswordClick}>Add Password</Button>
                        {showAddPassword && <AddPassword onClose={() => setShowAddPassword(false)} onAddPassword={handleAddPassword} />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Passwords;

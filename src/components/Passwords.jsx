import React from 'react'
import Sidebar from './add-password/Sidebar'
import MainContent from './add-password/MainContent'
import './add-password/addPassword.css'

function Passwords() {
    return (
        <>
            <div className="App ">
                <div className='flex  p-4'>
                    <Sidebar />
                    <MainContent />

                </div>
            </div>
        </>
    )
}

export default Passwords

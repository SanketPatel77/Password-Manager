import React from 'react'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function Header() {

    const navItems = [
        {
            id: '1',
            name: 'HOME',
            reference: '/',
            active: true,
        },
        {
            id: '3',
            name: "PASSWORDS",
            reference: "/passwords",
            active: true,
        },
        {
            id: '2',
            name: 'CONTACT US',
            reference: '/contact-us',
            active: true,
        },
        {
            id: '4',
            name: 'LOGIN',
            reference: '/login',
            active: true,
        },
        {
            id: '5',
            name: 'SIGNUP',
            reference: '/signup',
            active: true,
        },
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHamburger = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };



    return (
        <>
            <header className='sticky top-0 z-10'>
                <div className='flex justify-between p-2 items-center bg-[#55AD9B] text-[#F1F8E8] w-full'>
                    <Logo />
                    <div className='text-3xl sm:hidden cursor-pointer select-none fixed top-2 right-4 z-50' onClick={handleHamburger}>
                        <GiHamburgerMenu />
                    </div>
                    <div className='hidden sm:flex md:flex-row sm:max-w-[500px] justify-evenly flex-1 md:max-w-[700px] font-semibold'>
                        {navItems.map((data) => (
                            <NavLink
                                key={data.id}
                                to={data.reference}
                                className={({ isActive }) =>
                                    `px-2 py-1 rounded-md cursor-pointer select-none my-2 hover:border-b transition-colors duration-200 ${isActive ? 'bg-[#F1F8E8] text-[#55AD98]' : 'hover:text-hoverColor'
                                    }`
                                }
                            >
                                {data.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div className={`transition-transform duration-200 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden bg-[#55AD9B] text-[#F1F8E8] w-[100%] p-4 fixed top-11 right-0 z-40`}>
                    <div className='flex flex-col items-center'>
                        {navItems.map((data) => (
                            <NavLink key={data.id} to={data.reference} onClick={handleNavLinkClick}>
                                <button className='cursor-pointer select-none my-2 hover:border-b border-b-[#F1F8F8]'>
                                    {data.name}
                                </button>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

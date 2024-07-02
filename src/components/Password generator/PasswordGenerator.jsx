import React, { useState, useCallback, useEffect, useRef } from 'react';
import zxcvbn from 'zxcvbn';
import { FiRefreshCcw, FiCopy } from 'react-icons/fi';
import './styles.css'; // Ensure you have a styles.css file for additional styling

function PasswordGenerator() {
    const [length, setLength] = useState(1);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useUppercase, setUseUppercase] = useState(true);
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState(0);

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "";
        if (useLowercase) str += "abcdefghijklmnopqrstuvwxyz";
        if (useUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (useNumbers) str += "0123456789";
        if (useSymbols) str += "~!@#$%^&*(){}[]-_=+;:<>,./";

        for (let i = 1; i <= length; i++) {
            let index = Math.floor(Math.random() * str.length);
            pass += str.charAt(index);
        }
        setPassword(pass);
        setStrength(zxcvbn(pass).score);
    }, [length, useNumbers, useSymbols, useLowercase, useUppercase]);

    const copyPassword = useCallback(() => {
        passwordRef.current?.select();
        document.execCommand('copy');
    }, [password]);

    const passwordRef = useRef(null);

    useEffect(() => {
        generatePassword();
    }, [length, useNumbers, useSymbols, useLowercase, useUppercase, generatePassword]);

    const getStrengthLabel = (score) => {
        switch (score) {
            case 0: return 'Very Weak';
            case 1: return 'Weak';
            case 2: return 'Fair';
            case 3: return 'Good';
            case 4: return 'Strong';
            default: return '';
        }
    };

    const getStrengthColor = (score) => {
        switch (score) {
            case 0: return 'bg-red-500';
            case 1: return 'bg-orange-500';
            case 2: return 'bg-yellow-500';
            case 3: return 'bg-blue-500';
            case 4: return 'bg-green-500';
            default: return 'bg-gray-500';
        }
    };

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setLength(value);
    };

    const calculateGradientPosition = () => {
        const percentage = (length / 50) * 100; // Adjusted for max length of 50
        return `linear-gradient(to right, #C50B3A ${percentage}%, #e5e7eb ${percentage}%)`;
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
            <p className='text-center text-3xl md:text-5xl font-semibold mb-8'>Instantly generate a secure, random <br />password with the LastPass online tool</p>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-5/12 max-w-4xl flex flex-col space-y-6">
                <div className="flex flex-col items-center">
                    <div className="relative flex items-center mb-4 w-full">
                        <input
                            type="text"
                            value={password}
                            ref={passwordRef}
                            readOnly
                            className="w-full p-4 border rounded-lg text-lg md:text-2xl"
                        />
                        <button
                            onClick={copyPassword}
                            className="absolute right-2 p-2 text-gray-500 hover:text-gray-700">
                            <FiCopy size={32} />
                        </button>
                    </div>
                    <div className={`h-3 rounded w-full ${getStrengthColor(strength)}`} />
                    <div className="flex justify-between items-center w-full mt-4">
                        <span className="text-md md:text-lg text-gray-500">Strength: {getStrengthLabel(strength)}</span>
                        <button
                            onClick={generatePassword}
                            className="p-2 text-gray-500 hover:text-gray-700">
                            <FiRefreshCcw size={32} />
                        </button>
                    </div>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Customize Your Password</h2>
                <div className="md:flex xs:block md:justify-around md:items-center">
                    <div className="flex flex-col mb-6">
                        <label className="mb-2 text-md md:text-lg text-gray-700">Password Length: {length}</label>
                        <div className="slider-container">
                            <input
                                type="range"
                                min={1}
                                max={50} // Adjusted max length to 50
                                value={length}
                                onChange={handleSliderChange}
                                className="slider"
                                style={{
                                    backgroundImage: calculateGradientPosition(),
                                }}
                            />
                            {/* <div className="slider-value">{length}</div> */}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={useLowercase}
                                onChange={() => setUseLowercase(prev => !prev)}
                                className="accent-[#DD2222] mr-3 w-6 h-6 text-[#C50B3A] bg-gray-100 border-gray-300 rounded focus:ring-[#C50B3A]"
                            />
                            <span className="text-md md:text-lg">Include Lowercase</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={useUppercase}
                                onChange={() => setUseUppercase(prev => !prev)}
                                className="accent-[#DD2222] mr-3 w-6 h-6 text-[#C50B3A] bg-gray-100 border-gray-300 rounded focus:ring-[#C50B3A]"
                            />
                            <span className="text-md md:text-lg">Include Uppercase</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={useNumbers}
                                onChange={() => setUseNumbers(prev => !prev)}
                                className="accent-[#DD2222] mr-3 w-6 h-6 text-[#C50B3A] bg-gray-100 border-gray-300 rounded focus:ring-[#C50B3A]"
                            />
                            <span className="text-md md:text-lg">Include Numbers</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={useSymbols}
                                onChange={() => setUseSymbols(prev => !prev)}
                                className="accent-[#DD2222] mr-3 w-6 h-6 text-[#C50B3A] bg-gray-100 border-gray-300 rounded focus:ring-[#C50B3A]"
                            />
                            <span className="text-md md:text-lg">Include Symbols</span>
                        </label>
                    </div>
                </div>
            </div>
            <button
                onClick={copyPassword}
                className="w-fit max-w-4xl mt-6 p-4 bg-[#C50B3A] text-white font-bold text-xl md:text-xl rounded-lg shadow-md hover:bg-red-600">
                Copy password
            </button>
        </div>
    );
}

export default PasswordGenerator;

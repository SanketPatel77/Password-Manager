// RegistrationCriteria.js
import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

const criteria = {
    minLength: 'At least 6 characters long',
    uppercase: 'Contains an uppercase letter',
    lowercase: 'Contains a lowercase letter',
    number: 'Contains a number',
    specialChar: 'Contains a special character',
};

const RegistrationCriteria = ({ password, className = '' }) => {
    const checks = {
        minLength: password.length >= 6,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        specialChar: /[@$!%*?&]/.test(password),
    };

    return (
        <div className={`p-4 mb-4 rounded bg-white shadow-md ${className}`}>
            <h3 className=" font-semibold mb-4 text-gray-800 text-center text-xl ">Password Criteria:</h3>
            <ul>
                {Object.keys(criteria).map((key) => (
                    <li key={key} className="flex items-center mb-1 p-2">
                        {checks[key] ? (
                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                        ) : (
                            <XCircleIcon className="w-5 h-5 text-red-500 mr-2" />
                        )}
                        <span className={checks[key] ? 'text-green-500' : 'text-red-500'}>{criteria[key]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegistrationCriteria;

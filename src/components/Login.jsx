// Login.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        alert('Login Successful');
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-10 bg-[#D8EFD3]">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-lg mx-4 md:mx-auto md:flex md:items-center md:justify-center md:gap-8 lg:gap-10">

                <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-full'>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>

                    <div className="mb-2">
                        <Input
                            label="Email"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Invalid email address'
                                }
                            })}
                            className={`${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4 relative">
                        <Input
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', {
                                required: 'Password is required',
                            })}
                            className={`${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-12 transform -translate-y-1/2 focus:outline-none"
                        >
                            {showPassword ? (
                                <EyeOffIcon className="h-6 w-6 text-gray-400 " aria-hidden="true" />
                            ) : (
                                <EyeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            )}
                        </button>
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    <Button type="submit" bgColor="bg-[#729762]" textColor="text-white" className="w-full font-bold focus:bg-white focus:text-[#729762] focus:border-2 focus:border-[#729762]">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;

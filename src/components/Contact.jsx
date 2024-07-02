import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, RegistrationCriteria } from './index';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        alert('Message sent successfully');
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-10 bg-[#E4EEF2]">
            <div className="w-full max-w-6xl mx-4 md:mx-auto flex flex-col md:flex-row md:items-start md:justify-between  p-8 rounded shadow-md">
                <div className="md:w-1/2 lg:w-1/2 m-auto">
                    <div className='m-auto items-center lg:w-10/12 mb-2'>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">CONTACT</h2>
                        <div className="border-b-2 border-gray-300 w-10 mb-6"></div>
                        <p className="mb-2">Indore, Madhya Pradesh, India</p>
                        <p className="mb-4 flex items-center">
                            <svg className="h-6 w-6 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0zM8 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            react@gmail.com
                        </p>
                    </div>
                </div>

                <div className="md:w-1/2 lg:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className=" ">
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                                {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label> */}
                                <input
                                    id="name"
                                    type="text"
                                    placeholder='Name'
                                    {...register('name', { required: 'Name is required' })}
                                    className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-indigo-500`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="w-full md:w-1/2 md:pl-2">
                                {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Phone
                                </label> */}
                                <input
                                    id="phone"
                                    type="text"
                                    placeholder='Phone'
                                    {...register('phone')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email address
                            </label> */}
                            <input
                                id="email"
                                type="email"
                                placeholder='Email address'
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-indigo-500`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="mb-6">
                            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label> */}
                            <textarea
                                id="message"
                                placeholder='Message'
                                {...register('message', { required: 'Message is required' })}
                                className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-indigo-500`}
                                rows="4"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                        </div>

                        <Button type="submit" bgColor="bg-[#729762]" textColor="text-white" className="w-full font-bold py-2 rounded  focus:bg-white focus:text-[#729762] focus:border-2 focus:border-[#729762]">
                            CONTACT US
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

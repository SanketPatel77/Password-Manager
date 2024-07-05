import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

const AddPassword = ({ onClose, onAddPassword }) => {
    const [form, setForm] = useState({ userName: "", password: "", url: "", notes: "" });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            onClose();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the prop function to add password to parent component
        onAddPassword(form);
        onClose(); // Close the modal after saving
        // Clear the form after saving
        setForm({ userName: "", password: "", url: "", notes: "" });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50"
            onClick={handleClickOutside}
        >
            <div className="bg-white rounded-l-lg p-6 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-full shadow-lg overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Add Password</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        ✖
                    </button>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700">User Name <span className="text-red-500">*</span></label>
                        <input
                            value={form.userName}
                            onChange={handleChange}
                            name="userName"
                            type="text"
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password <span className="text-red-500">*</span></label>
                        <div className="flex items-center relative">
                            <input
                                value={form.password}
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className="w-full px-3 py-2 border rounded"
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                            >
                                {showPassword ? (
                                    <EyeOffIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                ) : (
                                    <EyeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700">URL</label>
                        <input
                            value={form.url}
                            onChange={handleChange}
                            name="url"
                            type="url"
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Notes</label>
                        <textarea
                            value={form.notes}
                            onChange={handleChange}
                            name="notes"
                            className="w-full px-3 py-2 border rounded"
                        ></textarea>
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
                        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPassword;

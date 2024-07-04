import React from 'react';

const AddPassword = ({ onClose }) => {
    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            onClose();
        }
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
                <form className="space-y-4">

                    <div>
                        <label className="block text-gray-700">Name <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full px-3 py-2 border rounded" required />
                    </div>

                    <div>
                        <label className="block text-gray-700">User Name <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full px-3 py-2 border rounded" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password <span className="text-red-500">*</span></label>
                        <div className="flex items-center">
                            <input type="password" className="w-full px-3 py-2 border rounded" required />
                            <button type="button" className="ml-2 text-gray-500 hover:text-gray-700">
                                👁️
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700">URL</label>
                        <input type="url" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Notes</label>
                        <textarea className="w-full px-3 py-2 border rounded"></textarea>
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

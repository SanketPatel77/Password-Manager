import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa';
import { FiFolderPlus } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <div className="sidebar w-full md:w-1/4 lg:w-1/5 bg-gray-100 p-4 h-screen overflow-auto xs:hidden sm:block sm:w-2/5">
            <h3 className="text-lg font-semibold mb-4">All Passwords</h3>
            <ul className="mb-4">
                <div className="flex items-center mb-2 cursor-pointer">
                    <CiStar className="w-5 h-5 mr-2" />
                    <li className="text-gray-700">Favorites</li>
                </div>
                {/* <div className="flex items-center">
                    <FaTrash className="w-5 h-5 mr-2" />
                    <li className="text-gray-700 cursor-pointer">Trash</li>
                </div> */}
            </ul>
            {/* <h4 className="text-md font-semibold mb-2">Category</h4>
            <ul className="mb-4">
                <div className="flex items-center">
                    <li className="text-gray-700 mr-1">Folders</li>
                    <button className="text-blue-500 ml-2"><FiFolderPlus className="w-5 h-5" /></button>
                </div>
            </ul> */}

        </div>
    );
};

export default Sidebar;

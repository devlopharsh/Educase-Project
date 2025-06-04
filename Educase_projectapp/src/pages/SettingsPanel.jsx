import React from 'react'
import { FaCamera } from 'react-icons/fa';
import '../App.css';

const AccountSettings = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center rubik">
            <div className="w-full max-w-md  rounded-md shadow-sm">
                <h2 className="text-2xl  text-gray-800 mb-4 bg-white py-5 px-5.5">Account Settings</h2>

                <div className="flex items-start gap-4  pb-4 px-5">
                    <div className="relative">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="User"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 bg-violet-600 rounded-full p-1 text-white text-xs">
                            <FaCamera size={12} />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold text-gray-900">Marry Doe</h3>
                        <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
                    </div>
                </div>

                <div className="mt-4 text-md text-gray-700 leading-relaxed px-5">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </div>
                <div className="border-t border-dashed border-gray-300 my-6"></div>
                <div className="border-t border-dashed border-gray-300 my-[60vh]"></div>

            </div>
        </div>
    );
};

export default AccountSettings;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const WelcomeScreen = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-end items-center min-h-screen bg-gray-50 px-6 py-10 rubik">
      <div className="w-full max-w-sm text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-md text-gray-500 mb-6 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button onClick={()=>{navigate('/Signup')}} className="w-full bg-violet-600 text-white font-semibold py-3 rounded-md mb-3 hover:bg-violet-700 transition">
          Create Account
        </button>
        <button onClick={()=>{navigate('/Signin')}} className="w-full bg-violet-200 text-violet-800 font-semibold py-3 rounded-md hover:bg-violet-300 transition">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;

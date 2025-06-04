import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { toast,ToastContainer } from 'react-toastify';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const handleSubmit = () => {
        //we can write our custom code here to fetch an APIand register user. By the time we are just using Toast
        toast.success('Registration successful! Please login.')
        navigate('/Account');
    }


    const isFormValid = email.trim() !== '' && password.trim() !== '';
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 px-6 py-10 rubik">
            <ToastContainer className='absolute top-2.5 right-2.5' />
            <div className="w-full max-w-sm">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 w-2/3 ">Signin to your PopX account</h1>
                <p className="text-lg  text-gray-500 mb-6 w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>

                <div className="mb-4">
                    <label className="text-sm font-medium text-violet-600 relative bg-gray-50 px-2 top-3.5 left-2">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="text-sm font-medium text-violet-600 relative bg-gray-50 px-2 top-3.5 left-2">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className={`w-full py-3 font-semibold rounded-md transition ${isFormValid
                        ? 'bg-violet-600 text-white hover:bg-violet-700'
                        : 'bg-gray-300 text-white cursor-not-allowed'
                        }`}
                    disabled={!isFormValid}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Signin

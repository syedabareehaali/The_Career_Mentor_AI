import React, { useState } from 'react';
import axios from 'axios';
import Links from "../Links";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let tokenValue = ''
const Login = () => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [disabled, setDisabled] = useState(false)
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    // Track login state
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: username,
                password: password,
            });
            toast.success(
                `Success! User ${response.data.user.username}
                 has successfully signed in!`
            );
            // Handle success response
            console.log(response.data);
            const token = response.data.token;
            tokenValue = token;

            setLoggedIn(true);


            // Reset form fields
            setusername('');
            setPassword('');
        } catch (error) {
            // Handle error response
            console.error(error);
            {
                <div>
                    <div class="text-orange-700 p-4" role="alert">
                        <p class="font-bold">USER NOT FOUND</p>

                    </div></div>
            }
        }



    };


    return (
        <div className="flex items-center justify-center  min-h-screen bg-gradient-to-r from-purple-500  via--indigo-300 to-pink-300">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
                <div >
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                            UserName
                        </label>
                        <input
                            type="username"
                            id="username"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    <div className="mb-4x">
                        <div className='flex-row'>
                            <label htmlFor="password" className="flex  text-gray-700 font-bold mb-2">
                                Password
                                <button
                                    className="flex inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                    onClick={togglePasswordVisibility}
                                >

                                    {!isPasswordVisible ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    )}
                                </button>

                            </label></div>
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <p className="text-blue-500 mb-4">
                        Want to create an account?{' '}
                        <Links key="CREATE-ACC" to="/CreateAccount" className="font-bold">
                            CREATE ACCOUNT
                        </Links>
                    </p>
                    <p className="text-gray-700 mb-8">
                        By clicking, you may agree to our{' '}
                        <a href="/terms-conditions" className="text-blue-500 font-bold">
                            Terms &amp; Conditions
                        </a>
                    </p>


                    <Links
                        key="Login"
                        to={loggedIn ? "/Survey" : "/Login"}
                    // to="/Survey"

                    >
                        <button

                            type="submit"
                            onClick={handleSubmit}
                            className={`bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 ${disabled ? 'cursor-not-allowed' : ''}`}
                        >


                            LOGIN   </button>

                    </Links>

                </div>
            </div>  <ToastContainer />
        </div>

    );
};
export { tokenValue };
export default Login;
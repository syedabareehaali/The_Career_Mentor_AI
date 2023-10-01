import React from 'react';
import Link from '../Links';
import { tokenValue } from './Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Logout = () => {
    const handleLogout = async () => {
        try {
            tokenValue = ''


            if (!tokenValue) {
                toast.success('Logged out successfully!');
                localStorage.removeItem('token');
                tokenValue = 'null'
            } else {
                console.error('Logout failed');
                toast.error('Logout failed');
            }
        } catch (tokenValue) {
            console.error('Error occurred during logout:');
        }
    };
    return (
        <div>
            <Link
                key="Logout"
                to="/"


            >
                <button
                    className="fixed top-20 right-1 bg-purple-500 hover:bg-pink-600 text-white font-bold py-8 my-2 px-4 mx-0 rounded-full focus:outline-none"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </Link>
            <ToastContainer />
        </div>
    );
};

export default Logout;
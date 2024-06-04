import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        setIsAuthenticated(false);
    };

    return (
        <nav className="bg-black text-white h-16 flex items-center justify-between px-6 sticky top-0 left-0 right-0 z-10">
            <Link to="/" className="text-xl font-semibold no-underline hover:text-gray-300">Yiming</Link>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <div className={`flex-col md:flex md:flex-row items-center absolute md:relative left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in ${isOpen ? 'top-16' : 'top-[-490px]'} md:top-auto`}>
                <Link to="/" className="block mx-4 my-2 md:my-0 text-white no-underline hover:text-gray-300">Home</Link>
                <Link to="/blogs" className="block mx-4 my-2 md:my-0 text-white no-underline hover:text-gray-300">Blogs</Link>
                {isAuthenticated && (
                    <Link to="/create" className="block mx-4 my-2 md:my-0 text-white no-underline hover:text-gray-300">Create</Link>
                )}
                {isAuthenticated ? (
                    <button onClick={handleLogout} className="block mx-4 my-2 md:my-0 text-white no-underline hover:text-gray-300">Logout</button>
                ) : (
                    <Link to="/login" className="block mx-4 my-2 md:my-0 text-white no-underline hover:text-gray-300">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
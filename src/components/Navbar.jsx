import React, { useState } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const routes = [
    { path: "/", name: "Home" },
    { path: "/citys", name: "Citys" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">My Itinerary</h2>

                {/* Botón de Hamburguesa */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
 
                <div className="hidden md:flex space-x-6">
                    <ul className='flex space-x-6'>
                        {routes.map((route) => (
                            <li key={route.path}>
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) =>
                                        `text-white text-lg relative hover:text-blue-500 transition duration-300 group ${
                                            isActive ? "text-blue-500" : ""
                                        }`
                                    }
                                >
                                    {route.name}
                                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:flex">
                    <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        <FaUser />
                        <span>Login</span>
                    </button>
                </div>
            </div>

            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className="md:hidden opacity-90">
                    <div className="flex flex-col space-y-4 px-4 py-2">
                        {routes.map((route) => (
                            <NavLink
                                key={route.path}
                                to={route.path}
                                className={({ isActive }) =>
                                    `text-white text-lg hover:text-blue-500 transition duration-300 ${
                                        isActive ? "text-blue-500" : ""
                                    }`
                                }
                                onClick={toggleMenu}
                            >
                                {route.name}
                            </NavLink>
                        ))}
                        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                            <FaUser />
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
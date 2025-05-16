import React, { useState, useEffect } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, setCredentials } from '../../slices/signInSlice';

const routes = [
    { path: "/", name: "Home" },
    { path: "/citys", name: "Citys" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authState = useSelector(state => state.auth);
   
    
    
    const { user } = authState;
    // 🔄 Sincroniza localStorage con Redux si es necesario
    useEffect(() => {
        if (!user) {
            const storedAuth = JSON.parse(localStorage.getItem('authState'));
            if (storedAuth?.user && storedAuth?.token) {
                dispatch(setCredentials(storedAuth));
            }
        }
    }, [user, dispatch]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('authState');
        navigate('/login');
    };
    const {  token } = useSelector(state => state.auth);
    console.log("👤 Usuario desde Redux:", user);
    console.log("🔐 Token desde Redux:", token);

    return (
        <nav className="shadow-md fixed w-full top-0 z-50 bg-gray-800">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">My Itinerary</h2>

                {/* Botón de Hamburguesa */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Navegación principal */}
                <div className="hidden md:flex space-x-6">
                    <ul className="flex space-x-6">
                        {routes.map((route) => (
                            <li key={route.path}>
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) =>
                                        `text-white text-lg relative hover:text-blue-500 transition duration-300 group ${isActive ? "text-blue-500" : ""}`
                                    }
                                >
                                    {route.name}
                                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Área de login o usuario */}
                <div className="hidden md:flex items-center space-x-4">
                    {user ? (
                        <>
                            <span className="text-white">Hi ,{user.firstName} {user.lastName}</span>
                            <img
                                src={user.photo}
                                alt={user.firstName}
                                className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
                            />
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                        >
                            <FaUser />
                            <span>Login</span>
                        </NavLink>
                    )}
                </div>
            </div>

            {/* Menú desplegable en móvil */}
            {isMenuOpen && (
                <div className="md:hidden opacity-90 bg-gray-800">
                    <div className="flex flex-col space-y-4 px-4 py-2">
                        {routes.map((route) => (
                            <NavLink
                                key={route.path}
                                to={route.path}
                                className={({ isActive }) =>
                                    `text-white text-lg hover:text-blue-500 transition duration-300 ${isActive ? "text-blue-500" : ""}`
                                }
                                onClick={toggleMenu}
                            >
                                {route.name}
                            </NavLink>
                        ))}

                        {user ? (
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.photo}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
                                />
                                <span className="text-white">Hi, {user.name}</span>
                                <button
                                    onClick={() => {
                                        toggleMenu();
                                        handleLogout();
                                    }}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition ml-2"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <NavLink
                                to="/login"
                                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                                onClick={toggleMenu}
                            >
                                <FaUser />
                                <span>Login</span>
                            </NavLink>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

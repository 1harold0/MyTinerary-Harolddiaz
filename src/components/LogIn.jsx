import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInUser } from "../../slices/signInSlice.js";
import { createUser } from "../../slices/createUserSlice.js";
import "../index.css";

const AuthCard = () => {
    const [flipped, setFlipped] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        photo: "",
        country: "",
    });

    const handleLogin = async () => {
        const resultAction = await dispatch(signInUser(loginData));
        if (signInUser.fulfilled.match(resultAction)) {
            navigate("/home"); 
        } else {
            alert(resultAction.payload?.message || "Login failed");
        }
    };

    const handleRegister = async () => {
        const resultAction = await dispatch(createUser(registerData));
        if (createUser.fulfilled.match(resultAction)) {
            alert("Account created! Please log in.");
            setFlipped(false); // vuelve al login
        } else {
            alert(resultAction.payload || "Register failed");
        }
    };

    const goToHome = () => {
        navigate("/");
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1544067612-e676aca74a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYXlhc3xlbnwwfHwwfHx8MA%3D%3D')",
            }}
        >
            <div
                className={`flip-card w-full max-w-md relative h-[500px] ${flipped ? "flipped" : ""}`}
            >
                <div className="flip-card-inner h-full relative">
                    <button
                        onClick={goToHome}
                        className="absolute top-4 right-4 p-3 text-white rounded-full hover:bg-red-700 focus:outline-none z-10"
                    >
                        <FaTimes size={20} />
                    </button>

                    {/* Login */}
                    <div className="flip-card-front bg-white-50 bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-lg flex flex-col justify-center h-full">
                        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                            Let the journey begin!
                        </h2>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full mb-3 p-2 border rounded-md"
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full mb-4 p-2 border rounded-md"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        />
                        <button
                            onClick={handleLogin}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mb-4"
                        >
                            Log In
                        </button>
                        <p className="text-center text-sm text-white mb-2">
                            <a href="#" className="hover:underline">
                                Forgot your password?
                            </a>
                        </p>
                        <p className="text-center text-white text-sm">
                            Don't have an account?{" "}
                            <button
                                onClick={() => setFlipped(true)}
                                className="text-blue-600 hover:underline"
                            >
                                Create one
                            </button>
                        </p>
                    </div>

                    {/* Register */}
                    <div className="flip-card-back bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg flex flex-col justify-center h-full">
                        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                            Create your account
                        </h2>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full mb-3 p-2 border rounded-md"
                            value={registerData.firstName}
                            onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full mb-3 p-2 border rounded-md"
                            value={registerData.lastName}
                            onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full mb-3 p-2 border rounded-md"
                            value={registerData.email}
                            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full mb-3 p-2 border rounded-md"
                            value={registerData.password}
                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        />
                        <input
                            type="url"
                            placeholder="Photo URL"
                            className="w-full mb-3 p-2 border rounded-md"
                            value={registerData.photo}
                            onChange={(e) => setRegisterData({ ...registerData, photo: e.target.value })}
                        />
                        <select
                            className="w-full mb-4 p-2 border rounded-md"
                            value={registerData.country}
                            onChange={(e) => setRegisterData({ ...registerData, country: e.target.value })}
                        >
                            <option value="">Select Country</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>Spain</option>
                            <option>Argentina</option>
                            <option>Colombia</option>
                        </select>
                        <button
                            onClick={handleRegister}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md mb-4"
                        >
                            Register
                        </button>
                        <p className="text-center text-sm">
                            Already have an account?{" "}
                            <button
                                onClick={() => setFlipped(false)}
                                className="text-blue-600 hover:underline"
                            >
                                Log in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthCard;

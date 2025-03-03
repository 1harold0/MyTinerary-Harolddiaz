import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const text = '"Find your perfect trip, designed by insiders who know and love their cities!"';

const Banner = () => {
    return (
        <div className="relative h-screen overflow-hidden">

            {/* animacion de la imagen */}
            <motion.img
                src="https://img.freepik.com/fotos-premium/hombre-esta-cima-montana-mirando-estrellas-universo_410516-44504.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
            />


            <Navbar />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">

                <h1 className="text-5xl font-bold">Welcome to My Itinerary</h1>

                {/* animacion del texto */}
                <motion.p
                    className="text-2xl mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                    }}
                >
                    {text.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: index * 0.12,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.p>
            </div>
        </div>
    );
};

export default Banner;
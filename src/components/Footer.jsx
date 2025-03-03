import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white py-12">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">My Itinerary</h3>
                        <p className="text-gray-400">
                        Discover the best itineraries designed by experts who know and love their cities.
                        </p>
                    </div>


                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-400 hover:text-white">About us</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="/terms" className="text-gray-400 hover:text-white">Terms and conditions</a></li>
                        </ul>
                    </div>
                    {/* contactos */}

                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-400">
                                <FaMapMarkerAlt className="mr-2" />
                                <span>45 sur 85 66</span>
                            </li>
                            <li className="text-gray-400">Email: travelintheworld@myitinerary.com</li>
                            <li className="text-gray-400">cell: +123 452 540</li>
                        </ul>
                    </div>

                    {/* Redes sociales */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">follow us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mapa*/}
                <div className="mt-12">
                    <h3 className="text-xl font-bold mb-4">Ubication</h3>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.51832999795!2d-74.27262003119694!3d4.648278403289357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1740984253331!5m2!1ses-419!2sco"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                
                <div className="text-center mt-12 pt-8 border-t border-gray-700">
                    <p className="text-gray-400">
                        &copy; My Itinerary. harold Andres Diaz
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
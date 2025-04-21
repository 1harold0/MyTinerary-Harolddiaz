import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-96">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${city.photo})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
          <p className="text-lg opacity-90 mb-2">{city.country} • {city.Continente}</p>
          <p className="text-sm opacity-80 mb-4">{city.Descripción}</p>
        </div>
        <Link to={`/details/${city._id}`}>
          <button className="self-start mt-4 px-6 py-2 bg-white text-gray-900 font-medium rounded-full transform transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-y-0 opacity-0 group-hover:opacity-100 translate-y-4 shadow-md hover:shadow-lg">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CityCard;


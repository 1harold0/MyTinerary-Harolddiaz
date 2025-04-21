import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities, filterCities } from '../../slices/citiesSlice.js';
import CityCard from '../pages/CityCard.jsx';

const Citys = () => {
  const dispatch = useDispatch();
  const { filtered, loading, error } = useSelector(state => state.cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  const handleSearch = (e) => {
    dispatch(filterCities(e.target.value));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* buscador */}
      <div className="relative h-64 w-full flex items-center justify-center ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for city, country or continent"
              className="w-full py-3 pl-12 pr-4 rounded-full bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              onChange={handleSearch}
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* lista de ciudades */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-2"></div>
            <p className="text-xl">Loading cities...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">
            <p className="text-xl">{error}</p>
            <button
              onClick={() => dispatch(fetchCities())}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl">No results found</p>
            <button
              onClick={() => dispatch(filterCities(''))}
              className="mt-4 px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Show all
            </button>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((city) => (
              <CityCard key={city._id} city={city} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Citys;

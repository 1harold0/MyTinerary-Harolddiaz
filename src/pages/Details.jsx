import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItinerariesByCity } from '../../slices/itinerariesSlice.js';
import { FaChevronDown, FaChevronUp, FaHeart } from 'react-icons/fa';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: itineraries, loading } = useSelector(state => state.itineraries);
  const [city, setCity] = useState(null);
  const [openCards, setOpenCards] = useState({});
  const [likes, setLikes] = useState({});

  useEffect(() => {
    dispatch(fetchItinerariesByCity(id));

    fetch(`http://localhost:8080/api/citysRouter/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Ciudad recibida:", data);
        setCity(data);
      });
  }, [id]);

  const toggleCard = (itinId) => {
    setOpenCards(prev => ({
      ...prev,
      [itinId]: !prev[itinId]
    }));
  };

  const handleLike = (itinId) => {
    setLikes(prev => ({
      ...prev,
      [itinId]: (prev[itinId] || 0) + 1
    }));
  };

  if (!city) return <p className="text-center py-12">Loading City...</p>;

  return (
    <div className="min-h-screen bg-white">
      {/* Banner ciudad */}
      <div className="relative h-[70vh] w-full">
        <img src={city.photo} alt={city.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">{city.name}</h1>
          <p className="text-xl max-w-2xl">{city.Descripción}</p>
        </div>
      </div>

      {/* Itinerarios */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center underline underline-offset-4">Itineraries</h2>

        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading routes...</p>
        ) : itineraries.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No itineraries yet for this city 😢</p>
        ) : (
          itineraries.map((itin) => (
            <div
              key={itin._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden mb-8"
            >
              <img
                src={itin.photo}
                alt={itin.name}
                className="w-full h-56 object-cover"
                onError={(e) => (e.target.style.display = 'none')}
              />

              <div className="p-6">
                {/* Usuario */}
                <div className="flex items-center mb-4">
                  <img
                    src={itin.user?.photo}
                    alt={itin.user?.name}
                    className="w-12 h-12 rounded-full border-2 border-blue-500 mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{itin.user?.name}</p>
                    <p className="text-sm text-gray-500">Traveler</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{itin.name}</h3>

                <div className="flex gap-6 text-gray-700 mb-4">
                  <span>💵 {itin.price}</span>
                  <span>⏱ {itin.duration} hrs</span>
                  <button
                    onClick={() => handleLike(itin._id)}
                    className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-all"
                  >
                    <FaHeart /> {likes[itin._id] || 0}
                  </button>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  {itin.hashtags?.map((tag, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleCard(itin._id)}
                  className="mt-4 flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all"
                >
                  {openCards[itin._id] ? "Show Less" : "Show More"}
                  {openCards[itin._id] ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>

                {openCards[itin._id] && (
                  <div className="mt-4 transition-all duration-300 ease-in-out">
                    <p className="text-sm text-gray-500">Under construction 🚧</p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Details;

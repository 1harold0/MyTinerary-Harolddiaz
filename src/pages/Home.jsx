import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrusel = () => {
    // Información de las ciudades 
    const cities = [
        { name: "New York", image: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg" },
        { name: "Paris", image: "https://img.sixt.com/1600/Paris_%7C_in_TYPO_paris-city-content.jpg" },
        { name: "Tokyo", image: "https://content.r9cdn.net/rimg/dimg/30/2c/c2817db5-city-21033-159036d7254.jpg?width=1366&height=768&xhint=1051&yhint=774&crop=true" },
        { name: "London", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgCuIJ7u1akapg_oTUETWMgshpXdIaABugw&s" },
        { name: "Rome", image: "https://assets.voxcity.com/uploads/blog_images/Do-you-think-Rome-is-the-most-beautiful-city-in-the-world-image-main_original.jpg" },
        { name: "Sydney", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/93/a7/be/sydney-opera-house.jpg?w=900&h=500&s=1" },
        { name: "Dubai", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPngnbIeVrijPwuMOboFGIdabc9DhqZJj6A&s" },
        { name: "Barcelona", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrB299NJ_XfZR41v2w5bgzBLdcf5MQm5jqWA&s" },
        { name: "Berlin", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tsWB3biAG8-MBrq7vW1A0DDvnPvECtcxZA&s" },
        { name: "Moscow", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/800px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg" },
        { name: "Toronto", image: "https://cdn.britannica.com/35/100235-050-CE3936EE/view-CN-Tower-Toronto-skyline-observation-deck.jpg" },
        { name: "Singapore", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5I9HTJZy75x84VyJFTMQ1KZZXId3rbVm0Fg&s" },
    ];

   
    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
    };

    
    const groupedCities = [];
    for (let i = 0; i < cities.length; i += 4) {
        groupedCities.push(cities.slice(i, i + 4));
    }

    return (
        <div className="p-8 m-8">
            
            <h2 className="text-3xl font-bold text-center mb-6">Popular Mytineraries</h2>

            
            <Slider {...settings}>
                {groupedCities.map((group, index) => (
                    <div key={index} className="px-2">
                        <div className="grid grid-cols-2 gap-4">
                            {group.map((city, idx) => (
                                <div key={idx} className="text-center">
                                    <img
                                        src={city.image}
                                        alt={city.name}
                                        className="w-full h-70 object-cover rounded-lg"
                                    />
                                    <p className="mt-2 text-lg font-semibold">{city.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carrusel;
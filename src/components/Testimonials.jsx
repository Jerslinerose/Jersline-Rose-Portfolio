import React from 'react';
import fsd from '../assets/fsd.png';
import javab from '../assets/javab.png';
import ai from '../assets/ai.png';
import cyb from '../assets/cyb.png';
import dm from '../assets/dm.png';
import t from '../assets/t.png';
import sih from '../assets/sih.png';





// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    // Testimonials data
    const testimonials = [
        { id: 1, name: "FULL STACK DEVELOPER", company: "Infosys Springboard", image: fsd },
        { id: 2, name: "JAVA BOOTCAMP", company: "Let's Upgrade", image: javab },
        { id: 3, name: "ARTIFICIAL INTELLIGENCE", company: "Accenture", image: ai },
        { id: 4, name: "CYBERSECURITY", company: "Cisco", image: cyb },
        { id: 5, name: "DIGITAL MARKETING", company: "Accenture", image: dm },
    ];

    return (
        <div id="testimonials" className="py-10 relative">
            {/* Heading */}
            <h1 className="text-center text-2xl lg:text-4xl font-bold">
                MY CERTIFICATIONS...
            </h1>

            {/* Swiper Container */}
            <div className="max-w-6xl mx-auto py-10 px-5">
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={300}
                    autoplay={{ delay: 3000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="testimonial-box bg-gray-100 border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4 transition-transform hover:scale-105">
                                <div className="relative overflow-hidden rounded-md">
                                    <img
                                        src={item.image}
                                        alt={`${item.name}'s testimonial`}
                                        className="w-full h-48 object-contain"
                                    />
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h3 className="font-semibold text-red-500 text-lg">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm mt-1">{item.company}</p>
                                    </div>
                                    <Quote className="text-red-400" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination my-10 gap-1 relative"></div>
                </Swiper>
            </div>

            {/* Technical Accomplishments Heading */}
            <h1 className="text-center text-2xl lg:text-4xl font-bold">
                MY TECHNICAL ACCOMPLISHMENTS...
            </h1>

           {/* Hackathons Box */}
<div className="max-w-4xl mx-auto my-10 flex items-center gap-6">
    {/* Inner Box */}
    <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 w-full">
            <h2 className="text-xl lg:text-2xl font-semibold text-red-500 text-center">
                Hackathons
            </h2>
            <p className="text-gray-700 mt-4 text-center">
                Participated in various hackathons to solve real-world problems and showcase
                my technical expertise through innovative solutions.
            </p>
            {/* Images with text below */}
            <div className="flex justify-center mt-4 gap-8">
                <div className="flex flex-col items-center">
                    <img
                        src={t}
                        alt="Hackathon Image 1"
                        className="w-60 h-60 object-cover rounded-lg border border-gray-300 transform transition-transform duration-300 hover:scale-110"
                    />
                    <p className="mt-2 text-center text-gray-700 font-semibold">DESIGN IMPACT MOVEMENT - TITAN</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src={sih}
                        alt="Hackathon Image 2"
                        className="w-60 h-60 object-cover rounded-lg border border-gray-300 transform transition-transform duration-300 hover:scale-110"
                    />
                    <p className="mt-2 text-center text-gray-700 font-semibold">SMART INDIA HACKATHON</p>
                </div>
            </div>
        </div>
    </div>
</div>



        </div>
    );
};

export default Testimonials;

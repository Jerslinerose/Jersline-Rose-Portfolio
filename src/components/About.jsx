import React, { useState } from 'react';
import MernStack from '../assets/mernstack.png';
import Html from '../assets/Html.png';
import Css from '../assets/CSS.png';
import Javascript from '../assets/JS.png';
import ReactLogo from '../assets/React.png';
import ReduxLogo from '../assets/Redux.png';
import Tailwind from '../assets/Tailwind Css.png';
import Bootstrap from '../assets/Bootstrap.png';
import NodeLogo from '../assets/NodeLogo.png';
import Mongodb from '../assets/mongodb.svg';
import Express from '../assets/Express.png';
import NextJs from '../assets/NextJs.png';

const About = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const handleContactClick = () => {
        setShowContactInfo(!showContactInfo);
    };

    return (
        <div className='relative' id='about'>
            <div className="py-12" style={{ background: "linear-gradient()" }}>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='mt-10 flex justify-center items-center flex-col gap-12'>
                        {/* About Me Section */}
                        <div className="border border-gray-300 rounded-2xl md:p-10 py-10 px-6 flex flex-col gap-8 items-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 bg-gradient-to-r from-rose-100 via-pink-100 to-red-100">

                            <h3 className="text-3xl font-extrabold text-red-500 font-sans tracking-wide uppercase relative">
                                About Me
                                <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-red-500 rounded transform -translate-x-1/2 animate-pulse"></span>
                            </h3>
                            <p className="mt-4 text-lg text-gray-700 leading-relaxed font-normal font-sans tracking-wide text-center">
                                <b>
                                    I am <span className="text-red-500">Jersline Rose J</span>, a passionate final-year Computer Science and Engineering undergraduate with a CGPA of <span className="text-red-500">8.75/10</span> from Adhiyamaan College of Engineering, Hosur. <br />
                                    <br />
                                    With a strong foundation in <span className="text-red-500">programming, web development, and machine learning</span>, I enjoy creating innovative solutions to real-world problems. <br />
                                    <br />
                                    My expertise includes hands-on experience in full-stack development, where I’ve worked on projects with <span className="text-red-500">user-friendly frontend designs</span> and robust backends. <br />
                                    <br />
                                    <span className="text-red-500">Skills:</span> Java, HTML, CSS, JavaScript, MySQL, and React.js. I thrive in collaborative environments where I can effectively apply my skills. <br />
                                    <br />
                                    Beyond academics, I’ve participated in <span className="text-red-500">hackathons, presented at conferences</span>, and earned certifications in Full Stack Development, Artificial Intelligence, and Digital Software Engineering. <br />
                                    <br />
                                    I am currently seeking opportunities to contribute to impactful projects and grow as a developer.
                                </b>
                            </p>
                            <button
                                onClick={handleContactClick}
                                className="mt-4 px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition-all"
                            >
                                Contact Me
                            </button>
                            {showContactInfo && (
                                <div className="mt-4 text-center">
                                    <p className="text-red-500 font-bold">
                                        Email: jerslinerose@gmail.com
                                    </p>
                                    <p className="text-red-500 font-bold">
                                        Phone: 9487123781
                                    </p>
                                </div>
                            )}
                        </div>

                        <br />
                        <h1 className='text-center text-2xl lg:text-4xl font-bold'>MY SKILLS...</h1>
                        <div className="flex flex-col lg:flex-row gap-6 w-full justify-center items-center">
    <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 w-1/2 bg-gradient-to-b from-red-100 via-pink-50 to-rose-100 group relative">
        <h3 className="text-2xl font-bold text-red-600 font-sans tracking-wide uppercase">Professional Skills</h3>
        <div className="flex flex-col items-center gap-6">
            {/* Skill: HTML */}
            <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
                <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                    <img src={Html} alt="HTML" className="w-10 group-hover:animate-pulse" />
                    <span className="font-semibold">HTML</span>
                </div>
                <div className="flex items-center">
                    {Array(5).fill(0).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < 5 ? "#f43f5e" : "none"} // 5 stars for 98%
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 17.27l5.18 3.73-1.64-6.99L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.77-1.64 6.99L12 17.27z"
                            />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Skill: CSS */}
            <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
                <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                    <img src={Css} alt="CSS" className="w-8 group-hover:animate-pulse" />
                    <span className="font-semibold">CSS</span>
                </div>
                <div className="flex items-center">
                    {Array(5).fill(0).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < 5 ? "#f43f5e" : "none"} // 5 stars for 95%
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 17.27l5.18 3.73-1.64-6.99L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.77-1.64 6.99L12 17.27z"
                            />
                        </svg>
                    ))}
                </div>
            </div>
 {/* Skill: JavaScript */}
 <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
                <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                    <img src={Mongodb} alt="JavaScript" className="w-10 group-hover:animate-pulse" />
                    <span className="font-semibold">SQL</span>
                </div>
                <div className="flex items-center">
                    {Array(5).fill(0).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < 4 ? "#f43f5e" : "none"} // 4 stars for 85%
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 17.27l5.18 3.73-1.64-6.99L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.77-1.64 6.99L12 17.27z"
                            />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Skill: JavaScript */}
            <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
                <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                    <img src={Javascript} alt="JavaScript" className="w-10 group-hover:animate-pulse" />
                    <span className="font-semibold">JavaScript</span>
                </div>
                <div className="flex items-center">
                    {Array(5).fill(0).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < 4 ? "#f43f5e" : "none"} // 4 stars for 85%
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 17.27l5.18 3.73-1.64-6.99L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.77-1.64 6.99L12 17.27z"
                            />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Skill: Java */}
            <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
                <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                    <img src={NextJs} alt="Java" className="w-9 group-hover:animate-pulse" />
                    <span className="font-semibold">Java</span>
                </div>
                <div className="flex items-center">
                    {Array(5).fill(0).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < 5 ? "#f43f5e" : "none"} // 5 stars for 90%
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 17.27l5.18 3.73-1.64-6.99L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.77-1.64 6.99L12 17.27z"
                            />
                        </svg>
                        
                        
                    ))}
                </div>
            </div>

            {/* Skill: React */}
            <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
                <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                    <img src={ReactLogo} alt="React" className="w-8 rounded-full group-hover:animate-pulse" />
                    <span className="font-semibold">React</span>
                </div>
                <div className="flex items-center">
                    {Array(5).fill(0).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < 3 ? "#f43f5e" : "none"} // 3 stars for 70%
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 17.27l5.18 3.73-1.64-6.99L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.77-1.64 6.99L12 17.27z"
                            />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Skill: Python */}
            <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
                <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                    <img src={ReduxLogo} alt="Python" className="w-8 group-hover:animate-pulse" />
                    <span className="font-semibold">Python</span>
                </div>
                <div className="flex items-center">
                    {Array(5).fill(0).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < 4 ? "#f43f5e" : "none"} // 4 stars for 75%
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 17.27l5.18 3.73-1.64-6.99L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.77-1.64 6.99L12 17.27z"
                            />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div>



                            {/* Soft Skills Section */}
                            {/* Soft Skills Section */}
<div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 w-1/2 bg-gradient-to-b from-red-100 via-pink-50 to-rose-100 group relative">
    <h3 className="text-2xl font-bold text-red-600 font-sans tracking-wide uppercase">Soft Skills</h3>
    <div className="flex flex-col items-center gap-6">

        {/* Soft Skill: Adaptability */}
        <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
            <div className="border border-red-300 flex items-center gap-4 px-6 py-3 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-lg font-semibold text-red-600">Adaptability</span>
            </div>
        </div>

        {/* Soft Skill: Team Collaboration */}
        <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
            <div className="border border-red-300 flex items-center gap-4 px-6 py-3 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-lg font-semibold text-red-600">Team Collaboration</span>
            </div>
        </div>

        {/* Soft Skill: Innovation and Creativity */}
        <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
            <div className="border border-red-300 flex items-center gap-4 px-6 py-3 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-lg font-semibold text-red-600">Innovation and Creativity</span>
            </div>
        </div>

        {/* Soft Skill: Communication */}
        <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
            <div className="border border-red-300 flex items-center gap-4 px-6 py-3 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-lg font-semibold text-red-600">Communication</span>
            </div>
        </div>

        {/* Soft Skill: Problem Solving */}
        <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
            <div className="border border-red-300 flex items-center gap-4 px-6 py-3 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-lg font-semibold text-red-600">Problem Solving</span>
            </div>
        </div>

        {/* Soft Skill: Time Management */}
        <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
            <div className="border border-red-300 flex items-center gap-4 px-6 py-3 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-lg font-semibold text-red-600">Time Management</span>
            </div>
        </div>

        {/* Soft Skill: Fast Learning */}
        <div className="flex items-center gap-6 transition-transform transform group-hover:scale-105">
            <div className="border border-red-300 flex items-center gap-4 px-6 py-3 rounded-lg shadow-md shadow-red-300 bg-white transition-transform transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-lg font-semibold text-red-600">Fast Learning</span>
            </div>
        </div>
    </div>
</div>

                        </div>
                        <br></br>
                        <br></br>
                        <div>
                        <h1 className='text-center text-2xl lg:text-4xl font-bold'>MY JOURNEY...</h1>   
                        </div>
                              
                        
                        
               
   
                        <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 w-[600px] bg-gradient-to-b from-red-100 via-pink-50 to-rose-100 group relative">
        <h3 className="text-2xl font-bold text-red-600 font-sans tracking-wide uppercase">Education</h3>
        <div className="flex flex-row gap-8 items-start">
            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 w-1 bg-red-300 h-full"></div>

                {/* Timeline Nodes */}
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black transition-transform transform group-hover:scale-110"></div>
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black mt-[140px] transition-transform transform group-hover:scale-110"></div>
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black mt-[135px] transition-transform transform group-hover:scale-110"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-16">
                {/* Degree */}
                <div className="transition-transform transform group-hover:scale-105">
                    <h4 className="font-semibold text-lg text-red-700">B.E. Computer Science and Engineering</h4>
                    <p className="text-sm text-gray-700">CGPA: 8.75/10 (till 6th semester)</p>
                    <p className="text-sm text-gray-700">Adhiyamaan College of Engineering, Hosur</p>
                    <p className="text-sm text-gray-700">Nov 2021 – May 2025</p>
                </div>
                {/* HSC */}
                <div className="transition-transform transform group-hover:scale-105">
                    <h4 className="font-semibold text-lg text-red-700">Mathematics - Biology – HSC</h4>
                    <p className="text-sm text-gray-700">Percentage: 92.6%</p>
                    <p className="text-sm text-gray-700">St. Joseph’s School Matriculation Higher Secondary School</p>
                    <p className="text-sm text-gray-700">June 2020 – May 2021</p>
                </div>
                {/* SSLC */}
                <div className="transition-transform transform group-hover:scale-105">
                    <h4 className="font-semibold text-lg text-red-700">SSLC</h4>
                    <p className="text-sm text-gray-700">Percentage: 94.8%</p>
                    <p className="text-sm text-gray-700">St. Joseph’s School Matriculation Higher Secondary School</p>
                    <p className="text-sm text-gray-700">June 2018 – May 2019</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="flex items-center justify-center min-h-screen ">
    <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 w-[600px] h-[500px] bg-gradient-to-b from-red-100 via-pink-50 to-rose-100 group relative">
        <h3 className="text-2xl font-bold text-red-600 font-sans tracking-wide uppercase">Experience</h3>
        
        <div className="flex flex-row gap-8 items-start">
            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 w-1 bg-red-300 h-full"></div>
                {/* Timeline Nodes */}
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black transition-transform transform group-hover:scale-110"></div>
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black mt-[220px] transition-transform transform group-hover:scale-110"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-16">
                {/* YBI Foundation */}
                <div className="transition-transform transform group-hover:scale-105">
                    <h3 className="font-semibold text-lg text-red-700">
                        YBI Foundation | Artificial Intelligence and Machine Learning Internship
                    </h3>
                    <p className="text-sm text-gray-700">June 2024 – July 2024</p>
                    <p className="text-sm text-gray-700">
                        Built Predictive, Regressive, and Decision models using machine learning algorithms for various use cases. Analyzed large and imbalanced datasets to provide data insights and optimistic solutions.
                    </p>
                </div>
                {/* Titan Company Limited */}
                <div className="transition-transform transform group-hover:scale-105">
                    <h4 className="font-semibold text-lg text-red-700">
                        Titan Company Limited | Computer Networking Internship
                    </h4>
                    <p className="text-sm text-gray-700">Dec 2023 – Jan 2024</p>
                    <p className="text-sm text-gray-700">
                        Gained experience in IT administration tools, networking concepts, SAP, OS installation, and IP configurations.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

</div>


                    </div>
                </div>
            
    );
}

export default About;

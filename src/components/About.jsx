import React from 'react';
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
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='mt-10 flex justify-center items-center flex-col gap-12'>
                        {/* About Me Section */}
                        <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                            <h3 className="text-2xl font-bold text-red-600 font-sans tracking-wide uppercase">About Me</h3>
                            <p className="mt-4 text-lg text-black-700 leading-relaxed font-light font-sans tracking-wide"><b>
                                I am Jersline Rose J, a passionate final-year Computer Science and Engineering undergraduate with a CGPA of 8.75/10 from Adhiyamaan College of Engineering, Hosur. <br />
                                <br />
                                With a strong foundation in programming, web development, and machine learning, I enjoy creating innovative solutions to real-world problems. I’m driven by a passion for creating innovative, visually stunning, and highly functional digital experiences. <br />
                                With a strong focus on full-stack development and AI, I aim to solve real-world problems with solutions that leave a lasting impact. <br />
                                <br />
                                I have hands-on experience in full stack development, having worked on projects such as a Meeting Room Reservation System and the Flavour Fiesta Recipe Web Application. My projects demonstrate my ability to integrate powerful backend solutions with sleek, user-friendly frontend designs. <br />
                                <br />
                                I am skilled in Java, HTML, CSS, JavaScript, MySQL, and React.js, among others, and thrive in collaborative environments where I can apply my skills effectively. <br />
                                Beyond academics, I have participated in hackathons, presented at conferences, and earned certifications in Full Stack Development, Artificial Intelligence, and Digital Software Engineering. <br />
                                <br />
                                I am currently seeking opportunities to contribute to impactful projects and grow as a developer.
                            </b>
                            </p>
                        </div>

                        <br />
                        <h1 className='text-center text-2xl lg:text-4xl font-bold'>MY SKILLS...</h1>
                        {/* Skills Section (Professional and Soft Skills) */}
                        <div className='flex justify-between gap-8 w-full'>
                            {/* Professional Skills Section */}
                            <div className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 w-1/2'>
                                <h3 className="text-2xl font-bold text-red-600 font-sans tracking-wide uppercase">Professional Skills</h3>
                                <div className='flex flex-col items-center gap-6'>
                                    {/* Skill: HTML */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <img src={Html} alt="HTML" className='w-10' />
                                            <span className='font-semibold'>HTML</span>
                                        </div>
                                        <div className='w-64'>
                                            <div className='bg-gray-200 rounded-full h-2'>
                                                <div className='bg-red-500 h-2 rounded-full' style={{ width: '98%' }}></div>
                                            </div>
                                        </div>
                                        <span className='font-semibold'>98%</span>
                                    </div>

                                    {/* Skill: CSS */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <img src={Css} alt="CSS" className='w-8' />
                                            <span className='font-semibold'>CSS</span>
                                        </div>
                                        <div className='w-64'>
                                            <div className='bg-gray-200 rounded-full h-2'>
                                                <div className='bg-red-500 h-2 rounded-full' style={{ width: '95%' }}></div>
                                            </div>
                                        </div>
                                        <span className='font-semibold'>95%</span>
                                    </div>

                                    {/* Skill: JavaScript */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <img src={Javascript} alt="JavaScript" className='w-10' />
                                            <span className='font-semibold'>JavaScript</span>
                                        </div>
                                        <div className='w-64'>
                                            <div className='bg-gray-200 rounded-full h-2'>
                                                <div className='bg-red-500 h-2 rounded-full' style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                        <span className='font-semibold'>85%</span>
                                    </div>

                                    {/* Skill: Next.js */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <img src={NextJs} alt="Next.js" className='w-9' />
                                            <span className='font-semibold'>Java</span>
                                        </div>
                                        <div className='w-64'>
                                            <div className='bg-gray-200 rounded-full h-2'>
                                                <div className='bg-red-500 h-2 rounded-full' style={{ width: '90%' }}></div>
                                            </div>
                                        </div>
                                        <span className='font-semibold'>90%</span>
                                    </div>

                                    {/* Skill: React */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <img src={ReactLogo} alt="React" className='w-8 rounded-full' />
                                            <span className='font-semibold'>React</span>
                                        </div>
                                        <div className='w-64'>
                                            <div className='bg-gray-200 rounded-full h-2'>
                                                <div className='bg-red-500 h-2 rounded-full' style={{ width: '70%' }}></div>
                                            </div>
                                        </div>
                                        <span className='font-semibold'>70%</span>
                                    </div>

                                    {/* Skill: Redux */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <img src={ReduxLogo} alt="Redux" className='w-8' />
                                            <span className='font-semibold'>Python</span>
                                        </div>
                                        <div className='w-64'>
                                            <div className='bg-gray-200 rounded-full h-2'>
                                                <div className='bg-red-500 h-2 rounded-full' style={{ width: '75%' }}></div>
                                            </div>
                                        </div>
                                        <span className='font-semibold'>75%</span>
                                    </div>

                                    {/* Skill: MongoDB */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <img src={Mongodb} alt="MongoDB" className='w-10' />
                                            <span className='font-semibold'>SQL</span>
                                        </div>
                                        <div className='w-64'>
                                            <div className='bg-gray-200 rounded-full h-2'>
                                                <div className='bg-red-500 h-2 rounded-full' style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                        <span className='font-semibold'>85%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Soft Skills Section */}
                            <div className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 w-1/2'>
                                <h3 className="text-2xl font-bold text-red-600 font-sans tracking-wide uppercase">Soft Skills</h3>
                                <div className='flex flex-col items-center gap-6'>
                                    {/* Soft Skill: Adaptability */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <span className='font-semibold'>Adaptability</span>
                                        </div>
                                    </div>

                                    {/* Soft Skill: Team Collaboration */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <span className='font-semibold'>Team Collaboration</span>
                                        </div>
                                    </div>

                                    {/* Soft Skill: Innovation and Creativity */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <span className='font-semibold'>Innovation and Creativity</span>
                                        </div>
                                    </div>

                                    {/* Soft Skill: Communication */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <span className='font-semibold'>Communication</span>
                                        </div>
                                    </div>
                                    {/* Soft Skill: Problem Solving */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <span className='font-semibold'>Problem Solving</span>
                                        </div>
                                    </div>

                                    {/* Soft Skill: Time Management */}
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <span className='font-semibold'>Time Management</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-6'>
                                        <div className='border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300'>
                                            <span className='font-semibold'>Fast Learning</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <br></br>
                        <h1 className='text-center text-2xl lg:text-4xl font-bold'>MY JOURNEY...</h1>
                        <div className="flex gap-8">
   
    <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 w-[600px] h-[600px]">
        <h3 className="text-2xl font-bold text-red-600 font-sans tracking-wide uppercase">Education</h3>
        <div className="flex flex-row gap-8 items-start">
            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 w-1 bg-red-300 h-full"></div>
                {/* Timeline Nodes */}
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black"></div>
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black mt-[140px]"></div>
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black mt-[135px]"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-16">
                {/* Degree */}
                <div>
                    <h4 className="font-semibold text-lg">B.E. Computer Science and Engineering</h4>
                    <p className="text-sm text-gray-700">CGPA: 8.75/10 (till 6th semester)</p>
                    <p className="text-sm text-gray-700">Adhiyamaan College of Engineering, Hosur</p>
                    <p className="text-sm text-gray-700">Nov 2021 – May 2025</p>
                </div>
                {/* HSC */}
                <div>
                    <h4 className="font-semibold text-lg">Mathematics - Biology – HSC</h4>
                    <p className="text-sm text-gray-700">Percentage: 92.6%</p>
                    <p className="text-sm text-gray-700">St. Joseph’s School Matriculation Higher Secondary School</p>
                    <p className="text-sm text-gray-700">June 2020 – May 2021</p>
                </div>
                {/* SSLC */}
                <div>
                    <h4 className="font-semibold text-lg">SSLC</h4>
                    <p className="text-sm text-gray-700">Percentage: 94.8%</p>
                    <p className="text-sm text-gray-700">St. Joseph’s School Matriculation Higher Secondary School</p>
                    <p className="text-sm text-gray-700">June 2018 – May 2019</p>
                </div>
            </div>
        </div>
    </div>

    
    <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 w-[600px] h-[600px]">
        <h3 className="text-2xl font-bold text-red-600 font-sans tracking-wide uppercase">Experience</h3>
        
        <div className="flex flex-row gap-8 items-start">
            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 w-1 bg-red-300 h-full"></div>
                {/* Timeline Nodes */}
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black"></div>
                <div className="relative z-10 bg-red-500 w-4 h-4 rounded-full border-4 border-black mt-[220px]"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-16">
                {/* YBI Foundation */}
                <div>
                    <h3 className="font-semibold text-lg">YBI Foundation | Artificial Intelligence and Machine Learning Internship</h3>
                    <p className="text-sm text-gray-700">June 2024 – July 2024</p>
                    <p className="text-sm text-gray-700">Built Predictive, Regressive, and Decision models using machine learning algorithms for various use cases. Analyzed large and imbalanced datasets to provide data insights and optimistic solutions.</p>
                </div>
                {/* Titan Company Limited */}
                <div>
                    <h4 className="font-semibold text-lg">Titan Company Limited | Computer Networking Internship</h4>
                    <p className="text-sm text-gray-700">Dec 2023 – Jan 2024</p>
                    <p className="text-sm text-gray-700">Gained experience in IT administration tools, networking concepts, SAP, OS installation, and IP configurations.</p>
                </div>
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

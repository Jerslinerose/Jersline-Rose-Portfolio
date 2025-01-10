import React from 'react';
import Typewriter from 'typewriter-effect';

import hero from '../assets/Hero.png';
import reactLogo from '../assets/React.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Tailwind Css.png';
import roll from '../assets/Roll.svg'; // Adjust the path if needed

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Jersline <span className="text-red-500">Rose J</span>
            </h1>
            <div className="font-bold text-5xl text-red-500 font-sans">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <br />
            <button className="bg-black text-white px-3 py-2 w-max rounded-md mb-4">
              <a
                href="https://drive.google.com/file/d/19onk6L9W8BmBlh2Jj4OE3yXANzwMu5Jj/view?usp=drivesdk"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
            {/* LinkedIn Button */}
            <button className="bg-blue-600 text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://www.linkedin.com/in/jersline-rose-j/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[60vh] h-72" />
            <img
              src={reactLogo}
              alt="React Logo"
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt="Redux Logo"
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt="Tailwind Logo"
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>

      {/* Rotating Image */}
      <div className="absolute top-12 right-7">
        <img
          src={roll}
          alt="Rotating Icon"
          className="w-12 sm:w-16 md:w-20 lg:w-24 animate-spin"
          style={{
            animationDuration: '4s',
            transformOrigin: 'center', // Ensures it rotates around its center
          }}
        />
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import Portfolio from '../assets/Portfolio.png';
import SpicyBites from '../assets/SpicyBites.png';
import Youtube from '../assets/Youtube.png';
import Cards from './Cards';

const Projects = () => {

  const projectJson = [
    {
      title: 'Portfolio',
      desc: 'Developed a stunning Portfolio for myself which is dynamic and responsive by using React.Js, Tailwind Css, Particle Js and Canva for Graphics.',
      image: Portfolio,
      live: "https://jerslineroseportfolio.netlify.app/",
      github: "https://github.com/Jerslinerose/Jersline-Rose-Portfolio"
    },
    {
      title: 'Flavour Fiesta',
      desc: 'Developed a recipe web application with an AI chatbot using HTML, CSS and JavaScript. The chatbot provides personalized recipe recommendations and interactive user assistance.',
      image: SpicyBites,
      
    },
    {
      title: 'To Do List Application',
      desc: 'Implemented a task management application using HTML, CSS, JAVASCRIPT to add, update, delete, and mark tasks as completed for improved productivity.',
      image: Youtube,
      
    },
  ];

  return (
    <section id='projects' className="relative bg-gradient-to-r from-red-300 via-yellow-300 to-red-300 py-10 px-4">
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-black border-b border-black w-max pb-4'>MY PROJECTS</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          {projectJson.map((items, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-lg shadow-lg h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:cursor-pointer"
              >
                <Cards item={items} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const javascript = { name: 'JavaScript', abv: 'js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', bg: '#FDE047', tx: '#000' };
const typescript = { name: 'TypeScript', abv: 'ts', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg', bg: '#007ACC', tx: '#000' };
const html = { name: 'HTML', abv: 'ht', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', bg: '#E44D26', tx: '#000' };
const css = { name: 'CSS', abv: 'cs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', bg: '#007ACC', tx: '#000' };
const react = { name: 'React', abv: 'rt', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', bg: '#61DAFB', tx: '#000' };
const redux = { name: 'Redux', abv: 'rx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', bg: '#764ABC', tx: '#000' };
const next = { name: 'Next', abv: 'nx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg', bg: '#FFFFFF', tx: '#000' };
const tailwindCSS = { name: 'TailwindCSS', abv: 'tw', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', bg: '#38B2AC', tx: '#000' };
const node = { name: 'Node', abv: 'no', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', bg: '#8CC84B', tx: '#000' };
const express = { name: 'Express', abv: 'ex', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', bg: '#FFFFFF', tx: '#000' };
const nest = { name: 'Nest', abv: 'ns', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg', bg: '#E0234E', tx: '#000' };
const sequelize = { name: 'Sequelize', abv: 'sq', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain.svg', bg: '#764ABC', tx: '#000' };
const postreSQL = { name: 'PostgreSQL', abv: 'pg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg', bg: '#336791', tx: '#000' };
const mongoDB = { name: 'MongoDB', abv: 'mg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', bg: '#47A248', tx: '#000' };

const Projects = () => {
  const data = [
    {
      title: 'Huntek',
      abv: 'hk',
      description: 'Desarrollo de una aplicación web para una startup mexicana, mi rol en este proyecto fue de Front End y armamos la página desde cero, el proyecto aún no fue lanzado pero estuve como pasante en el mismo. Me dedique a desarrollar y acomodar distintos componentes logrando una buena estructura y visualización de la página.',
      date: 'Julio 2023',
      technologies: [next, redux, tailwindCSS],
      image: '/chicago.jpg',
      link: { web: 'https://huntek.vercel.app/', repo: 'https://github.com/aguscabralr/Huntek' },
    },
    {
      title: 'FoodPi',
      abv: 'fp',
      description: 'Aplicación web de estilo SPA que sirve para buscar recetas de distintos tipos de comidas, ver sus ingredientes y recetas y para agregar la recetas que vos quieras. Además, cuenta con proceso de registro para asi guardar tus genialidades como chef, a cocinar!',
      date: 'Junio 2023',
      technologies: [react, redux, css, node, express, sequelize, postreSQL],
      image: '/chicago.jpg',
      link: { web: 'https://foodpi.vercel.app/', repo: 'https://github.com/aguscabralr/FoodPI-Front' },
    },
    {
      title: 'Rick&Morty',
      abv: 'rm',
      description: 'Mi primera aplicación web! Es una SPA (Single Page Application) que muestra los personajes de la serie animada que lleva por titulo, esta ambientada a la misma respecto al diseño y en la misma uno puede, registrarse, iniciar sesión, buscar personajes, filtrar personajes y hasta favearlos.',
      date: 'Mayo 2023',
      technologies: [react, redux, css, node, express, sequelize, postreSQL],
      image: '/chicago.jpg',
      link: { web: 'https://rickandmortybyaguscabralr.vercel.app/', repo: 'https://github.com/aguscabralr/RickAndMorty-Front' },
    },
  ];
  return (
    <section id='proj'>
      <div id='prcont' className='w-full h-20 flex justify-end items-center bg-[--txt] text-[--sme] overflow-hidden z-30'>
        <h1 id='prti' className='text-nowrap text-2xl lg:text-4xl xl:text-5xl font-semibold'>
          Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos
        </h1>
      </div>
      <article className='py-16 px-[10%] text-[--txt] flex-col gap-[10svh]'>
        {data.map((proj, idx) => {
          return (
            <div key={idx} id={`${proj.abv}cont`} className='w-full max-h-68 p-8 bg-[--sim] border rounded-xl flex-row gap-10 overflow-hidden'>
              <div id={`${proj.abv}tx`} className='w-3/5 flex-col justify-around'>
                <div>
                  <span className='text-xs text-gray-500'>{proj.date}</span>
                  <h1 className='text-xl font-bold'>{proj.title}</h1>
                </div>
                <p className='text-sm py-3 line-clamp-4 text-pretty'>{proj.description}</p>
                <div className='h-10 flex-row gap-4'>
                  {proj.technologies.map((tech, idx) => {
                    return (
                      <div key={idx} id={tech.abv} className={`${proj.abv}th h-full flex center relative hover:cursor-pointer`}>
                        <img src={tech.icon} alt={tech.abv} className='aspect-square h-full object-cover filter grayscale-[80%] hover:grayscale-0' />
                        <p id={`${tech.abv}tx`} style={{ backgroundColor: `${tech.bg}`, color: `${tech.tx}` }} className='opacity-0 absolute top-[50%] shadow-xl'>
                          {tech.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div id={`${proj.abv}ph`} className='w-2/5 h-full relative overflow-hidden'>
                <img src={proj.image} alt={proj.title} className='w-full h-full object-cover' />
                <div className='translate-y-[100%] w-full h-full flex center gap-5 bg-black opacity-80 absolute top-0 left-0 duration-300'>
                  <a href={proj.link.web} title='Visitá el proyecto' target='_blank' rel='noreferrer'>
                    <img src='/goWeb.svg' alt='goFile' className='w-10 h-10 invert' />
                  </a>
                  <a href={proj.link.repo} title='Visitá el repositorio' target='_blank' rel='noreferrer'>
                    <img src='/github.svg' alt='goFile' className='w-10 h-10 invert' />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Projects;

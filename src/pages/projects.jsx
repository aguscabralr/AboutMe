const javascript = { name: 'JavaScript', abv: 'js', icon: '/tech/javascript.svg', bg: '#F0DB4F', tx: '#000' };
const typescript = { name: 'TypeScript', abv: 'ts', icon: '/tech/typescript.svg', bg: '#007ACB', tx: '#000' };
const html = { name: 'HTML', abv: 'ht', icon: '/tech/html5.svg', bg: '#E44D26', tx: '#000' };
const css = { name: 'CSS', abv: 'cs', icon: '/tech/css3.svg', bg: '#1572B6', tx: '#000' };
const react = { name: 'React', abv: 'rt', icon: '/tech/react.svg', bg: '#61DAFB', tx: '#000' };
const redux = { name: 'Redux', abv: 'rx', icon: '/tech/redux.svg', bg: '#764ABC', tx: '#000' };
const next = { name: 'Next', abv: 'nx', icon: '/tech/nextjs.svg', bg: '#FFFFFF', tx: '#000' };
const tailwind = { name: 'TailwindCSS', abv: 'tw', icon: '/tech/tailwindcss.svg', bg: '#38BDF8', tx: '#000' };
const gsap = { name: 'Gsap', abv: 'gs', icon: '/tech/gsap.svg', bg: '#8AC640', tx: '#000' };
const node = { name: 'Node', abv: 'no', icon: '/tech/nodejs.svg', bg: '#8CC84B', tx: '#000' };
const express = { name: 'Express', abv: 'ex', icon: '/tech/express.svg', bg: '#FFFFFF', tx: '#000' };
const nest = { name: 'Nest', abv: 'ns', icon: '/tech/nestjs.svg', bg: '#E0234E', tx: '#000' };
const sequelize = { name: 'Sequelize', abv: 'sq', icon: '/tech/sequelize.svg', bg: '#03AFEF', tx: '#000' };
const postgresql = { name: 'PostgreSQL', abv: 'pg', icon: '/tech/postgresql.svg', bg: '#336791', tx: '#000' };
const mongodb = { name: 'MongoDB', abv: 'mg', icon: '/tech/mongodb.svg', bg: '#47A248', tx: '#000' };
const github = { name: 'GitHub', abv: 'gh', icon: '/tech/github.svg', bg: '#FFFFFF', tx: '#000' };
const git = { name: 'Git', abv: 'gt', icon: '/tech/git.svg', bg: '#E44D26', tx: '#000' };

const Projects = () => {
  const data = [
    {
      title: 'Huntek',
      abv: 'hk',
      description: 'Desarrollo de una aplicación web para una startup mexicana, mi rol en este proyecto fue de Front End y armamos la página desde cero, el proyecto aún no fue lanzado pero estuve como pasante en el mismo. Me dedique a desarrollar y acomodar distintos componentes logrando una buena estructura y visualización de la página.',
      date: 'Julio 2023',
      technologies: [javascript, html, next, redux, tailwind],
      image: '/images/hk.png',
      link: { web: 'https://huntek.vercel.app/', repo: 'https://github.com/aguscabralr/Huntek' },
    },
    {
      title: 'FoodPi',
      abv: 'fp',
      description: 'Aplicación web de estilo SPA que sirve para buscar recetas de distintos tipos de comidas, ver sus ingredientes y recetas y para agregar la recetas que vos quieras. Además, cuenta con proceso de registro para asi guardar tus genialidades como chef, a cocinar!',
      date: 'Junio 2023',
      technologies: [javascript, html, css, react, redux, node, express, sequelize, postgresql],
      image: '/images/fp.png',
      link: { web: 'https://foodpi.vercel.app/', repo: 'https://github.com/aguscabralr/FoodPI-Front' },
    },
    {
      title: 'Rick&Morty',
      abv: 'rm',
      description: 'Mi primera aplicación web! Es una SPA (Single Page Application) que muestra los personajes de la serie animada que lleva por titulo, esta ambientada a la misma respecto al diseño y en la misma uno puede, registrarse, iniciar sesión, buscar personajes, filtrar personajes y hasta favearlos.',
      date: 'Mayo 2023',
      technologies: [javascript, html, css, react, redux, node, express, sequelize, postgresql],
      image: '/images/rm.png',
      link: { web: 'https://rickandmortybyaguscabralr.vercel.app/', repo: 'https://github.com/aguscabralr/RickAndMorty-Front' },
    },
  ];
  return (
    <section id='proj'>
      <div id='prcont' className='w-full h-20 flex justify-end items-center bg-[--txt] text-[--sme] overflow-hidden z-30'>
        <h1 id='prti' className='whitespace-nowrap text-2xl lg:text-4xl xl:text-5xl font-semibold'>
          Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos Proyectos
        </h1>
      </div>
      <article className='py-16 px-[10%] text-[--txt] flex-col gap-[5svh]'>
        {data.map((proj, idx) => {
          return (
            <div key={idx} id={`${proj.abv}cont`} className='w-full lg:max-h-68 p-8 bg-[--sim] border rounded-xl flex-col lg:flex-row gap-7 lg:gap-10 overflow-hidden'>
              <div id={`${proj.abv}tx`} className='w-full lg:w-3/5 flex-col justify-around'>
                <div>
                  <span className='text-xs text-gray-500'>{proj.date}</span>
                  <h1 className='text-xl font-bold'>{proj.title}</h1>
                </div>
                <p className='text-sm py-3 lg:line-clamp-4'>{proj.description}</p>
                <div className='h-6 lg:h-10 flex-row gap-4'>
                  {proj.technologies.map((tech, idx) => {
                    return (
                      <div key={idx} id={tech.abv} className={`${proj.abv}th h-full flex center relative hover:cursor-pointer`}>
                        <img src={tech.icon} alt={tech.abv} className='aspect-square h-full object-cover filter grayscale-[100%] hover:grayscale-0' />
                        <p id={`${tech.abv}tx`} style={{ backgroundColor: `${tech.bg}`, color: `${tech.tx}` }} className='opacity-0 absolute top-[50%] shadow-xl'>
                          {tech.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div id={`${proj.abv}ph`} className='w-full lg:w-2/5 h-full relative overflow-hidden'>
                <img src={proj.image} alt={proj.title} className='w-full h-full object-cover' />
                <div className='translate-y-[100%] w-full h-full flex center gap-5 bg-black opacity-80 absolute top-0 left-0 duration-300'>
                  <a href={proj.link.web} title='Visitá el proyecto' target='_blank' rel='noreferrer'>
                    <img src='/svg/goWeb.svg' alt='goFile' className='w-10 h-10 invert' />
                  </a>
                  <a href={proj.link.repo} title='Visitá el repositorio' target='_blank' rel='noreferrer'>
                    <img src='/svg/github.svg' alt='goFile' className='w-10 h-10 invert' />
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

const Technolgies = () => {
  const languages = [
    { name: 'JavaScript', abv: 'js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', bg: '#FDE047', tx: '#000' },
    { name: 'TypeScript', abv: 'ts', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg', bg: '#007ACC', tx: '#000' },
    { name: 'HTML', abv: 'ht', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', bg: '#E44D26', tx: '#000' },
    { name: 'CSS', abv: 'cs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', bg: '#007ACC', tx: '#000' },
  ];
  const fronts = [
    { name: 'React', abv: 'rt', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', bg: '#61DAFB', tx: '#000' },
    { name: 'Redux', abv: 'rx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', bg: '#764ABC', tx: '#000' },
    { name: 'Next', abv: 'nx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg', bg: '#FFFFFF', tx: '#000' },
    { name: 'TailwindCSS', abv: 'tw', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', bg: '#38B2AC', tx: '#000' },
  ];
  const backs = [
    { name: 'Node', abv: 'no', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', bg: '#8CC84B', tx: '#000' },
    { name: 'Express', abv: 'ex', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', bg: '#FFFFFF', tx: '#000' },
    { name: 'Nest', abv: 'ns', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg', bg: '#E0234E', tx: '#000' },
  ];
  const datas = [
    { name: 'Sequelize', abv: 'sq', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain.svg', bg: '#764ABC', tx: '#000' },
    { name: 'PostgreSQL', abv: 'pg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg', bg: '#336791', tx: '#000' },
    { name: 'MongoDB', abv: 'mg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', bg: '#47A248', tx: '#000' },
  ];
  const tools = [
    { name: 'GitHub', abv: 'gh', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', bg: '#FFFFFF', tx: '#000' },
    { name: 'Git', abv: 'gt', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', bg: '#E44D26', tx: '#000' },
  ];
  return (
    <section id='tech'>
      <div id='tecont' className='w-full h-20 flex items-center bg-[--txt] text-[--sme] overflow-hidden z-40'>
        <h1 id='teti' className='text-nowrap text-2xl lg:text-4xl xl:text-5xl font-semibold'>
          Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías
        </h1>
      </div>
      <article id='tcont' className='w-full py-16 px-[5%] text-[--txt] flex-col gap-[20svh]'>
        <div className='w-full h-[15svh] max-h-[75px] md:max-h-24 lg:max-h-40 flex-row items-center gap-5 lg:gap-10'>
          <h2 id='latx' className='flex-grow text-end lg:text-3xl xl:text-4xl'>
            Lenguajes
          </h2>
          <div id='laic' className='z-10 flex-grow h-full flex-col items-start'>
            <div className='w-fit h-full p-3 flex-row items-center gap-2 lg:gap-10 bg-zinc-800 border-2 border-[--txt] rounded-tr-xl rounded-br-xl'>
              {languages.map((lang, idx) => {
                return (
                  <div key={idx} id={lang.abv} className='h-full flex center relative hover:cursor-pointer'>
                    <img src={lang.icon} alt={lang.abv} className='aspect-square h-full object-cover' />
                    <p id={`${lang.abv}tx`} style={{ backgroundColor: `${lang.bg}`, color: `${lang.tx}` }} className='opacity-0 absolute top-[50%] shadow-xl'>
                      {lang.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='w-full h-[15svh] max-h-[75px] md:max-h-24 lg:max-h-40 flex-row items-center gap-5 lg:gap-10'>
          <div id='fric' className='z-10 flex-grow h-full flex-col items-end'>
            <div className='w-fit h-full p-3 flex-row items-center gap-2 lg:gap-10 bg-zinc-800 border-2 border-[--txt] rounded-tl-xl rounded-bl-xl'>
              {fronts.map((front, idx) => {
                return (
                  <div key={idx} id={front.abv} className='h-full flex center relative hover:cursor-pointer'>
                    <img src={front.icon} alt={front.abv} className='aspect-square h-full object-cover' />
                    <p id={`${front.abv}tx`} style={{ backgroundColor: `${front.bg}`, color: `${front.tx}` }} className='opacity-0 absolute top-[50%] shadow-xl'>
                      {front.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <h2 id='frtx' className='flex-grow text-start lg:text-3xl xl:text-4xl'>
            Front-End
          </h2>
        </div>
        <div className='w-full h-[15svh] max-h-[75px] md:max-h-24 lg:max-h-40 flex-row items-center gap-5 lg:gap-10'>
          <h2 id='batx' className='flex-grow text-end lg:text-3xl xl:text-4xl'>
            Back-End
          </h2>
          <div id='baic' className='z-10 flex-grow h-full flex-col items-start'>
            <div className='w-fit h-full p-3 flex-row items-center gap-2 lg:gap-10 bg-zinc-800 border-2 border-[--txt] rounded-tr-xl rounded-br-xl'>
              {backs.map((back, idx) => {
                return (
                  <div key={idx} id={back.abv} className='h-full flex center relative hover:cursor-pointer'>
                    <img src={back.icon} alt={back.abv} className='aspect-square h-full object-cover' />
                    <p id={`${back.abv}tx`} style={{ backgroundColor: `${back.bg}`, color: `${back.tx}` }} className='opacity-0 absolute top-[50%] shadow-xl'>
                      {back.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='w-full h-[15svh] max-h-[75px] md:max-h-24 lg:max-h-40 flex-row items-center gap-5 lg:gap-10'>
          <div id='daic' className='z-10 flex-grow h-full flex-col items-end'>
            <div className='w-fit h-full p-3 flex-row items-center gap-2 lg:gap-10 bg-zinc-800 border-2 border-[--txt] rounded-tl-xl rounded-bl-xl'>
              {datas.map((data, idx) => {
                return (
                  <div key={idx} id={data.abv} className='h-full flex center relative hover:cursor-pointer'>
                    <img src={data.icon} alt={data.abv} className='aspect-square h-full object-cover' />
                    <p id={`${data.abv}tx`} style={{ backgroundColor: `${data.bg}`, color: `${data.tx}` }} className='opacity-0 absolute top-[50%] shadow-xl'>
                      {data.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <h2 id='datx' className='flex-grow text-start lg:text-3xl xl:text-4xl'>
            Data-Base
          </h2>
        </div>
        <div className='w-full h-[15svh] max-h-[75px] md:max-h-24 lg:max-h-40 flex-row items-center gap-5 lg:gap-10'>
          <h2 id='totx' className='flex-grow text-end lg:text-3xl xl:text-4xl'>
            Herramientas
          </h2>
          <div id='toic' className='z-10 flex-grow h-full flex-col items-start'>
            <div className='w-fit h-full p-3 flex-row items-center gap-2 lg:gap-10 bg-zinc-800 border-2 border-[--txt] rounded-tr-xl rounded-br-xl'>
              {tools.map((tool, idx) => {
                return (
                  <div key={idx} id={tool.abv} className='h-full flex center relative hover:cursor-pointer'>
                    <img src={tool.icon} alt={tool.abv} className='aspect-square h-full object-cover' />
                    <p id={`${tool.abv}tx`} style={{ backgroundColor: `${tool.bg}`, color: `${tool.tx}` }} className='opacity-0 absolute top-[50%] shadow-xl'>
                      {tool.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Technolgies;

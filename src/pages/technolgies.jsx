import { backs, datas, fronts, languages, styles, tools } from '../utils/const';

const Technolgies = () => {
  return (
    <section id='tech'>
      <div id='tecont' className='w-full h-20 flex items-center bg-[--txt] text-[--sme] overflow-hidden z-40'>
        <h1 id='teti' className='whitespace-nowrap text-2xl lg:text-4xl xl:text-5xl font-semibold'>
          Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías Tecnologías
        </h1>
      </div>
      <article id='tcont' className='w-full py-16 px-[5%] text-[--txt] flex-col gap-[10svh]'>
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
        <div className='w-full h-[15svh] max-h-[75px] md:max-h-24 lg:max-h-40 flex-row items-center gap-5 lg:gap-100'>
          <h2 id='sttx' className='flex-grow text-end lg:text-3xl xl:text-4xl'>
            Styles
          </h2>
          <div id='stic' className='z-10 flex-grow h-full flex-col items-start'>
            <div className='w-fit h-full p-3 flex-row items-center gap-2 lg:gap-10 bg-zinc-800 border-2 border-[--txt] rounded-tr-xl rounded-br-xl'>
              {styles.map((style, idx) => {
                return (
                  <div key={idx} id={style.abv} className='h-full flex center relative hover:cursor-pointer'>
                    <img src={style.icon} alt={style.abv} className='aspect-square h-full object-cover' />
                    <p id={`${style.abv}tx`} style={{ backgroundColor: `${style.bg}`, color: `${style.tx}` }} className='opacity-0 absolute top-[50%] shadow-xl'>
                      {style.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='w-full h-[15svh] max-h-[75px] md:max-h-24 lg:max-h-40 flex-row items-center gap-5 lg:gap-10'>
          <div id='baic' className='z-10 flex-grow h-full flex-col items-end'>
            <div className='w-fit h-full p-3 flex-row items-center gap-2 lg:gap-10 bg-zinc-800 border-2 border-[--txt] rounded-tl-xl rounded-bl-xl'>
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
          <h2 id='batx' className='flex-grow text-start lg:text-3xl xl:text-4xl'>
            Back-End
          </h2>
        </div>
        <div className='w-full h-[15svh] max-h-[75px] md:max-h-24 lg:max-h-40 flex-row items-center gap-5 lg:gap-10'>
          <h2 id='datx' className='flex-grow text-end lg:text-3xl xl:text-4xl'>
            Data-Base
          </h2>
          <div id='daic' className='z-10 flex-grow h-full flex-col items-start'>
            <div className='w-fit h-full p-3 flex-row items-center gap-2 lg:gap-10 bg-zinc-800 border-2 border-[--txt] rounded-tr-xl rounded-br-xl'>
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
        </div>
        <div className='w-full h-[15svh] max-h-[75px] md:max-h-24 lg:max-h-40 flex-row items-center gap-5 lg:gap-10'>
          <div id='toic' className='z-10 flex-grow h-full flex-col items-end'>
            <div className='w-fit h-full p-3 flex-row items-center gap-2 lg:gap-10 bg-zinc-800 border-2 border-[--txt] rounded-tl-xl rounded-bl-xl'>
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
          <h2 id='totx' className='flex-grow text-start lg:text-3xl xl:text-4xl'>
            Herramientas
          </h2>
        </div>
      </article>
    </section>
  );
};

export default Technolgies;

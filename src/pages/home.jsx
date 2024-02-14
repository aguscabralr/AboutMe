const Home = () => {
  return (
    <section id='home' className='w-full h-[130svh] pt-16'>
      <article id='heroxs' className='w-full h-[calc(100svh-64px)] px-[10%] flex-col center lg:hidden'>
        <div id='phxs' className='w-[60%] h-[40%]'>
          <img src={'/aguscabral.jpg'} alt='photo' className='w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl' />
        </div>
        <div id='contxs' className='w-full h-[20%] max-h-24 px-2 flex-col center gap-2 bg-[--crd] text-[--sme] shadow-[--txt] shadow-lg rounded-2xl z-10'>
          <h1 id='txxs1' className='text-lg'>
            Hola! Soy <span className='font-semibold'>Agustin Cabral</span>
          </h1>
          <h2 id='txxs2' className='text-center xs:text-xs sm:text-sm'>
            <span className='font-semibold text-[--sec]'>Desarrollador FullStack </span>
            de Cordoba, Argentina
          </h2>
        </div>
      </article>
      <article id='heroxl' className='w-full h-[calc(100svh-64px)] px-[15%] hidden lg:flex center'>
        <div id='contxl' className='w-full h-[40%] min-h-24 max-h-40 px-10 flex-row justify-evenly items-center bg-[--crd] text-[--sme] shadow-[--txt] shadow-lg rounded-3xl z-10'>
          <div id='txxl' className='flex-col center gap-2'>
            <h1 id='txxl1' className='text-4xl xl:text-5xl'>
              Hola! Soy <span className='font-semibold'>Agustin Cabral</span>
            </h1>
            <h2 id='txxl2' className='text-center text-xl xl:text-2xl'>
              <span className='font-semibold text-[--sec]'>Desarrollador FullStack </span>
              de Cordoba, Argentina
            </h2>
          </div>
          <div id='phxl' className='w-[25%] h-[200%]'>
            <img src={'/aguscabral.jpg'} alt='photo' className='w-full h-full object-cover rounded-3xl' />
          </div>
        </div>
      </article>
      <article id='abcont' className='w-full h-[45svh] pb-16 px-[10%] lg:px-[15%] flex-col justify-end gap-5 xs:text-xs sm:text-sm lg:text-base xl:text-xl text-pretty'>
        <p id='abtx1'>Bienvenido/a! Gracias por tu visita, como mencioné soy desarrollador fullstack, por mi personalidad me considero alguien ordenado, detallista y perfeccionsta, me gusta mucho el diseño y la estructura de las cosas en general, por tanto, le he dedicado a la parte del front end mucho más tiempo y es en lo que más me destaco.</p>
        <p id='abtx2'>Comencé de a poco mi viaje como programador en 2022, con un pequeño curso nacional y luego entre a SoyHenry, allí en 2023, completé el curso como desarrollador web fullstack y actualmente me encuentro como freelance y buscando nuevas tecnologias que aprender de forma autodidacta</p>
        {/* <p id='abtx2'>En gran parte, este afán por el diseño se debe a que también soy estudiante de ingeniería civil y mi objetivo algún día será poder conjugar mis dos backgrounds para así destacar en el desarrollo de web basadas en estas</p> */}
      </article>
    </section>
  );
};

export default Home;

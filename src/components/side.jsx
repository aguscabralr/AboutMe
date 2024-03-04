import { scrollTo } from '../gsap';
import Theme from '../utils/theme';
import Links from './links';

// eslint-disable-next-line react/prop-types
const Side = ({ sideBar, setSideBar, theme, setTheme }) => {
  return (
    <section className={`md:hidden w-1/2 h-screen pt-16 backdrop-blur-lg bg-white/80 dark:bg-black/80 text-black dark:text-white border-l border-black dark:border-white absolute top-0 ${sideBar ? 'right-0' : 'right-[-50%]'} duration-700`}>
      <article className='w-full h-1/3 flex flex-col'>
        <div className='w-full flex justify-center'>
          <Theme theme={theme} setTheme={setTheme} />
        </div>
        <div className={`w-full py-2 flex flex-col items-center duration-700`}>
          <button
            onClick={() => {
              scrollTo('home');
              setSideBar(false);
            }}
            className={`w-fit px-5 py-1 landscape:hover:bg-rd landscape:hover:text-white landscape:hover:rounded-2xl active:bg-rd active:text-white active:rounded-2xl duration-300`}
          >
            Inicio
          </button>
        </div>
        <div className={`w-full py-2 flex flex-col items-center duration-700`}>
          <button
            onClick={() => {
              scrollTo('tech');
              setSideBar(false);
            }}
            className={`w-fit px-5 py-1 landscape:hover:bg-rd landscape:hover:text-white landscape:hover:rounded-2xl active:bg-rd active:text-white active:rounded-2xl duration-300`}
          >
            Tecnologías
          </button>
        </div>
        <div className={`w-full py-2 flex flex-col items-center duration-700`}>
          <button
            onClick={() => {
              scrollTo('proj');
              setSideBar(false);
            }}
            className={`w-fit px-5 py-1 landscape:hover:bg-rd landscape:hover:text-white landscape:hover:rounded-2xl active:bg-rd active:text-white active:rounded-2xl duration-300`}
          >
            Proyectos
          </button>
        </div>
        <div className={`w-full py-2 flex flex-col items-center duration-700`}>
          <button
            onClick={() => {
              scrollTo('cont');
              setSideBar(false);
            }}
            className={`w-fit px-5 py-1 landscape:hover:bg-rd landscape:hover:text-white landscape:hover:rounded-2xl active:bg-rd active:text-white active:rounded-2xl duration-300`}
          >
            Contacto
          </button>
        </div>
        <Links />
      </article>
    </section>
  );
};

export default Side;

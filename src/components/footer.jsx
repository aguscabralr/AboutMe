import { useState } from 'react';
import { scrollTo } from '../gsap';
const Footer = () => {
  const [cv, setCv] = useState(false);
  return (
    <section id='foo' className='w-full landscape:h-52 portrait:p-10 bg-[--sim] flex portrait:flex-col justify-center items-center portrait:gap-5'>
      <article className='w-full landscape:w-1/2 h-full flex flex-col justify-center items-center portrait:gap-5'>
        <img src='/ac.svg' alt='logo' className='aspect-square portrait:w-14 landscape:h-1/2 inv' />
        <h1 className='text-xl'>aguscabralr • 2024</h1>
      </article>
      <article className='w-full landscape:w-1/2 h-full flex flex-col justify-evenly items-center portrait:gap-5'>
        <div className='w-full flex portrait:flex-col justify-evenly items-center portrait:gap-5'>
          <button onClick={() => scrollTo('home')} className='w-1/4 flex justify-center items-center hover:underline duration-300'>
            Inicio
          </button>
          <button onClick={() => scrollTo('tech')} className='w-1/4 flex justify-center items-center hover:underline duration-300'>
            Tecnologías
          </button>
          <button onClick={() => scrollTo('proj')} className='w-1/4 flex justify-center items-center hover:underline duration-300'>
            Proyectos
          </button>
          <button onClick={() => scrollTo('cont')} className='w-1/4 flex justify-center items-center hover:underline duration-300'>
            Contacto
          </button>
        </div>
        <div className='w-full flex justify-evenly items-center'>
          <div className='w-1/4 flex justify-center items-center'>
            <button id='cv' onClick={() => setCv(true)} className='rounded-xl p-2 relative overflow-hidden'>
              <div className='w-[250%] h-[250%] bg-blue-400 absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
              <img src='/svg/cv.svg' alt='curriculum' className='w-7 h-7 invert z-10' />
            </button>
          </div>
          <div className='w-1/4 flex justify-center items-center'>
            <a id='lk' href='https://www.linkedin.com/in/aguscabralr/' title='Linkedin' target='_blank' rel='noreferrer' className='rounded-xl p-2 relative overflow-hidden'>
              <div className='w-[250%] h-[250%] bg-blue-600 absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
              <img src='/svg/linkedin.svg' alt='linkedin' className='w-6 h-6 invert z-10' />
            </a>
          </div>
          <div className='w-1/4 flex justify-center items-center'>
            <a id='gu' href='https://github.com/aguscabralr' title='GitHub' target='_blank' rel='noreferrer' className='rounded-xl p-2 relative overflow-hidden'>
              <div className='w-[250%] h-[250%] bg-black absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
              <img src='/svg/github.svg' alt='github' className='w-7 h-7 invert z-10' />
            </a>
          </div>
          <div className='w-1/4 flex justify-center items-center'>
            <a id='wa' href='https://api.whatsapp.com/send?phone=5493515142250' title='WhatsApp' target='_blank' rel='noreferrer' className='rounded-xl p-2 relative overflow-hidden'>
              <div className='w-[250%] h-[250%] bg-green-500 absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
              <img src='/svg/whatsapp.svg' alt='whatsapp' className='w-7 h-7 invert z-10' />
            </a>
          </div>
        </div>
        <article className={`${cv ? 'w-full h-full flex justify-center items-center fixed top-0 left-0 bg-black/70 z-50' : 'hidden'}`}>
          <div className='aspect-video h-1/2 flex flex-col justify-between bg-zinc-800 rounded-2xl overflow-hidden relative'>
            <button onClick={() => setCv(false)} className='w-10 h-10 hover:bg-gray-500 hover:rounded-xl absolute top-2 right-2 duration-300'>
              <img src='/svg/close.svg' alt='Close' className='invert hover:invert-0' />
            </button>
            <div className='w-full h-12 flex justify-evenly items-center bg-zinc-900'>
              <h2 className='w-1/3 flex justify-center'>Español</h2>
              <h2 className='w-1/3 flex justify-center'>English</h2>
            </div>
            <div className='w-full h-[calc(100%-48px)] flex justify-evenly items-center'>
              <a href='/cv/CabralAgustin-FullStack[es].pdf' download='CabralAgustin-FullStack[es].pdf' title='Descargar curriculum' className='w-1/3 border-4 border-transparent hover:border-black hover:rounded-2xl overflow-hidden duration-300'>
                <img src='/images/cv[es].png' alt='cves' className='object-contain hover:scale-105 duration-300' />
              </a>
              <a href='/cv/CabralAgustin-FullStack[en].pdf' download='CabralAgustin-FullStack[en].pdf' title='Descargar curriculum' className='w-1/3 border-4 border-transparent hover:border-black hover:rounded-2xl overflow-hidden duration-300'>
                <img src='/images/cv[en].png' alt='cven' className='object-contain hover:scale-105 duration-300' />
              </a>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Footer;

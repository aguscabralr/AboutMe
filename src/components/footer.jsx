const Footer = () => {
  return (
    <section id='foo'>
      <article className='w-full h-[15svh] bg-[--sim] flex-col center gap-5'>
        <div className='w-full flex center gap-5'>
          <a id='lk' href='https://www.linkedin.com/in/aguscabralr/' title='Linkedin' target='_blank' rel='noreferrer' className='rounded-xl p-2 relative overflow-hidden'>
            <div className='w-[300%] h-[300%] bg-blue-600 absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
            <img src='/linkedin.svg' alt='linkedin' className='w-8 h-8 invert z-10' />
          </a>
          <a id='gu' href='https://github.com/aguscabralr' title='GitHub' target='_blank' rel='noreferrer' className='rounded-xl p-2 relative overflow-hidden'>
            <div className='w-[300%] h-[300%] bg-black absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
            <img src='/github.svg' alt='github' className='w-8 h-8 invert z-10' />
          </a>
          <a id='wa' href='https://api.whatsapp.com/send?phone=5493515142250' title='WhatsApp' target='_blank' rel='noreferrer' className='rounded-xl p-2 relative overflow-hidden'>
            <div className='w-[300%] h-[300%] bg-green-500 absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
            <img src='/whatsapp.svg' alt='whatsapp' className='w-8 h-8 invert z-10' />
          </a>
        </div>
        <h1>Copyright © 2024 · aguscabralr</h1>
      </article>
    </section>
  );
};

export default Footer;

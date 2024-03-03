const Links = () => {
  return (
    <section className='w-16 h-full flex flex-col justify-center items-center fixed top-0 left-0 z-10'>
      <div className='w-full p-2 flex flex-col justify-center items-center gap-5 rounded-r-2xl bg-zinc-800'>
        <a id='cv' href='/cv/cabralAgustin[es].pdf' download='cabralAgustin[es].pdf' title='Curriculum' className='rounded-xl p-2 relative overflow-hidden'>
          <div className='w-[250%] h-[250%] bg-blue-400 absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
          <img src='/svg/cv.svg' alt='curriculum' className='w-7 h-7 invert z-10' />
        </a>
        <a id='lk' href='https://www.linkedin.com/in/aguscabralr/' title='Linkedin' target='_blank' rel='noreferrer' className='rounded-xl p-2 relative overflow-hidden'>
          <div className='w-[250%] h-[250%] bg-blue-600 absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
          <img src='/svg/linkedin.svg' alt='linkedin' className='w-7 h-7 invert z-10' />
        </a>
        <a id='gu' href='https://github.com/aguscabralr' title='GitHub' target='_blank' rel='noreferrer' className='rounded-xl p-2 relative overflow-hidden'>
          <div className='w-[250%] h-[250%] bg-black absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
          <img src='/svg/github.svg' alt='github' className='w-7 h-7 invert z-10' />
        </a>
        <a id='wa' href='https://api.whatsapp.com/send?phone=5493515142250' title='WhatsApp' target='_blank' rel='noreferrer' className='rounded-xl p-2 relative overflow-hidden'>
          <div className='w-[250%] h-[250%] bg-green-500 absolute top-0 left-0 translate-y-[100%] translate-x-[50%] wave duration-1000'></div>
          <img src='/svg/whatsapp.svg' alt='whatsapp' className='w-7 h-7 invert z-10' />
        </a>
      </div>
    </section>
  );
};

export default Links;

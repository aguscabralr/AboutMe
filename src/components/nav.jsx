import { useState } from 'react';
import { windowConf } from '../config/config';
import HomeSVG from '../utils/home';
import SkillsSVG from '../utils/skills';
import PortfolioSVG from '../utils/portfolio';
import ContactSVG from '../utils/contact';
import Theme from '../utils/theme';
import { scrollTo } from '../gsap';
import Side from './side';
import SideBarBtn from '../utils/sideBarBtn';

const Nav = () => {
  const [theme, setTheme] = useState(windowConf.theme);
  const [sideBar, setSideBar] = useState(false);
  return (
    <nav className='w-full h-16 text-[--txt] backdrop-blur-md fixed top-0 z-40'>
      <Side sideBar={sideBar} setSideBar={setSideBar} theme={theme} setTheme={setTheme} />
      <section onClick={() => setSideBar(false)} className={`md:hidden w-1/2 h-screen absolute top-0 ${sideBar ? 'left-0' : 'left-[-50%]'}`}></section>

      <section id='nav' className='w-full h-[62px] px-[15%] flex justify-between items-center'>
        <img src='/ac.svg' alt='ac' className='w-8 h-8 inv' onClick={() => scrollTo('home')} />
        <div className='hidden md:flex' onClick={() => scrollTo('home')}>
          <HomeSVG />
        </div>
        <div className='hidden md:flex' onClick={() => scrollTo('tech')}>
          <SkillsSVG />
        </div>
        <div className='hidden md:flex' onClick={() => scrollTo('proj')}>
          <PortfolioSVG />
        </div>
        <div className='hidden md:flex' onClick={() => scrollTo('cont')}>
          <ContactSVG />
        </div>
        <div className='hidden md:flex'>
          <Theme theme={theme} setTheme={setTheme} />
        </div>
        <button onClick={() => setSideBar(!sideBar)} className={`md:hidden ${sideBar && 'translate-x-[100%]'} duration-300`}>
          <SideBarBtn sideBar={sideBar} color={'#fff'} />
        </button>
      </section>
      <div id='navLine' className='h-[2px] lineNav flex justify-center items-center self-stretch'></div>
    </nav>
  );
};

export default Nav;

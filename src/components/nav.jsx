import { useState } from 'react';
import { windowConf } from '../config/config';
import HomeSVG from '../utils/home';
import SkillsSVG from '../utils/skills';
import PortfolioSVG from '../utils/portfolio';
import ContactSVG from '../utils/contact';
import Theme from '../utils/theme';
import { handleScroll } from '../gsap';

const Nav = () => {
  const [theme, setTheme] = useState(windowConf.theme);

  return (
    <nav className='w-full h-16 text-[--txt] backdrop-blur-md fixed top-0 z-40'>
      <section id='nav' className='w-full h-[62px] px-[15%] flex-row justify-between items-center'>
        <a href={'/'}>
          <span>Agustin Cabral</span>
        </a>
        <div className='hidden md:flex' onClick={() => handleScroll(0.25)}>
          <HomeSVG />
        </div>
        <div className='hidden md:flex' onClick={() => handleScroll(1.23)}>
          <SkillsSVG />
        </div>
        <div className='hidden md:flex' onClick={() => handleScroll(3.005)}>
          <PortfolioSVG />
        </div>
        <div className='hidden md:flex' onClick={() => handleScroll(4.7)}>
          <ContactSVG />
        </div>
        <Theme theme={theme} setTheme={setTheme} />
      </section>
      <div id='navLine' className='h-[2px] lineNav flex justify-center items-center self-stretch'></div>
    </nav>
  );
};

export default Nav;

import { windowConf } from '../config/config';

const ContactSVG = () => {
  const theme = windowConf.theme;
  const color = theme === 'dark' ? '#FFF' : '#000';

  return (
    <svg className={`hover:fill-[--btn] hover:scale-125 duration-300 hover:cursor-pointer`} fill={color} width='30px' height='30px' viewBox='0 0 52 52' data-name='Layer 1' id='Layer_1' xmlns='http://www.w3.org/2000/svg'>
      <path d='M26,52A26,26,0,0,1,22.88.19,25.78,25.78,0,0,1,34.73,1.5a2,2,0,1,1-1.35,3.77,22,22,0,0,0-21,38,22,22,0,0,0,35.41-20,2,2,0,1,1,4-.48A26,26,0,0,1,26,52Z' />
      <path d='M26,43.86a2,2,0,0,1-2-2V22.66a2,2,0,1,1,4,0v19.2A2,2,0,0,1,26,43.86Z' />
      <circle cx='26' cy='15.71' r='2.57' />
    </svg>
  );
};

export default ContactSVG;

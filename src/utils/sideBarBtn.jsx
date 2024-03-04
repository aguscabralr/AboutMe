import gsap from 'gsap';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const SideBarBtn = ({ sideBar, color }) => {
  const crx = () => {
    gsap.to('#line1', {
      rotate: 45,
      x: 2,
      y: 0.45,
    });
    gsap.to('#line2', {
      opacity: 0,
    });
    gsap.to('#line3', {
      rotate: -45,
      x: 2,

      y: -0.45,
    });
  };
  const opt = () => {
    gsap.to('#line1', {
      x: 0,
      y: 0,
      rotate: 0,
    });
    gsap.to('#line2', {
      opacity: 1,
    });
    gsap.to('#line3', {
      x: 0,
      y: 0,
      rotate: 0,
    });
  };

  useEffect(() => {
    sideBar ? crx() : opt();
  }, [sideBar]);

  return (
    <div>
      <svg fill={color} width='40px' height='40px' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'>
        <path id='line1' d='M6 8.1H19V6.9H6V8.1Z' />
        <path id='line2' d='M6 13.1H19V11.9H6V13.1Z' />
        <path id='line3' d='M6 18.1H19V16.9H6V18.1Z' />
      </svg>
    </div>
  );
};

export default SideBarBtn;

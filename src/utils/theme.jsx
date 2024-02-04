import { toggle } from '../config/config';

// eslint-disable-next-line react/prop-types
const Theme = ({ theme, setTheme }) => {
  return (
    <div>
      {theme === 'dark' ? (
        <button
          onClick={() => {
            setTheme('light');
            toggle();
          }}
          className='w-10 h-10 p-2 rounded-full bg-blue-400 text-yellow-300 grid place-content-center hover:scale-110 duration-200'
        >
          <svg width='20px' height='20px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='12' cy='12' r='3.5' stroke='#222222' />
            <path d='M12 5V3' stroke='#222222' strokeLinecap='round' />
            <path d='M12 21V19' stroke='#222222' strokeLinecap='round' />
            <path d='M16.9498 7.04996L18.364 5.63574' stroke='#222222' strokeLinecap='round' />
            <path d='M5.63608 18.3644L7.05029 16.9502' stroke='#222222' strokeLinecap='round' />
            <path d='M19 12L21 12' stroke='#222222' strokeLinecap='round' />
            <path d='M3 12L5 12' stroke='#222222' strokeLinecap='round' />
            <path d='M16.9498 16.95L18.364 18.3643' stroke='#222222' strokeLinecap='round' />
            <path d='M5.63608 5.63559L7.05029 7.0498' stroke='#222222' strokeLinecap='round' />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme('dark');
            toggle();
          }}
          className='w-10 h-10 p-2 rounded-full bg-blue-950 text-white grid place-content-center hover:scale-110 duration-200'
        >
          <svg width='20px' height='20px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Theme;

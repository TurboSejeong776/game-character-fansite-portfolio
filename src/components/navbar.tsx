import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Rover from '../assets/RoverIcon.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname: loc } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 0);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex flex-col sm:flex-row w-full h-fit sm:h-[88px] justify-between sm:justify-around items-center transition-colors duration-300 ${
        isScrolled ? 'bg-[#0d0d0d]/70 backdrop-blur-md' : 'bg-[#0d0d0d]'
      }`}
    >
      <div
        id='leftSide'
        className='flex flex-row items-center w-full h-[80px] gap-[14px] p-[20px] text-white justify-around sm:justify-normal'
      >
        <div
          id='logoWrapper'
          className='flex flex-row w-full min-h-[40px] gap-[12px] items-center sm:justify-normal'
        >
          <img
            src={Rover}
            alt='RoverIcon'
            className='flex w-[38px] h-[38px] sm:w-[48px] sm:h-[48px]'
          />
          <div className='flex flex-col w-full sm:min-h-[48px] justify-center sm:justify-evenly items-start'>
            <p className='text-[18px] sm:text-[21px] '>Rover</p>
            <p className='text-[var(--theme-accent)] text-[9px] sm:text-[12px] leading-none'>
              Arbiter's Site
            </p>
          </div>
        </div>
        <div className='flex flex-row w-full items-center justify-end sm:hidden'>
          <p className='text-[11px] text-gray-400'>Unofficial Arbiter Site</p>
        </div>
      </div>

      <div
        id='rightSideDESK'
        className='hidden sm:flex flex-row w-full h-full gap-[32px] items-center justify-center'
      >
        <button
          className={`cursor-pointer text-[13px] w-[128px] h-full ${loc === '/' ? 'border-b border-(--theme-accent) text-white' : 'hover:border-b hover:border-[#ffffff7e]'}`}
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className={`cursor-pointer text-[13px] w-[128px] h-full ${loc === '/lore' ? 'border-b border-(--theme-accent) text-white' : 'hover:border-b hover:border-[#ffffff7e]'}`}
          onClick={() => navigate('/lore')}
        >
          Ability
        </button>
        <button
          className={`cursor-pointer text-[13px] w-[128px] h-full ${loc === '/gameplay' ? 'border-b border-(--theme-accent) text-white' : 'hover:border-b hover:border-[#ffffff7e]'}`}
          onClick={() => navigate('/gameplay')}
        >
          Gameplay
        </button>
        <button
          className={`cursor-pointer text-[13px] w-[128px] h-full ${loc === '/showcase' ? 'border-b border-(--theme-accent) text-white' : 'hover:border-b hover:border-[#ffffff7e]'}`}
          onClick={() => navigate('/showcase')}
        >
          Showcase
        </button>
      </div>

      <div
        id='rightSideMOB'
        className='flex flex-col w-full h-full items-center justify-normal sm:hidden'
      >
        <div className='flex flex-row w-full h-[44px] px-[20px] gap-[32px] items-center justify-around'>
          <button
            className={`flex w-full h-full  text-[13px] items-center justify-center ${loc === '/' ? 'border-b border-(--theme-accent) text-white' : 'border-b border-[#ffffff7e]'}`}
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className={`flex w-full h-full  text-[13px] items-center justify-center ${loc === '/lore' ? 'border-b border-(--theme-accent) text-white' : 'border-b border-[#ffffff7e]'}`}
            onClick={() => navigate('/lore')}
          >
            Ability
          </button>
        </div>
        <div className='flex flex-row w-full h-[44px] px-[20px] gap-[32px] items-center justify-around'>
          <button
            className={`flex w-full h-full  text-[13px] items-center justify-center ${loc === '/gameplay' ? 'border-b border-(--theme-accent) text-white' : 'border-b border-[#ffffff7e]'}`}
            onClick={() => navigate('/gameplay')}
          >
            Gameplay
          </button>
          <button
            className={`flex w-full h-full  text-[13px] items-center justify-center ${loc === '/showcase' ? 'border-b border-(--theme-accent) text-white' : 'border-b border-[#ffffff7e]'}`}
            onClick={() => navigate('/showcase')}
          >
            Showcase
          </button>
        </div>
      </div>
      <div className='hidden flex-row w-full justify-center items-center sm:flex'>
        <p className='text-[11px]'>Unofficial Arbiter Site</p>
      </div>
    </nav>
  );
};
export default Navbar;

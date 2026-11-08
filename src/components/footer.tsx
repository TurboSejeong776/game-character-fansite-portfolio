import { Line } from './misc/line';

export const Footer = () => {
  return (
    <footer
      id='landPageFooter'
      className='flex flex-col w-full bg-[#0d0d0d] gap-[24px] sm:gap-[28px] px-[20px] sm:px-[54px] py-[36px]'
    >
      <div
        id='landPageFooterTopWrapper'
        className='flex flex-col sm:flex-row w-full gap-[24px] sm:gap-[28px] sm:justify-between '
      >
        <p className='sm:w-full text-[20px] sm:text-[24px] text-white text-left'>
          ROVER / ARBITER'S SITE
        </p>
        <div
          id='landPagefooterButtonWrapper'
          className='flex flex-col sm:flex-row w-full sm:gap-[28px] sm:justify-end'
        >
          <button className='flex w-full sm:w-fit h-[44px] items-center text-left sm:text-center text-[13px] sm:text-[12px] text-gray-300 cursor-pointer'>
            About the Archive
          </button>
          <div className='sm:hidden'>
            <Line />
          </div>
          <button className='flex w-full sm:w-fit h-[44px] items-center text-left sm:text-center text-[13px] sm:text-[12px] text-gray-300 cursor-pointer'>
            Guidelines
          </button>
          <div className='sm:hidden'>
            <Line />
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='flex w-full sm:w-fit h-[44px] items-center text-left sm:text-center text-[13px] sm:text-[12px] text-gray-300 cursor-pointer'
          >
            Back to Top ↑
          </button>
        </div>
      </div>
      <div
        id='landPageFooterBottomWrapper'
        className='flex flex-col sm:flex-row w-full gap-[24px] justify-between sm:items-end'
      >
        <p className='sm:max-w-[770px] text-[11px] text-gray-400 text-left'>
          An independent fan project. Not affiliated with or endorsed by KURO
          GAMES. Wuthering Waves and its characters belong to their respective
          owners. Community handles, posts and video entries shown here are
          illustrative, not verified submissions.
        </p>
        <p className='text-[11px] text-gray-400 text-left'>// END OF SITE //</p>
      </div>
    </footer>
  );
};

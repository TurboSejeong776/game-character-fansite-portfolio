import { useState } from 'react';
import data from '../components/data.json';
import { SkillCard } from '../components/skillcard';

const GameStat = () => {
  const [element, setElement] = useState<keyof typeof data>('Spectro');
  const sElement = data[element];
  return (
    <main className='flex flex-col w-full h-full bg-[#0d0d0d] sm:gap-[24px] pt-[12px] pb-[24px] sm:pb-[48px]'>
      <section
        id='elementTabs'
        className='fixed top-[176px] sm:top-[96px] z-40 flex flex-row w-full sm:h-[44px] gap-0 px-[0px] sm:py-[0px] items-center bg-[#0d0d0d]'
      >
        <button
          className={`cursor-pointer flex flex-col w-[25%] h-[34px] sm:min-h-full hover:shadow-[inset_0_-18px_36px_-14px_#e4f28a] active:shadow-[inset_0_-18px_36px_-14px_#e4f28a] justify-center border border-[#2A3737] transition-shadow duration-150 sm:duration-300 ${element === 'Spectro' ? 'shadow-[inset_0_-18px_36px_-14px_#e4f28a]' : ''}`}
          onClick={() => setElement('Spectro')}
        >
          <p className='text-white text-[13px] text-center'>Spectro</p>
        </button>
        <button
          className={`cursor-pointer flex flex-col w-[25%] h-[34px] sm:min-h-full hover:shadow-[inset_0_-18px_36px_-14px_#ff75cf] active:shadow-[inset_0_-18px_36px_-14px_#ff75cf] justify-center border border-[#2A3737] transition-shadow duration-150 sm:duration-300 ${element === 'Havoc' ? 'shadow-[inset_0_-18px_36px_-14px_#ff75cf]' : ''}`}
          onClick={() => setElement('Havoc')}
        >
          <p className='text-white text-[13px] text-center'>Havoc</p>
        </button>
        <button
          className={`cursor-pointer flex flex-col w-[25%] h-[34px] sm:min-h-full hover:shadow-[inset_0_-18px_36px_-14px_#85e8e1] active:shadow-[inset_0_-18px_36px_-14px_#85e8e1] justify-center border border-[#2A3737] transition-shadow duration-150 sm:duration-300 ${element === 'Aero' ? 'shadow-[inset_0_-18px_36px_-14px_#85e8e1]' : ''}`}
          onClick={() => setElement('Aero')}
        >
          <p className='text-white text-[13px] text-center'>Aero</p>
        </button>
        <button
          className={`cursor-pointer flex flex-col w-[25%] h-[34px] sm:min-h-full hover:shadow-[inset_0_-18px_36px_-14px_#9b79ff] active:shadow-[inset_0_-18px_36px_-14px_#9b79ff] justify-center border border-[#2A3737] transition-shadow duration-150 sm:duration-300 ${element === 'Electro' ? 'shadow-[inset_0_-18px_36px_-14px_#9b79ff]' : ''}`}
          onClick={() => setElement('Electro')}
        >
          <p className='text-white text-[13px] text-center'>Electro</p>
        </button>
      </section>
      <section
        id='lorePageTop'
        className='flex flex-col w-full gap-[20px] px-[20px] sm:px-[84px] pt-[48px] pb-[36px] sm:pt-[64px] sm:pb-[36px]'
      >
        <p className='text-(--theme-accent) text-[11px] text-left'>
          // GAME STATS //
        </p>
        <p className='text-white text-[22px] sm:text-[48px] leading-none text-left'>
          Rover's Gameplay-related Information, For You to Learn!
        </p>
        <p className='text-gray-400 text-[13px] text-left'>
          Info displayed below assumes that the player has the max resonance
          chain for each element.
        </p>
        <p className='text-gray-400 text-[10px] sm:text-[11px] text-left'>
          // Click on the tab above to switch between elements. //
        </p>
      </section>
      <section
        id='skillCards'
        className='flex flex-col flex-2 w-full gap-[20px] px-[20px] sm:px-[84px]'
      >
        <div
          id='skillCardTop'
          className='flex flex-col sm:flex-row w-full sm:min-h-0 gap-[20px]'
        >
          {(['BASIC', 'HEAVY', 'SKILL'] as const).map((type) => (
            <SkillCard
              key={type}
              element={element}
              skill={sElement.skill}
              type={type}
            />
          ))}
        </div>
        <div
          id='skillCardBottom'
          className='flex flex-col sm:flex-row w-full gap-[20px]'
        >
          {(['LIB', 'FORTE'] as const).map((type) => (
            <SkillCard
              key={type}
              element={element}
              skill={sElement.skill}
              type={type}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default GameStat;

import { useState } from 'react';
import data from '../components/data.json';
import { SkillCard } from '../components/skillcard';

const GameStat = () => {
  const [element, setElement] = useState<keyof typeof data>('Spectro');
  const sElement = data[element];
  const filterColor = [
    { name: 'Spectro', color: 'var(--color-spectro)' },
    { name: 'Havoc', color: 'var(--color-havoc)' },
    { name: 'Aero', color: 'var(--color-aero)' },
    { name: 'Electro', color: 'var(--color-electro)' },
  ] as const;
  return (
    <main className='flex flex-col w-full h-full bg-[#0d0d0d] sm:gap-[24px] pt-[12px] pb-[24px] sm:pb-[48px]'>
      <section
        id='elementTabs'
        className='fixed top-[176px] sm:top-[96px] z-40 flex flex-row w-full sm:h-[44px] gap-0 px-[0px] sm:py-[0px] items-center bg-[#0d0d0d]'
      >
        {filterColor.map(({ name, color }) => (
          <button
            key={name}
            aria-pressed={element === name}
            onClick={() => setElement(name)}
            style={{ '--glow': color } as React.CSSProperties}
            className={`cursor-pointer flex flex-1 h-[34px] sm:min-h-full items-center justify-center border border-[#2A3737] text-white text-[13px] transition-shadow duration-150 sm:duration-300 hover:shadow-[inset_0_-18px_36px_-14px_var(--glow)] active:shadow-[inset_0_-18px_36px_-14px_var(--glow)] ${
              element === name
                ? 'shadow-[inset_0_-18px_36px_-14px_var(--glow)]'
                : ''
            }`}
          >
            {name}
          </button>
        ))}
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

import SpIMG from '../assets/Spectro.png';
import HvIMG from '../assets/Havoc.png';
import AeIMG from '../assets/Aero.png';
import ElIMG from '../assets/ELECTRO.png';

import { useState, useEffect } from 'react';
type Theme = 'spectro' | 'havoc' | 'aero' | 'electro';

export const ThemeChanger = () => {
  const themes: Theme[] = ['spectro', 'havoc', 'aero', 'electro'];
  const iconEl = {
    spectro: SpIMG,
    havoc: HvIMG,
    aero: AeIMG,
    electro: ElIMG,
  };

  const [openSelect, setOpenSelect] = useState(false);
  const [element, setElement] = useState<Theme>(() => {
    const currentElem = document.documentElement.dataset.theme;
    return themes.find((theme) => theme === currentElem) ?? 'spectro';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = element;
  }, [element]);

  return (
    <section className='z-99 fixed bottom-6 right-6 '>
      <button className='cursor-pointer flex w-[48px] h-[48px] rounded-full bg-white justify-center opacity-75 hover:opacity-100 transition-opacity duration-200 hover:shadow-[0_0_12px_var(--theme-accent)] hover:scale-115 transition-transform'>
        <img
          id='currentThemeIcon'
          src={iconEl[element]}
          alt='elementIcon'
          className='w-full h-auto p-[4px]'
          onClick={() => setOpenSelect((open) => !open)}
        />
      </button>

      {themes
        .filter((theme) => theme !== element)
        .map((theme, index) => {
          const positions = [
            { x: 0, y: -60 },
            { x: -40, y: -40 },
            { x: -60, y: 0 },
          ];
          const { x, y } = positions[index];

          return (
            <button
              key={theme}
              type='button'
              aria-label={`Switch to ${theme}`}
              className='absolute left-1/2 top-1/2 flex w-[36px] h-[36px] rounded-full bg-white justify-center cursor-pointer'
              style={{
                transform: `translate(-50%, -50%) translate(${openSelect ? x : 0}px, ${openSelect ? y : 0}px) scale(${openSelect ? 1 : 0.5})`,
                opacity: openSelect ? 1 : 0,
                transition: 'transform 250ms ease, opacity 250ms ease',
                pointerEvents: openSelect ? 'auto' : 'none',
              }}
              onClick={() => {
                setElement(theme);
                setOpenSelect(false);
              }}
            >
              <img
                src={iconEl[theme]}
                alt=''
                className='h-auto w-full p-[4px]'
              />
            </button>
          );
        })}
    </section>
  );
};

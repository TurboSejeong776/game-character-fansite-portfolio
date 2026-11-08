import BAtk from '../assets/BaseAtk.webp';
import HAtk from '../assets/HeavyAtk.webp';
import Skill from '../assets/ResSkill.webp';
import Lib from '../assets/Lib.webp';
import Forte from '../assets/Forte.webp';

import { Line } from './misc/line';

type DetailProps = {
  basic: string;
  heavy: string;
  skill: string;
  lib: string;
  forte: string;
  notes: string[];
};

type SkillCardProps = {
  element: 'Spectro' | 'Havoc' | 'Aero' | 'Electro';
  skill: DetailProps;
  type: 'BASIC' | 'HEAVY' | 'SKILL' | 'LIB' | 'FORTE';
};

export const SkillCard = (s: SkillCardProps) => {
  return (
    <div className='flex flex-col w-full min-h-[282px] sm:min-h-0 bg-[#11191B] border border-[#2A3737] p-[24px] gap-[20px] justify-center items-start sm:justify-around'>
      <div className='flex flex-row w-full items-center gap-[12px]'>
        <img
          src={
            s.type == 'BASIC'
              ? BAtk
              : s.type == 'HEAVY'
                ? HAtk
                : s.type == 'SKILL'
                  ? Skill
                  : s.type == 'LIB'
                    ? Lib
                    : s.type == 'FORTE'
                      ? Forte
                      : undefined
          }
          alt='skill-icon'
          className='flex w-[44px] h-auto'
        />
        <p className='text-[18px] sm:text-[20px] text-(--theme-accent)'>
          {s.type == 'BASIC'
            ? 'Basic Attack'
            : s.type == 'HEAVY'
              ? 'Heavy Attack'
              : s.type == 'SKILL'
                ? 'Resonance Skill'
                : s.type == 'LIB'
                  ? 'Resonance Liberation'
                  : s.type == 'FORTE'
                    ? 'Forte'
                    : 'Undefined'}
        </p>
      </div>
      <p className='min-h-[128px] text-[14px] text-gray-400 text-left'>
        {s.type == 'BASIC'
          ? s.skill.basic
          : s.type == 'HEAVY'
            ? s.skill.heavy
            : s.type == 'SKILL'
              ? s.skill.skill
              : s.type == 'LIB'
                ? s.skill.lib
                : s.type == 'FORTE'
                  ? s.skill.forte
                  : 'Undefined'}
      </p>
      <div className='mt-auto flex w-full flex-col gap-[20px]'>
        <Line />
        <p className='text-[10px] text-gray-400 text-left leading-none'>
          {['Spectro', 'Aero', 'Electro'].includes(s.element) &&
          s.type == 'SKILL'
            ? 'Main source of damage.'
            : s.element == 'Havoc' && ['BASIC', 'LIB'].includes(s.type)
              ? 'One of the main sources of damage.'
              : 'I dunno what to write here.'}
        </p>
      </div>
    </div>
  );
};

import { type Label } from '../vidtypes';

type LabelButtonProps = {
  l: Label;
};

export const LabelButton = ({ l }: LabelButtonProps) => {
  return (
    <div
      className={`flex w-auto min-h-0 max-h-[24px] items-center p-[4px] text-[10px] 'bg-[#11191B]' ${l === 'Spectro' ? 'border-[#e4f28a] text-[#e4f28a]' : l === 'Havoc' ? 'border-[#ff75cf] text-[#ff75cf]' : l === 'Aero' ? 'border-[#85e8e1] text-[#85e8e1]' : l === 'Electro' ? 'border-[#9b79ff] text-[#9b79ff]' : 'border-[#585858] text-[#cacaca]'} border `}
    >
      {l}
    </div>
  );
};

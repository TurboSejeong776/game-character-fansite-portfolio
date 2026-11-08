import { Line } from './misc/line';
import type { Label } from './vidtypes';
import { LabelButton } from './misc/label';

type VideoProps = {
  title: string;
  thumb: string;
  label: Label[];
  description: string;
  date: string;
  user: string;
};

export const VideoCard = (v: VideoProps) => {
  return (
    <div className='flex flex-col w-full min-h-0'>
      <img src={v.thumb} alt='Thumbnail' className='w-full h-auto' />
      <div className='flex flex-col w-full gap-[12px] p-[20px]'>
        <div className='flex flex-row w-full gap-[10px]'>
          {v.label.map((label) => (
            <LabelButton key={label} l={label} />
          ))}
        </div>
        <p className='text-white text-[24px] text-left'>{v.title}</p>
        <p className='text-gray-400 text-[13px] text-left'>{v.description}</p>
        <p className='text-gray-400 text-[10px] text-left'>
          Contributed by {v.user}
        </p>
        <Line />
        <p className='text-(--theme-accent) text-[9px] text-left'>
          {new Date(v.date).toUTCString().replace('GMT', '')}
        </p>
      </div>
    </div>
  );
};

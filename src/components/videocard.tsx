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
    <div className='flex flex-col w-full min-h-0 h-full'>
      <img
        src={v.thumb}
        alt='Thumbnail'
        className='w-full aspect-video object-cover'
      />
      <div className='flex flex-col  flex-1 w-full gap-[12px] p-[20px]'>
        <div className='flex flex-row w-full gap-[10px]'>
          {v.label.map((label) => (
            <LabelButton key={label} l={label} />
          ))}
        </div>
        <p
          className='text-white text-[24px] text-left line-clamp-1'
          title={v.title}
        >
          {v.title}
        </p>
        <div className='flex flex-col w-full gap-[10px]'>
          <p className='text-gray-400 text-[13px] text-left min-h-[2lh] line-clamp-2'>
            {v.description}
          </p>
          <p className='text-gray-400 text-[10px] text-left'>
            Contributed by {v.user}
          </p>
        </div>
        <div className='flex flex-col w-full gap-[10px] mt-auto'>
          <Line />
          <p className='text-(--theme-accent) text-[9px] text-left'>
            {new Date(v.date).toUTCString().replace('GMT', '')}
          </p>
        </div>
      </div>
    </div>
  );
};

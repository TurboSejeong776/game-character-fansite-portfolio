import { Imgplhdr } from './misc/imgplhdr';
import { Line } from './misc/line';

type Eviprops = {
  no: number;
  title: string;
  description: string;
  src: string;
  img?: string;
};

export const EviCard = (evi: Eviprops) => {
  return (
    <section className='flex flex-col sm:flex-row w-full gap-[24px] p-[20px] bg-[#11191B] border border-[#2A3737] sm:justify-between'>
      {evi.img ? (
        <img
          src={evi.img}
          alt='evidenceImage'
          className='w-full max-w-[480px] h-auto flex sm:hidden'
        />
      ) : (
        <div className='w-full max-w-[480px] h-auto flex sm:hidden'>
          <Imgplhdr />
        </div>
      )}

      <div className='flex flex-row min-w-0 sm:flex-3 w-full h-full gap-[16px]'>
        <p className='text-[12px] text-(--theme-accent)'>{evi.no}</p>
        <div className='flex flex-col w-full gap-[12px]'>
          <div className='flex flex-col w-full min-h-[111px] gap-[12px]'>
            <p className='text-[22px] text-white text-left'>{evi.title}</p>
            <p className='text-[13px] text-gray-400 text-left'>
              {evi.description}
            </p>
          </div>

          <div className='flex flex-col w-full h-full mt-auto justify-center'>
            <Line />
            <p className='text-[9px] text-gray-400 text-left'>Source:</p>
            <p className='text-[11px] text-gray-400 text-left leading-0'>
              {evi.src}
            </p>
          </div>
        </div>
      </div>
      {evi.img ? (
        <img
          src={evi.img}
          alt='evidenceImage'
          className='min-w-0 w-full max-w-[480px] h-auto sm:flex sm:flex-1 hidden'
        />
      ) : (
        <div className='min-w-0 w-full max-w-[480px] h-auto sm:flex sm:flex-1 hidden'>
          <Imgplhdr />
        </div>
      )}
    </section>
  );
};

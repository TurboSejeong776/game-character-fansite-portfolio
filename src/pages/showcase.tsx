import { useState } from 'react';
import { VideoCard } from '../components/videocard';
import video from '../components/video.json';
import { type Label } from '../components/vidtypes';
import { Search } from 'lucide-react';

const ShowCase = () => {
  const [element, setElement] = useState<Label | 'All'>('All');
  const [openUP, setOpenUP] = useState(false);

  const [searchKey, setSearchKey] = useState('');
  const normalizeSearch = searchKey.trim().toLowerCase();
  const filteredSearch = video.filter((v) => {
    const match =
      v.title.toLowerCase().includes(normalizeSearch) ||
      v.label.some((lab) => lab.toLowerCase().includes(normalizeSearch));

    const elementMatch = element === 'All' || v.label.includes(element);

    return match && elementMatch;
  });
  return (
    <main className='flex flex-col w-full min-h-full bg-[#0d0d0d] sm:gap-[24px] sm:px-[64px] sm:py-[48px]'>
      <section
        id='showCaseMainBody'
        className='flex flex-col w-full gap-[20px] px-[20px] py-[36px]'
      >
        <p className='text-(--theme-accent) text-[11px] text-left'>
          // THE HALL OF FAME //
        </p>
        <p className='text-white text-[22px] sm:text-[48px] leading-none text-left'>
          Watch these showcases!
        </p>
        <p className='text-(--theme-accent) text-[13px] text-left'>
          Live proofs of the Arbiter's glories.
        </p>
        <section
          id='elementTabsSC'
          className='flex flex-row w-full sm:h-[44px] gap-[24px] px-[0px] sm:py-[0px] items-center bg-[#0d0d0d]'
        >
          <div className='flex flex-row w-full h-[34px] border border-[#2A3737] bg-[#171717] items-center px-[8px] py-[6px] gap-[12px]'>
            <Search />
            <input
              value={searchKey}
              onChange={(sear) => {
                setSearchKey(sear.target.value);
              }}
              placeholder='......'
              className='flex w-full  text-white'
            />
          </div>
          <div className='flex flex-row w-full gap-[8px]'>
            <button
              className={`cursor-pointer flex flex-col w-[25%] h-[34px] sm:min-h-full hover:shadow-[inset_0_-18px_36px_-14px_#ffffff] active:shadow-[inset_0_-18px_36px_-14px_#ffffff] justify-center border border-[#2A3737] transition-shadow duration-150 sm:duration-300 ${element === 'All' ? 'shadow-[inset_0_-18px_36px_-14px_#ffffff]' : ''}`}
              onClick={() => setElement('All')}
            >
              <p className='text-white text-[13px] text-center'>All</p>
            </button>
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
          </div>
        </section>
        <section
          id='renderThemVideoCardss'
          className={`relative grid grid-cols-2 sm:grid-cols-4 w-full gap-[12px] overflow-hidden ${openUP ? 'max-h-none sm:max-h-none' : 'max-h-[360px] sm:max-h-[720px]'}`}
        >
          {filteredSearch.map((video) => (
            <VideoCard
              key={video.title}
              {...video}
              label={video.label as Label[]}
            />
          ))}
          {!openUP && (
            <>
              <div
                id='OFFFade'
                className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0d0d0d]'
              />
              <button
                onClick={() => setOpenUP(true)}
                className='absolute bottom-3 sm:bottom-4 left-1/2 z-10 -translate-x-1/2 flex w-[128px] border border-[#2A3737] bg-[#11191B] hover:shadow-[0_0_12px_var(--theme-accent)] text-white text-[12px] items-center justify-center transition-shadow duration-300 rounded-[8px] cursor-pointer'
              >
                Show more
              </button>
            </>
          )}
        </section>
      </section>
    </main>
  );
};

export default ShowCase;

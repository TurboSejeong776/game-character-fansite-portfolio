import { useState } from 'react';
import { VideoCard } from '../components/videocard';
import video from '../components/video.json';
import { type Label } from '../components/vidtypes';
import { Search } from 'lucide-react';

const ShowCase = () => {
  const [element, setElement] = useState<Label | 'All'>('All');
  const [showAll, setShowAll] = useState(false);
  const filterColor = [
    { name: 'All', color: '#ffffff' },
    { name: 'Spectro', color: 'var(--color-spectro)' },
    { name: 'Havoc', color: 'var(--color-havoc)' },
    { name: 'Aero', color: 'var(--color-aero)' },
    { name: 'Electro', color: 'var(--color-electro)' },
  ] as const;
  const cardLimit = 4;

  const [searchKey, setSearchKey] = useState('');
  const normalizeSearch = searchKey.trim().toLowerCase();
  const filteredSearch = video.filter((v) => {
    const match =
      v.title.toLowerCase().includes(normalizeSearch) ||
      v.label.some((lab) => lab.toLowerCase().includes(normalizeSearch));

    const elementMatch = element === 'All' || v.label.includes(element);

    return match && elementMatch;
  });

  const visibleCard = showAll
    ? filteredSearch
    : filteredSearch.slice(0, cardLimit);
  const hasMore = !showAll && filteredSearch.length > cardLimit;

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
          className='flex sm:flex-row flex-col w-full sm:h-[44px] gap-[24px] px-[0px] sm:py-[0px] items-center bg-[#0d0d0d]'
        >
          <div className='flex flex-row w-full h-[34px] border border-[#2A3737] bg-[#171717] items-center px-[8px] py-[6px] gap-[12px]'>
            <Search />
            <input
              value={searchKey}
              onChange={(sear) => {
                setSearchKey(sear.target.value);
              }}
              placeholder='Enter keywords...'
              className='flex w-full  text-white'
            />
          </div>
          <div className='flex flex-row w-full gap-[8px]'>
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
          </div>
        </section>
        <section
          id='renderThemVideoCardss'
          className={`relative w-full gap-[12px]`}
        >
          {filteredSearch.length === 0 ? (
            <div className='flex w-full h-full items-center justify-center'>
              <p className='text-gray-400 text-[14px] text-center'>
                No result!
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-[12px] '>
              {visibleCard.map((video) => (
                <VideoCard
                  key={video.title}
                  {...video}
                  label={video.label as Label[]}
                />
              ))}
            </div>
          )}

          {hasMore && (
            <>
              <div
                id='OFFFade'
                className='pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-b from-transparent to-[#0d0d0d]'
              />
              <button
                onClick={() => setShowAll(true)}
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

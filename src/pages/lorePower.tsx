import { useState } from 'react';
import { CircleAlert, ArrowBigDownDash } from 'lucide-react';
import { Line } from '../components/misc/line';
import { EviCard } from '../components/evicard';

const LorePage = () => {
  const [openOFF, setOpenOFF] = useState(false);
  const [defOFF, setDefOFF] = useState(false);
  const [weakOFF, setWeakOFF] = useState(false);
  return (
    <main className='flex flex-col w-full min-h-full bg-[#0d0d0d] sm:gap-[24px] sm:px-[64px] sm:py-[48px]'>
      <section
        id='lorePageTop'
        className='flex flex-col w-full gap-[20px] px-[20px] py-[36px]'
      >
        <p className='text-(--theme-accent) text-[11px] text-left'>
          // LORE POWER //
        </p>
        <p className='text-white text-[22px] sm:text-[48px] leading-none text-left'>
          Read how strong the Arbiter is in the story!
        </p>
        <p className='text-gray-400 text-[13px] text-left'>
          Is Rover really that strong? Well... they are not someone you wanna
          fight directly, that's for sure. Scroll down to see why!
        </p>
        <p className='text-gray-400 text-[13px] text-left'>
          // Lorem Ipsum. Dunno what to write here. //
        </p>
      </section>
      <section
        id='spoilerWarning'
        className='flex flex-row w-full p-[20px] gap-[12px] bg-[#2a2a22] border border-[#2A3737] justify-center sm:items-center'
      >
        <CircleAlert className='flex w-[18px] h-[18px]' />
        <p className='text-gray-400 w-full text-[13px] text-left'>
          The following sections might spoil you the story of Wuthering Waves as
          it covers most of the feats shown by Rover in the game. Proceed at
          your own risk!
        </p>
      </section>
      <div
        id='lorePowerWeDivide'
        className='flex flex-col sm:flex-row w-full min-h-full sm:gap-[48px]'
      >
        <div
          id='lorePowerMainLayoutDiv01'
          className='flex flex-col w-full sm:flex-1 '
        >
          <section
            id='lorePowerTableContent'
            className='flex flex-col w-full gap-[24px] px-[20px] py-[32px]'
          >
            <div
              id='lorePowerTableContentListWrapper'
              className='flex flex-col w-full gap-[12px]'
            >
              <p className='text-gray-400 text-[10px] text-left'>
                TABLE OF CONTENT:
              </p>
              <div
                id='theActualTableofContents'
                className='flex flex-col w-full'
              >
                <button className='flex flex-row w-full h-[44px] justify-between items-center'>
                  <p className='text-white text-[13px] text-left'>
                    01 OFFENSIVE FEATS
                  </p>
                  <ArrowBigDownDash className='w-[16px] h-[19px] text-white' />
                </button>
                <Line />
                <button className='flex flex-row w-full h-[44px] justify-between items-center'>
                  <p className='text-white text-[13px] text-left'>
                    02 DEFENSIVE FEATS
                  </p>
                  <ArrowBigDownDash className='w-[16px] h-[19px] text-white' />
                </button>
                <Line />
                <button className='flex flex-row w-full h-[44px] justify-between items-center'>
                  <p className='text-white text-[13px] text-left'>
                    03 WEAKNESSES
                  </p>
                  <ArrowBigDownDash className='w-[16px] h-[19px] text-white' />
                </button>
                <Line />
              </div>
            </div>
          </section>
        </div>
        <div
          id='lorePowerMainLayoutDiv02'
          className='flex flex-col w-full sm:flex-4'
        >
          <section
            id='lorePowerOFFDEFWEAKWrapper'
            className='flex flex-col w-full gap-[48px] px-[20px] pb-[48px] sm:py-[36px]'
          >
            <div
              id='lorePowerOFFWrappah'
              className='flex flex-col w-full gap-[24px]'
            >
              <div
                id='lorePowerOFFTop'
                className='flex flex-col w-full gap-[12px]'
              >
                <p className='text-(--theme-accent) text-[11px] text-left'>
                  // OFFENSIVE FEAT //
                </p>
                <p className='text-white text-[22px] sm:text-[36px] leading-none text-left'>
                  These are Rover's offensive feats as seen in the story!
                </p>
              </div>
              <div
                id='lorePowerOFFCards'
                className={`relative flex flex-col w-full gap-[12px] overflow-hidden ${openOFF ? 'max-h-none sm:max-h-none' : 'max-h-[360px] sm:max-h-[480px]'}`}
              >
                <EviCard
                  no={0o1}
                  title='Boulder Splitting Strength'
                  description='Rover is capable of splitting a boulder by kicking it.'
                  src='Brant Companion Quest in v2.1'
                />
                <EviCard
                  no={0o2}
                  title="Blocked Fleurdelys' Three Sword Attack"
                  description='Rover blocked the Three Sword Attack from a disadvantageous position, all while the floor below them caved in on every hit.'
                  src='Main Quest in v2.2'
                />
                <EviCard
                  no={0o3}
                  title='Splitting a Large Body of Water'
                  description='Rover was able to split a large body of water around the size of a basketball court and stagnating them from merging back.'
                  src='Main Quest in v2.5'
                />
                <EviCard
                  no={0o4}
                  title='Cutting Open a Black Hole'
                  description='Rover cut open the Necrostar and stagnated them in order to save Shorekeeper.'
                  src='Main Quest in v1.3'
                />
                {!openOFF && (
                  <>
                    <div
                      id='OFFFade'
                      className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0d0d0d]'
                    />
                    <button
                      onClick={() => setOpenOFF(true)}
                      className='absolute bottom-3 sm:bottom-4 left-1/2 z-10 -translate-x-1/2 flex w-[128px] border border-[#2A3737] bg-[#11191B] hover:shadow-[0_0_12px_var(--theme-accent)] text-white text-[12px] items-center justify-center transition-shadow duration-300 rounded-[8px] cursor-pointer'
                    >
                      Show more
                    </button>
                  </>
                )}
              </div>
            </div>

            <div
              id='lorePowerDEFWrappah'
              className='flex flex-col w-full gap-[24px]'
            >
              <div
                id='lorePowerDEFTop'
                className='flex flex-col w-full gap-[12px]'
              >
                <p className='text-(--theme-accent) text-[11px] text-left'>
                  // DEFENSIVE FEAT //
                </p>
                <p className='text-white text-[22px] sm:text-[36px] leading-none text-left'>
                  These are Rover's defensive feats as seen in the story!
                </p>
              </div>
              <div
                id='lorePowerDEFCards'
                className={`relative flex flex-col w-full gap-[12px] overflow-hidden ${defOFF ? 'max-h-none sm:max-h-none' : 'max-h-[360px] sm:max-h-[480px]'}`}
              >
                <EviCard
                  no={0o1}
                  title='Brushed Off a Bike Tackle'
                  description='Upon arriving in Lahai Roi, Rover brushed off a bike tackle from Lynae.'
                  src='Main Quest in v3.0'
                />
                <EviCard
                  no={0o2}
                  title='Survived Orbital Re-enty'
                  description='Rover initially arrived unconscious, falling from the outer space into Sol-3 and survived.'
                  src='Main Quest in v3.1'
                />
                <EviCard
                  no={0o3}
                  title='Resisted the Crushing Force of a Black Hole'
                  description='Rover was not crushed or spaghettified by Necrostar, which is a black hole in the traditional sense and is one of two resonators to have this feat.'
                  src='Main Quest in v1.3'
                />
                <EviCard
                  no={0o4}
                  title='Unaffected by Fate'
                  description='Rover is immune to prediction and fate-related ability due to their status as the Unknowable Void.'
                  src='Main Quest in v1.3'
                />
                {!defOFF && (
                  <>
                    <div
                      id='defFade'
                      className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0d0d0d]'
                    />
                    <button
                      onClick={() => setDefOFF(true)}
                      className='absolute bottom-3 sm:bottom-4 left-1/2 z-10 -translate-x-1/2 flex w-[128px] border border-[#2A3737] bg-[#11191B] hover:shadow-[0_0_12px_var(--theme-accent)] text-white text-[12px] items-center justify-center transition-shadow duration-300 rounded-[8px] cursor-pointer'
                    >
                      Show more
                    </button>
                  </>
                )}
              </div>
            </div>

            <div
              id='lorePowerWeakWrappah'
              className='flex flex-col w-full gap-[24px]'
            >
              <div
                id='lorePowerWeakTop'
                className='flex flex-col w-full gap-[12px]'
              >
                <p className='text-(--theme-accent) text-[11px] text-left'>
                  // WEAKNESSES //
                </p>
                <p className='text-white text-[22px] sm:text-[36px] leading-none text-left'>
                  These are Rover's weaknesses as seen in the story!
                </p>
              </div>
              <div
                id='lorePowerWeakCards'
                className={`relative flex flex-col w-full gap-[12px] overflow-hidden ${weakOFF ? 'max-h-none sm:max-h-none' : 'max-h-[360px] sm:max-h-[480px]'}`}
              >
                <EviCard
                  no={0o1}
                  title='Requires Strong Emotion'
                  description="Most of Rover's amazing feats are due to the surge of strong emotion, usually anger. This is due to the same phenomenon of Overclocking, except Rover is nearly impossible to Overclock, therefore able to access the power without harming themselves. Once angered, Rover would pull off insane feats like the Black Hole Cutting one."
                  src='All of Wuthering Waves Quests'
                />
                <EviCard
                  no={0o2}
                  title='Writer Nerf'
                  description='Rover parallels Superman, both being powerful aliens who save the day, and very susceptible to the writer nerfing their ability or straight-up forgetting them in order to maintain tension in the story.'
                  src='All of Wuthering Waves Quests'
                />
                <EviCard
                  no={0o3}
                  title='Vulnerable to Psychological Attack'
                  description='Rover has been shown to be susceptible to psychological attack, to the point of almost taking their own life. Throughout Lahai Roi arc, Rover was also significantly less combat-ready due to the grief caused by what transpired in the region.'
                  src='Main Quest v2.7 and v3.1 ~ v3.3'
                />
                {!weakOFF && (
                  <>
                    <div
                      id='WeakFade'
                      className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0d0d0d]'
                    />
                    <button
                      onClick={() => setWeakOFF(true)}
                      className='absolute bottom-3 sm:bottom-4 left-1/2 z-10 -translate-x-1/2 flex w-[128px] border border-[#2A3737] bg-[#11191B] hover:shadow-[0_0_12px_var(--theme-accent)] text-white text-[12px] items-center justify-center transition-shadow duration-300 rounded-[8px] cursor-pointer'
                    >
                      Show more
                    </button>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LorePage;

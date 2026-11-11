import { useNavigate } from 'react-router';
import { PageNameChange } from '../components/page-name-change';

import { Line } from '../components/misc/line';
import { SPLabel } from '../components/splabel';
import PIC01 from '../assets/RoverPict01.png';

import { ElementCard } from '../components/elementcard';
import { ReasonCard } from '../components/reasoncard';

const LandPage = () => {
  const navigate = useNavigate();
  PageNameChange('Homepage | Rover Fansite');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <main className='flex flex-col w-full h-full bg-[#0d0d0d] gap-[48px] sm:gap-[64px]'>
      <section
        id='HERO'
        className='flex flex-col w-full min-h-[688px] h-full px-[24px] py-[12px] sm:px-[64px] sm:py-[45px] gap-[16px] sm:gap-[24px] items-center justify-evenly bg-cover bg-no-repeat bg-position-[center_calc(50%_-_40px)] sm:bg-position-[_calc(50%_+_160px)_center] bg-[url(/Landing2.png)] sm:bg-[url(/Landing1.png)] border-b border-gray-400'
      >
        <div
          id='topHeadTextDESK'
          className='flex flex-col sm:flex-row w-full min-h-[17px] justify-between items-start sm:items-center'
        >
          <p className='text-white text-[8px] sm:text-[11px]'>
            // RESONATOR 001 : ROVER //
          </p>
          <p className='text-white text-[8px] sm:text-[11px] leading-none'>
            // ARCHIVE STATUS : ONGOING //
          </p>
        </div>
        <div id='splitter1' className='flex sm:hidden h-[20px]' />
        <div
          id='midHeadTextDESK'
          className='flex flex-col w-full min-h-[388px] h-fit gap-[12px] items-start sm:items-baseline justify-between'
        >
          <p className='text-white text-[9px] sm:text-[13px] text-left sm:text-center'>
            SAVING LIGHT / LORD ARBITER / ASTRAL MODULATOR
          </p>

          <div id='splitter2' className='flex sm:hidden h-[400px]' />

          <p className='text-white text-[80px] sm:text-[148px] leading-none text-left'>
            ROVER
          </p>

          <p className='text-white text-[22px] sm:text-[31px] text-left sm:text-center'>
            SAVIOR FROM ANOTHER WORLD
          </p>

          <div className='flex flex-col w-full text-[11px] items-start justify-around'>
            <p>先は長い。急ごう。</p>
            <p>갈 길이 아직 멀었으니 걸음을 멈추지 마세요.</p>
            <p>路途还很遥远，继续前进吧。</p>
            <p>We still have a long journey ahead of us. Let's press on.</p>
          </div>

          <div className='flex flex-col sm:flex-row w-full min-h-[48px] gap-[12px] items-center text-[13px]'>
            <button
              className='cursor-pointer flex flex-col min-w-[219px] w-full sm:w-fit min-h-[48px] h-full bg-(--theme-accent) text-black justify-center items-center hover:shadow-[0_0_12px_var(--theme-accent)] transition-shadow duration-300'
              onClick={() => scrollToSection('landPageBriefing')}
            >
              Who is Rover?
            </button>
            <button
              className='cursor-pointer flex flex-col min-w-[219px] w-full sm:w-fit min-h-[48px] h-full bg-white text-black justify-center items-center hover:shadow-[0_0_12px_#FFFFFF] transition-shadow duration-300'
              onClick={() => {
                navigate('/showcase');
              }}
            >
              Watch Showcase
            </button>
          </div>
        </div>
        <div
          id='bottomHeadTextFooter'
          className='flex flex-col sm:flex-row w-full justify-center sm:justify-between items-start sm:items-center'
        >
          <p className='text-white text-[11px] sm:w-full sm:text-left'>
            // LORE × GAMEPLAY × GLORY //
          </p>
          <div className='flex flex-col w-full justify-center items-start sm:items-end sm:justify-around'>
            <p className='text-white text-[11px]'>
              // SUBJECT / ROVER · 漂泊者 //
            </p>
            <p className='text-white text-[11px]'>
              // CHIEF STEWARD OF BLACK SHORES //
            </p>
          </div>
        </div>

        <div
          id='bottomHeadTextFooterEXTRA'
          className='grid grid-cols-2 sm:grid-cols-4 w-full h-fit gap-[24px]'
        >
          <div className='flex flex-col w-full gap-[4px] text-left'>
            <p className='text-gray-400 text-[10px] w-full border-b-[1px] border-gray-400'>
              IDENTITY
            </p>
            <p className='text-white text-[14px]'>ROVER</p>
          </div>
          <div className='flex flex-col w-full gap-[4px] text-left'>
            <p className='text-gray-400 text-[10px] w-full border-b-[1px] border-gray-400'>
              WEAPON
            </p>
            <p className='text-white text-[14px]'>SWORD</p>
          </div>
          <div className='flex flex-col w-full gap-[4px] text-left'>
            <p className='text-gray-400 text-[10px] w-full border-b-[1px] border-gray-400'>
              ELEMENT
            </p>
            <p className='text-white text-[14px]'>MULTIPLE</p>
          </div>
          <div className='flex flex-col w-full gap-[4px] text-left'>
            <p className='text-gray-400 text-[10px] w-full border-b-[1px] border-gray-400'>
              AVAILABILITY
            </p>
            <p className='text-white text-[14px]'>DEFAULT CHARACTER</p>
          </div>
        </div>
      </section>

      <section
        id='landPageBriefing'
        className='flex flex-col sm:flex-row w-full  h-fit gap-[48px] sm:gap-[64px] px-[20px] py-[48px] sm:px-[64px] bg-[#0d0d0d]'
      >
        <div
          id='landPageBriefingInnerWrapper'
          className='flex flex-col w-full h-full gap-[24px] sm:flex-3 sm:min-w-0'
        >
          <div
            id='landPageBriefingInnerWrapperTop'
            className='flex flex-col w-full h-full gap-[12px] items-start'
          >
            <p className='text-(--theme-accent) text-[11px]'>
              // WHO IS ROVER? //
            </p>
            <p className='text-white text-[22px] sm:text-[48px] text-left leading-none'>
              A Wandering Swordsman, a Father, and the Founder of Black Shores.
            </p>
          </div>
          <p className='text-gray-400 text-[15px] text-left'>
            The main character of Wuthering Waves.
          </p>
          <p className='text-gray-400 text-[15px] text-left'>
            Rover awakens without their memories in a world shaped by the
            Lament. Their unusual ability to absorb Tacet Discords makes them
            far more than an ordinary traveler.
          </p>
          <p className='text-gray-400 text-[15px] text-left'>
            From Jinzhou to Blackshores, to Rinascita, Lahai-Roi and beyond,
            Rover's journey is one of self-discovery, struggle, and the pursuit
            of a greater purpose. As they traverse these lands, they encounter
            allies and adversaries alike, both from the past and the present,
            each shaping their path and revealing fragments of their past.
          </p>
          <div
            id='landPageBriefingInnerWrapperBottom'
            className='flex flex-col w-full h-fit gap-[10px]'
          >
            <SPLabel text={'LORE POWER'} />
            <p className='text-gray-400 text-[13px] text-left'>
              Learn about Rover's power in the lore.
            </p>
          </div>
          <button
            className='text-(--theme-accent) text-[13px] text-left underline cursor-pointer'
            onClick={() => {
              navigate('/lore');
            }}
          >
            Click here to go check their in-lore abilities ↗
          </button>
          <img
            src={PIC01}
            alt='RoverPict01'
            className='flex w-full h-auto sm:hidden'
          />
        </div>
        <img
          src={PIC01}
          alt='RoverPict01Desk'
          className='hidden w-full object-contain sm:flex sm:w-0 sm:flex-4 sm:min-w-0'
        />
      </section>

      <section
        id='landPageElement'
        className='flex flex-col w-full h-fit gap-[48px] sm:gap-[64px] px-[20px] py-[48px] sm:px-[64px] bg-[#0d0d0d]'
      >
        <div
          id='landPageElementInnerWrapper'
          className='flex flex-col w-full h-full gap-[24px] sm:gap-[28px]'
        >
          <div
            id='landPageElementInnerWrapperTop'
            className='flex flex-col w-full h-fit gap-[12px] items-start'
          >
            <p className='text-(--theme-accent) text-[11px]'>
              // THE ELEMENTS //
            </p>
            <p className='text-white text-[22px] sm:text-[48px] leading-none text-left'>
              Different Elements, Different Capabilities.
            </p>
          </div>

          <button
            className='text-(--theme-accent) text-[13px] text-left underline cursor-pointer'
            onClick={() => {
              navigate('/gameplay');
            }}
          >
            Check their full kit ↗
          </button>

          <div
            id='elementListLandPage'
            className='flex flex-col sm:flex-row w-full h-full sm:max-h-[325px] gap-[16px]'
          >
            <ElementCard
              listing='01 / SPECTRO'
              name='SPECTRO'
              brief='The King of All Trade'
              description="Rover's first element. Fast, snappy, self-sufficient. Can solo a lot of holograms. Has Stinger as their Dodge Counter."
              punch='Perfect for solo run.'
            />
            <ElementCard
              listing='02 / HAVOC'
              name='HAVOC'
              brief='Mass Destruction'
              description="Rover's second element. Has the highest damage output in a team setup. Relies on performing multiple Intros to maintain power."
              punch='When you need more power.'
            />
            <ElementCard
              listing='03 / AERO'
              name='AERO'
              brief='This Exist'
              description="Rover's third element. Nothing much to say other than being able to let you survive the harshest Virtual Crisis due to its healing ability."
              punch="Nobody's pick."
            />
            <ElementCard
              listing='04 / ELECTRO'
              name='ELECTRO'
              brief='Smoking Sexy Style'
              description="Rover's fourth element. Able to access an Install that utilizes movesets from other element. Can block attacks."
              punch='When Spectro is not an option.'
            />
          </div>
          <p className='text-[10px] text-gray-400 text-left'>
            // More elements to come in the future. //
          </p>
        </div>
      </section>

      <section
        id='landPageWhy'
        className='flex flex-col w-full h-fit gap-[48px] sm:gap-[64px] px-[20px] py-[48px] sm:px-[64px] bg-[#0d0d0d]'
      >
        <div
          id='landPageWhyInnerWrapper'
          className='flex flex-col w-full gap-[28px] sm:gap-[48px]'
        >
          <div
            id='landPageWhgyInnerWrapperTop'
            className='flex flex-col w-full h-fit gap-[12px] items-start'
          >
            <p className='text-(--theme-accent) text-[11px]'>
              // WHY ROVER? //
            </p>
            <p className='text-white text-[22px] sm:text-[48px] leading-none text-left'>
              Your Stand-in, Your Main Character, Your Best Choice.
            </p>
          </div>
          <div className='hidden sm:flex'>
            <Line />
          </div>
          <div
            id='reasonCards'
            className='flex flex-col sm:flex-row w-full gap-[28px]'
          >
            <ReasonCard
              no={0o1}
              head='Availability'
              description='Rover is available from the start for absolutely free, with his other forms being obtained by progressing through the story. He is also content with only the 5-star standard sword.'
            />
            <ReasonCard
              no={0o2}
              head='Fairness'
              description="Rover is nowhere near what could be considered 'gamebreaking'. By playing Rover, you are opening yourself to what the game offers without downplaying any of the mechanics or the enemies."
            />
            <ReasonCard
              no={0o3}
              head='Immersion'
              description='Canonically, Rover is the only character you control in the game. Maining Rover essentially means you are maximizing immersion by using the intended character lore-wise.'
            />
          </div>
        </div>
      </section>

      <section
        id='landPageCanYou'
        className='flex flex-col w-full p-[24px] gap-[20px] '
      >
        <div
          id='landPageCanUInnerWrapper'
          className='flex flex-col sm:flex-row w-full h-full gap-[24px] p-[24px] sm:p-[36px] sm:gap-[28px] bg-[#2a2a22] border border-[#2A3737] items-center justify-between'
        >
          <div
            id='landPageCanUInnerTextWrapper'
            className='flex flex-col w-full h-full gap-[24px] sm:gap-[28px]'
          >
            <p className='text-(--theme-accent) text-[11px] text-left'>
              // TIME FOR SOME SHOWCASE //
            </p>
            <p className='text-white text-[22px] sm:text-[48px] leading-none text-left'>
              This is where the fun begins!
            </p>
            <p className='text-gray-400 text-[13px] text-left'>
              Watch how Rover obliterates challenging content in the game!
            </p>
          </div>

          <button
            className='cursor-pointer flex flex-row w-full sm:w-[480px] h-[48px] bg-(--theme-accent) text-black text-[13px] justify-between items-center text-left p-[16px] hover:shadow-[0_0_12px_var(--theme-accent)] transition-shadow duration-300'
            onClick={() => {
              navigate('/showcase');
            }}
          >
            <p>Check out the Hall of Fame!</p> <p>↗</p>
          </button>
        </div>
      </section>
      <Line />
    </main>
  );
};

export default LandPage;

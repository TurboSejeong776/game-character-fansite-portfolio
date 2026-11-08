import Spectro from '../assets/Spectro.png';
import Havoc from '../assets/Havoc.png';
import Aero from '../assets/Aero.png';
import Electro from '../assets/ELECTRO.png';

type ECProps = {
  listing: string;
  name: 'SPECTRO' | 'HAVOC' | 'AERO' | 'ELECTRO';
  brief: string;
  description: string;
  punch: string;
};

export const ElementCard = (card: ECProps) => {
  return (
    <div
      className={`flex flex-col w-full h-full min-h-[282px] sm:min-h-[325px] bg-[#11191B] border border-[#2A3737] p-[24px] gap-[20px] justify-center items-start sm:justify-between ${card.name === 'SPECTRO' ? 'hover:shadow-[0_0_16px_#e4f28a]' : card.name === 'HAVOC' ? 'hover:shadow-[0_0_16px_#ff75cf]' : card.name === 'AERO' ? 'hover:shadow-[0_0_16px_#85e8e1]' : card.name === 'ELECTRO' ? 'hover:shadow-[0_0_16px_#9b79ff]' : 'shadow-none'} transition-shadow duration-300`}
    >
      <div className='flex flex-row w-full justify-between'>
        <p className='text-[10px] text-gray-400'>{card.listing}</p>
        <img
          src={
            card.name === 'SPECTRO'
              ? Spectro
              : card.name === 'HAVOC'
                ? Havoc
                : card.name === 'AERO'
                  ? Aero
                  : card.name === 'ELECTRO'
                    ? Electro
                    : Spectro
          }
          alt='iconHere!'
          className='w-[18px] h-[18px]'
        />
      </div>
      {card.name === 'SPECTRO' ? (
        <p className='text-[30px] sm:text-[32px] text-[#e4f28a]'>SPECTRO</p>
      ) : card.name === 'HAVOC' ? (
        <p className='text-[30px] sm:text-[32px] text-[#ff75cf]'>HAVOC</p>
      ) : card.name === 'AERO' ? (
        <p className='text-[30px] sm:text-[32px] text-[#85e8e1]'>AERO</p>
      ) : card.name === 'ELECTRO' ? (
        <p className='text-[30px] sm:text-[32px] text-[#9b79ff]'>ELECTRO</p>
      ) : (
        <p className='text-[30px] sm:text-[32px] text-white'>NULL</p>
      )}
      <p className='text-[14px] text-white'>{card.brief}</p>
      <p className='text-[12px] text-gray-400 text-left min-h-[72px] line-clamp-3'>
        {card.description}
      </p>
      <p className='text-[10px] text-gray-400'>// {card.punch} //</p>
    </div>
  );
};

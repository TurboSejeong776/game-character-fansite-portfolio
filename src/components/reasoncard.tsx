type ReasonProp = {
  no: number;
  head: string;
  description: string;
};

export const ReasonCard = (rc: ReasonProp) => {
  return (
    <div className='flex flex-row w-full min-h-[128px] gap-[16px]'>
      <p className='text-[12px] text-(--theme-accent)'>{rc.no}</p>
      <div className='flex flex-col w-full min-h-[111px] gap-[12px]'>
        <p className='text-[22px] text-white text-left'>{rc.head}</p>
        <p className='text-[13px] text-gray-400 text-left'>{rc.description}</p>
      </div>
    </div>
  );
};

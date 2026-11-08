type SPLabelProps = {
  text: string;
};

export const SPLabel = ({ text }: SPLabelProps) => {
  return (
    <div className='flex flex-col w-fit h-fit px-[8px] py-[6px] bg-[#11191B] border border-[#2A3737] text-(--theme-accent) text-[10px] items-center justify-center'>
      {text}
    </div>
  );
};

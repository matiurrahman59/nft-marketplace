import { FC } from "react";

interface NftDataProps {
  title: string;
  quanTity: number;
}

const NftData: FC<NftDataProps> = ({ title, quanTity }) => {
  return (
    <div className="flex flex-col">
      <span className="font-spaceMono text-[22px] font-bold leading-[35px] lg:text-[28px] lg:leading-10">
        {quanTity}k+
      </span>
      <span className="lg:text-2xl lg:leading-9">{title}</span>
    </div>
  );
};

export default NftData;

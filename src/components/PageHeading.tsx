import { FC } from "react";

interface PageHeadingProps {
  text: string;
  subText: string;
}

const PageHeading: FC<PageHeadingProps> = ({ text, subText }) => {
  return (
    <div className="my-[30px] space-y-[10px]">
      <h2>{text}</h2>
      <p>{subText}</p>
    </div>
  );
};

export default PageHeading;

import { FC } from "react";

interface TabButtonProps {
  tab: number;
  selectedTab: number;
  onClick: (tab: number) => void;
  label: string;
  count: number;
}

const TabButton: FC<TabButtonProps> = ({
  tab,
  selectedTab,
  onClick,
  label,
  count,
}) => {
  return (
    <button
      onClick={() => onClick(tab)}
      className={`py-5 ${
        selectedTab === tab && "border-b-2 border-label text-white"
      }`}
    >
      {label}
      <span
        className={`ml-4 hidden rounded-5 bg-secondary px-[10px] py-[5px] font-spaceMono text-xs sm:inline-block ${
          selectedTab === tab && "bg-label"
        }`}
      >
        {count}
      </span>
    </button>
  );
};

export default TabButton;

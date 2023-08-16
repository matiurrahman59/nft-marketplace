import { FC, ReactNode } from "react";

interface SectionHeaderProps {
  headerTitle: string;
  text?: string;
  children?: ReactNode;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  headerTitle,
  text,
  children,
}) => {
  return (
    <div className="flex items-end justify-between">
      {/* Header Title */}
      <div>
        <h3 className="text-[28px] font-semibold capitalize leading-10 lg:text-[38px] lg:leading-[45.6px]">
          {headerTitle}
        </h3>
        <p className="pt-[10px] capitalize lg:text-[22px] lg:leading-[35.2px]">
          {text}
        </p>
      </div>

      {/* Btn */}
      {children}
    </div>
  );
};

export default SectionHeader;

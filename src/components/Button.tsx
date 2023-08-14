import Link from "next/link";
import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  label: string;
  href: string;
  style?: string;
}

const Button: FC<ButtonProps> = ({ children, label, href, style }) => {
  const className = `scale-animation flex items-center justify-center gap-3 rounded-5 py-3.5 font-semibold lg:px-[50px] lg:py-5 ${style}`;
  return (
    <div>
      <Link href={href} className={className}>
        {children}
        {label}
      </Link>
    </div>
  );
};

export default Button;

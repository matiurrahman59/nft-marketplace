import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";

import Logo from "./Logo";

const navLink = [
  { href: "#", title: "Marketplace" },
  { href: "#", title: "Rankings" },
  { href: "#", title: "Connect a wallet" },
];

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-7 py-4 lg:py-5">
      <Link href="/">
        <Logo />
      </Link>

      <button className="lg:hidden">
        <CgMenuLeft className="h-6 w-6 text-white" />
      </button>

      <div className="hidden items-center space-x-[10px] font-semibold lg:flex">
        {navLink.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="scale-animation px-5"
          >
            {item.title}
          </Link>
        ))}

        <Link
          href="#"
          className="scale-animation flex items-center gap-3 rounded-5 bg-primary px-8 py-4 text-white"
        >
          <AiOutlineUser size={20} />
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

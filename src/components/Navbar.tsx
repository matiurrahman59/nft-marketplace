import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";

import Logo from "./Logo";
import Button from "./Button";

const navLink = [
  { href: "/marketplace", title: "Marketplace" },
  { href: "top-creator", title: "Rankings" },
  { href: "#", title: "Connect a wallet" },
];

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-7 py-3 lg:py-4">
      <Link href="/">
        <Logo />
      </Link>

      <button className="lg:hidden">
        <CgMenuLeft className="h-5 w-5 text-white" />
      </button>

      <div className="hidden items-center space-x-[10px] font-semibold lg:flex">
        {navLink.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="scale-animation px-5 text-sm"
          >
            {item.title}
          </Link>
        ))}
        <Button label="Sign Up" href="#" style="bg-primary lg:py-3 lg:px-4">
          <AiOutlineUser size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

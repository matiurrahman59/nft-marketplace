import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";

import Logo from "./Logo";
import Button from "./Button";

const navLink = [
  { href: "#", title: "Marketplace" },
  { href: "top-creator", title: "Rankings" },
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
        <Button label="Sign Up" href="#" style="bg-primary">
          <AiOutlineUser size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

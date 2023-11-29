"use client";

import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import Logo from "./Logo";
import Button from "./Button";
import { NAV_Links } from "@/utils/constants";

const navLink = [
  { href: NAV_Links.marketPlace, title: "Marketplace" },
  { href: NAV_Links.topCreator, title: "Rankings" },
  { href: NAV_Links.wallet, title: "Connect wallet" },
  { href: NAV_Links.signUp, title: "Sign Up" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className="flexBetween relative px-7 py-3 lg:py-4">
      <Link href={NAV_Links.home}>
        <Logo />
      </Link>

      {/* menu button */}
      <button onClick={() => setMenuOpen(true)} className="lg:hidden">
        <CgMenuLeft className="h-5 w-5 text-white" />
      </button>

      {/* mobile menu container */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-50 h-screen w-full justify-end bg-dark/50 backdrop-blur-sm ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <div className="w-1/2 bg-dark pl-3 pt-5 sm:w-1/3">
          {/* menu close button */}
          <button onClick={() => setMenuOpen(false)} className="px-2 py-2">
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* mobile navbar */}
          <div className="w-full">
            <nav className="py-6">
              <ul className="space-y-2">
                {navLink.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="scale-animation w-full text-sm"
                    >
                      <div className="w-full py-3 text-center">
                        {item.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="hidden items-center space-x-[10px] font-semibold lg:flex">
        {navLink.slice(0, 3).map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="scale-animation px-5"
          >
            {item.title}
          </Link>
        ))}
        <Button
          label="Sign Up"
          href={NAV_Links.signUp}
          style="bg-primary lg:py-3 lg:px-4"
        >
          <AiOutlineUser size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

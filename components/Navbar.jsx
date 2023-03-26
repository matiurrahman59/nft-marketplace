import Link from 'next/link';
import React from 'react';
import { BiMenuAltLeft, BiStoreAlt, BiUser } from 'react-icons/bi';

//////////////////////////////////////////////////////////////
// Internal Imports
import { TextButton } from '.';

const Navbar = () => {
  return (
    <header className='main-container flex items-center justify-between px-[30px] py-5 font-semibold leading-[22.4px] text-white md:px-[50px] '>
      {/* Logo */}
      <div className='flex items-center gap-[9px]'>
        <BiStoreAlt className='text-primaryColor' />
        <span className='font-spaceMono'>NFT Marketplace</span>
      </div>
      <BiMenuAltLeft className='h-6 w-6 lg:hidden' />

      {/* Main Nav */}
      <div className='hidden items-center gap-[10px] font-sans lg:flex '>
        <nav>
          <ul className='flex items-center space-x-4  '>
            <li>
              <Link href='/' className='py-3 px-5'>
                Marketplace
              </Link>
            </li>
            <li>
              <Link href='/' className='py-3 px-5'>
                Rankings
              </Link>
            </li>
            <li>
              <Link href='/' className='py-3 px-5'>
                Connect a wallet
              </Link>
            </li>
          </ul>
        </nav>
        <TextButton
          label='Sign Up'
          containerSTyle=' rounded-[20px] bg-primaryColor'
          prependChild={<BiUser className='h-5 w-5' />}
          labelStyle='px-[30px] py-5'
        />
      </div>
    </header>
  );
};

export default Navbar;

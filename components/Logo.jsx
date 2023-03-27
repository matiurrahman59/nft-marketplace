import React from 'react';
import { BiStoreAlt } from 'react-icons/bi';

const Logo = ({ labelStyle }) => {
  return (
    <div className={`flex items-center gap-[9px] font-spaceMono ${labelStyle}`}>
      <BiStoreAlt className='text-primaryColor' />
      <span>NFT Marketplace</span>
    </div>
  );
};

export default Logo;

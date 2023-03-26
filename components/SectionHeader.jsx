import React from 'react';

//////////////////////////////////////////////////////////////
// Internal Imports

const SectionHeader = ({ headerTitle, text, appendChild }) => {
  return (
    <div className='flex items-end justify-between pb-10 lg:pb-[60px]'>
      {/* Header Title */}
      <div>
        <h3>{headerTitle}</h3>
        <p className='pt-[10px] capitalize lg:text-[22px]'>{text}</p>
      </div>

      {/* Btn */}
      {appendChild}
    </div>
  );
};

export default SectionHeader;

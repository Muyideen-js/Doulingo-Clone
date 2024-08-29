"use client";
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileSideBar from './mobileSideBar';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='lg:hidden px-6 h-[50px] flex items-center bg-yellow-500 border-b fixed top-0 z-50 w-full'>
      <button onClick={toggleSidebar} className="text-white">
        <FaBars size={24} />
      </button>
      <MobileSideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default MobileHeader;

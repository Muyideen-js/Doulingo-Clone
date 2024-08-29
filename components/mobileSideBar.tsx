import React from 'react';
import { FaTimes } from 'react-icons/fa'; // For the close icon
import SideBar from './sidebar';

const MobileSideBar = ({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) => {
  return (
    <>
      {/* Black Gradient Overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-black to-transparent z-30 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'}`}
        onClick={toggleSidebar} 
      />

      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes size={24} color='green' />
          </button>
        </div>
        <div className="p-4 h-full w-full ">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default MobileSideBar;

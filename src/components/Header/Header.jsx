import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import searchIcon from '../../assets/search.png'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md w-full">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo / Title */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          Travel Advisor
        </h1>

        {/* Right Side Container */}
        <div className="flex items-center space-x-4">
          <h2 className="hidden sm:block text-lg font-medium">
            Explore New Places
          </h2>

          {/* <Autocomplete> */}
            <div className="relative bg-blue-500 hover:bg-blue-400 rounded-md flex items-center px-2 py-1 transition-colors">
              {/* Native SVG Search Icon */}
              <div className="text-blue-100 pl-1">
                <img src={searchIcon} alt="Search Icon" className='w-4 h-4 object-contain invert' />
              </div>
              
              {/* Search Input */}
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-white placeholder-blue-200 ml-2 w-32 sm:w-48 transition-all focus:ring-0"
              />
            </div>
          {/* </Autocomplete> */}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="bg-[#C51212] flex items-start py-6 px-3 md:px-15 w-full">
      <div className=" w-1/3">
        <img src={logo} alt="Chef Travis Pena Logo" className=" w-16 h-16 md:w-36 md:h-36" />
      </div>


      <div className='hidden border md:flex justify-around items-center gap-3 text-black text-xl font-sans font-semibold py-2 px-2 w-1/3' >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className='hidden w-1/3 md:flex justify-end'>
        <button className="bg-[#351814] text-white px-4 py-3">Request Service</button>
      </div>
    </header>
  );
};

export default Header;
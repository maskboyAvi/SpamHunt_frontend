import { useState } from 'react';

import companyLogo from '../images/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container mx-auto p-6 px-24'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <a href='/'>
          <img  src={companyLogo} alt='Logo' className='h-10 rounded-lg' />
          </a>
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <a href='/' className='hover:text-orange-500'>
            About Us
          </a>
          <a href='https://github.com/maskboyAvi' target='__blank' className='hover:text-orange-500'>
            Github
          </a>
          <a href='https://maskboyavi.github.io/portfolio/' target='__blank' className='hover:text-orange-500'>
            Portfolio
          </a>
          <a href='/' className='hover:text-orange-500'>
            Contact Us
          </a>
        </div>
        {/* Button */}
        <a
          href='/'
          className='hidden p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline hover:bg-orange-500 md:block'
        >
          Get Started
        </a>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <a href='/'>About Us</a>
          <a href='https://github.com/maskboyAvi' target='__blank'>Github</a>
          <a href='https://maskboyavi.github.io/portfolio/' target='__blank'>Portfolio</a>
          <a href='/'>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

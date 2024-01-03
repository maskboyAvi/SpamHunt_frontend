import { Link } from 'react-router-dom';

import HeroImg from '../images/hero_main.svg';

const Hero = () => {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-12 xl:px-24 mx-auto mt-24 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-16 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
          Welcome to SpamHunt!
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
          SpamHunt is your go-to solution for detecting spam in both emails
            and SMS. Our advanced algorithms ensure accurate and efficient
            spam detection.
          </p>
          <div className='flex justify-center md:justify-start'>
          <Link
              to="/sms"
              className="p-3 px-6 pt-2 mr-3 text-white bg-red-600 rounded-full baseline hover:bg-red-500"
            >
              SMS Hunter
            </Link>
            <Link
              to='/email'
              className='p-3 px-6 pt-2 text-white bg-cyan-600 rounded-full baseline hover:bg-cyan-500'
            >
              Email Hunter
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={HeroImg} alt='Hero Img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";
// import spamImage from "../images/hero1.jpg"// Import your image or use an SVG
// import { Link } from "react-router-dom";

// function HeroSection() {
//   return (
//     <section className="bg-gray-900 text-white py-12">
//       <div className="container px-20 mx-auto flex flex-col lg:flex-row items-center">
//         <div className="w-full lg:w-1/2 pr-8 mb-8 lg:mb-0">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to SpamHunt!</h1>
//           <p className="text-lg">
//             SpamHunt is your go-to solution for detecting spam in both emails
//             and SMS. Our advanced algorithms ensure accurate and efficient
//             spam detection.
//           </p>
//           <div className="flex mt-6 space-x-4">
//             <Link to="/sms">
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//                 SMS Spam Checker
//               </button>
//             </Link>
//             <Link to="/email">
//               <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
//                 Email Spam Checker
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2">
//           <img
//             src={spamImage}
//             alt="Spam Image"
//             className="w-full max-w-md mx-auto lg:max-w-full"
//             style={{maxWidth:"400px", height: "auto" }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

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

import companyLogoWhite from '../images/logo.png';
import linkedinlogo from '../images/icon-linkedin.svg';
import githubLogo from '../images/icon-github.svg';
import gmailLogo from '../images/icon-gmail.svg';
import instagramLogo from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='bg-slate-800 px-14'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* Logo and social links container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright © 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <a href='/SpamHunt_frontend/'>
            <img src={companyLogoWhite} className='h-12 rounded-lg' alt='' />
            </a>
          </div>
          {/* Social Links Container */}
          <div className='flex justify-center space-x-4'>
            {/* Link 1 */}
            <a href='https://www.linkedin.com/in/aviral-katiyar-7b2209253/' target='__blank'>
              <img src={linkedinlogo} className='h-8 bg-white rounded-md' alt='' />
            </a>
            {/* Link 2 */}
            <a href='mailto:aviralofficial1729@gmail.com?subject=SendMail&body=Description' target='__blank'>
              <img src={gmailLogo} className='h-8 bg-white rounded-md' alt='' />
            </a>
            {/* Link 3 */}
            <a href='https://github.com/maskboyAvi' target='__blank'>
              <img src={githubLogo} className='h-8 bg-white rounded-md' alt='' />
            </a>
            
            {/* Link 4 */}
            <a href='https://www.instagram.com/maskboy_avi/' target='__blank'>
              <img src={instagramLogo} className='h-8' alt='' />
            </a>
          </div>
        </div>
        {/* List Container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <a href='/SpamHunt_frontend/' className='hover:text-orange-400'>
              About Us
            </a>
            <a href='https://github.com/maskboyAvi' target='__blank' className='hover:text-orange-400'>
              Guthub
            </a>
            <a href='https://maskboyavi.github.io/portfolio/' target='__blank' className='hover:text-orange-400'>
              Portfolio
            </a>
            <a href='/SpamHunt_frontend/' className='hover:text-orange-400'>
              Contact Us
            </a>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <a href='/SpamHunt_frontend/' className='hover:text-orange-400'>
              Careers
            </a>
            <a href='/SpamHunt_frontend/' className='hover:text-orange-400'>
              Community
            </a>
            <a href='/SpamHunt_frontend/' className='hover:text-orange-400'>
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Input Container */}
        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Share your Thoughts...'
              />
              <button type='submit' className='px-6 py-2 text-white rounded-full bg-orange-600 hover:bg-orange-500 focus:outline-none'>
                Go
              </button>
            </div>
          </form>
          <div className='hidden text-white md:block'>
            Aviral Katiyar © 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

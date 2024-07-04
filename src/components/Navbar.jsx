import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    link.click();
  };
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (event) => {
    event.preventDefault();
    const email = "kartikjchaurasiya@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  let emailText = 'Email';
  if (copied) {
    emailText = 'Email Copied to Clipboard';
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      <div>
        <img src={Logo} alt="Logo" style={{ width: '200px' }} />
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='hover:text-pink-300 hover:text-xl'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-pink-300 hover:text-xl'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-pink-300 hover:text-xl'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-pink-300 hover:text-xl'>
          <Link to='certifications' smooth={true} duration={500}>
            Certifications
          </Link>
        </li>
        <li className='hover:text-pink-300 hover:text-xl'>
          <Link to='project' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='hover:text-pink-300 hover:text-xl'>
          <Link to='exp' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='hover:text-pink-300 hover:text-xl'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'md:hidden absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-3xl hover:text-pink-300 hover:text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-pink-300 hover:text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-pink-300 hover:text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-pink-300 hover:text-4xl'>
          <Link onClick={handleClick} to='certifications' smooth={true} duration={500}>
            Certifications
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-pink-300 hover:text-4xl'>
          <Link onClick={handleClick} to='project' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-pink-300 hover:text-4xl'>
          <Link onClick={handleClick} to='exp' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-pink-300 hover:text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-10'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kartik-j-chaurasiya/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Kartik-Chaurasiya"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
            <a
              href="kartikjchaurasiya@gmail.com"
              onClick={handleEmailClick}
              className='flex justify-between items-center w-full text-gray-300'
            >
              {emailText} <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
            <a
              onClick={handleDownload}
              className='flex justify-between items-center w-full text-gray-300'
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

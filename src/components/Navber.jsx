import React, { useEffect, useState } from 'react';
import './Navber.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLink = path => {
    setActiveLink(path);
  };
  return (
    <nav className="navber">
      <div className="nav">
        <h2>React Practice</h2>
        {/* mobile ber */}
        <div className="manuDiv">
          <button
            className="navManu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
        <ul className="navUl">
          <li>
            <Link
              to={'/'}
              className={`${activeLink === '/' ? 'activeLink' : 'navLink'}`}
              onClick={() => handleLink('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={'/products'}
              className={`${
                activeLink === '/products' ? 'activeLink' : 'navLink'
              }`}
              onClick={() => handleLink('/products')}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to={'/blogs'}
              className={`${
                activeLink === '/blogs' ? 'activeLink' : 'navLink'
              }`}
              onClick={() => handleLink('/blogs')}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to={'/contact'}
              className={`${
                activeLink === '/contact' ? 'activeLink' : 'navLink'
              }`}
              onClick={() => handleLink('/contact')}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={'/about'}
              className={`${
                activeLink === '/about' ? 'activeLink' : 'navLink'
              }`}
              onClick={() => handleLink('/about')}
            >
              About
            </Link>
          </li>
        </ul>
        <button className="navBtn">Login</button>
        {/* Mobile bar */}
        <ul className={`mobileBar ${isOpen ? 'open' : 'hidden'}`}>
          <li>
            <Link
              to={'/'}
              className={`${activeLink === '/' ? 'activeLink' : 'navLink'}`}
              onClick={() => handleLink('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={'/products'}
              className={`${
                activeLink === '/products' ? 'activeLink' : 'navLink'
              }`}
              onClick={() => handleLink('/products')}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to={'/blogs'}
              className={`${
                activeLink === '/blogs' ? 'activeLink' : 'navLink'
              }`}
              onClick={() => handleLink('/blogs')}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to={'/contact'}
              className={`${
                activeLink === '/contact' ? 'activeLink' : 'navLink'
              }`}
              onClick={() => handleLink('/contact')}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={'/about'}
              className={`${
                activeLink === '/about' ? 'activeLink' : 'navLink'
              }`}
              onClick={() => handleLink('/about')}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navber;

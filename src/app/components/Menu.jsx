'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LinkComponent from './LinkComponent';

export default function Menu() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeDropdownTimeout = useRef(null);
  const pathname = usePathname(); // Current route

  const handleMouseEnter = (menu) => {
    if (closeDropdownTimeout.current) {
      clearTimeout(closeDropdownTimeout.current);
    }
    setOpenDropdown(menu);
    document.body.classList.add('dropdown-active');
  };

  const handleMouseLeave = () => {
    closeDropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
      document.body.classList.remove('dropdown-active');
    }, 200);
  };

  const removeDropDown = () => {
    setOpenDropdown(null);
  };

  const isActive = (route) => pathname === route;

  return (
    <div className="relative">
      {/* Overlay */}
      {openDropdown && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={handleMouseLeave}
        />
      )}

      {/* Navbar */}
      <nav className="bg-primary text-white text-[12px] 580:text-[14px] 750:text-[16px] 750:font-[600] 1100:text-[18px] py-6 550:py-8 1200:py-10 relative z-20">
        <ul className="flex justify-center space-x-3 480:space-x-6 750:space-x-8 1100:space-x-12">
          <li className="relative">
            <Link
              href="/"
              className={`transition-all duration-300 ease-in-out ${isActive('/') ? 'border-b-2 border-secondary' : 'hover:opacity-80'
                }`}
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/about"
              className={`transition-all duration-300 ease-in-out ${isActive('/about') ? 'border-b-2 border-secondary' : 'hover:opacity-80'
                }`}
            >
              About Us
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer flex items-center">
              Products
              <span className="ml-1">▾</span>
            </span>
            {openDropdown === 'products' && (
              <ul className="absolute left-0 mt-6 550:mt-8 1200:mt-10 w-40 bg-white text-black shadow-lg rounded">
                <LinkComponent
                  text="Cleanroom"
                  href="/products/cleanroom"
                  removeDropDown={removeDropDown}
                  isActive={isActive}
                />
                <LinkComponent
                  text="HVAC"
                  href="/products/hvac"
                  removeDropDown={removeDropDown}
                  isActive={isActive}
                />
                <LinkComponent
                  text="Air Filtering"
                  href="/products/air-filtering"
                  removeDropDown={removeDropDown}
                  isActive={isActive}
                />
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer flex items-center">
              Services
              <span className="ml-1">▾</span>
            </span>
            {openDropdown === 'services' && (
              <ul className="absolute left-0 mt-6 550:mt-8 1200:mt-10 w-40 bg-white text-black shadow-lg rounded">
                <LinkComponent
                  text="Cleanroom"
                  href="/services/cleanroom"
                  removeDropDown={removeDropDown}
                  isActive={isActive}
                />

                <LinkComponent
                  text="HVAC"
                  href="/services/hvac"
                  removeDropDown={removeDropDown}
                  isActive={isActive}
                />
              </ul>
            )}
          </li>
          <li className="relative">
            <Link
              href="/gallery"
              className={`transition-all duration-300 ease-in-out ${isActive('/gallery') ? 'border-b-2 border-secondary' : 'hover:opacity-80'
                }`}
            >
              Gallery
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/contact"
              className={`transition-all duration-300 ease-in-out ${isActive('/contact') ? 'border-b-2 border-secondary' : 'hover:opacity-80'
                }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

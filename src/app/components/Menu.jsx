'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeDropdownTimeout = useRef(null);

  const handleMouseEnter = (menu) => {
    if (closeDropdownTimeout.current) {
      clearTimeout(closeDropdownTimeout.current);
    }
    setOpenDropdown(menu);
    document.body.classList.add('dropdown-active');
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing the dropdown
    closeDropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
      document.body.classList.remove('dropdown-active');
    }, 200); // Adjust delay time as needed
  };

  const removeDropDown =()=>{
    setOpenDropdown(null);
  }

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
      <nav className="bg-primary text-white text-[12px] 580:text-[14px] 750:text-[16px] 750:font-[600] 1100:text-[18px] py-6 550:py-8 1200:py-10  relative z-20">
        <ul className="flex justify-center space-x-3 480:space-x-6 750:space-x-8 1100:space-x-12">
          <li className="relative">
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
            <Link href="/about">About Us</Link>
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
                <li className="px-4 py-2 hover:bg-secondary">
                  <Link onClick={()=>removeDropDown()} href="/products/cleanroom">Cleanroom</Link>
                </li>
                <li className="px-4 py-2 hover:bg-secondary">
                  <Link onClick={()=>removeDropDown()} href="/products/hvac">HVAC</Link>
                </li>
                <li className="px-4 py-2 hover:bg-secondary">
                  <Link onClick={()=>removeDropDown()} href="/products/air-filtering">Air filtering</Link>
                </li>
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
                <li className="px-4 py-2 hover:bg-secondary">
                  <Link onClick={()=>removeDropDown()} href="/services/cleanroom">Cleanroom</Link>
                </li>
                <li className="px-4 py-2 hover:bg-secondary">
                  <Link onClick={()=>removeDropDown()} href="/services/hvac">HVAC</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="relative">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

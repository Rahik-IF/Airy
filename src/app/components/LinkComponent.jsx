import React from 'react';
import Link from 'next/link';

function LinkComponent({ text, removeDropDown, href, isActive }) {
  return (
    <li className="hover:bg-primary">
      <Link
        href={href}
        onClick={removeDropDown}
        className={`block px-4 py-2 transition-all duration-300 hover:text-white ease-in-out ${
          isActive(href) ? 'border-b-2 border-primary-dark' : 'hover:opacity-80'
        }`}
      >
        {text}
      </Link>
    </li>
  );
}

export default LinkComponent;

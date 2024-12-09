import React from 'react';
import Link from 'next/link';

function LinkComponent({ text, removeDropDown, href, isActive }) {
  return (
    <li className="hover:bg-secondary">
      <Link
        href={href}
        onClick={removeDropDown}
        className={`block px-4 py-2 transition-all duration-300 ease-in-out ${
          isActive(href) ? 'border-b-2 border-secondary' : 'hover:opacity-80'
        }`}
      >
        {text}
      </Link>
    </li>
  );
}

export default LinkComponent;

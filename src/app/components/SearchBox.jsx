'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();


  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnSearch = () => {
    if (query.trim()) {
      router.push(`/products/search/${query}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleOnSearch();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown} // Handles "Enter" key press
          placeholder="Search here..."
          className="w-full pl-4 pr-3 550:pl-6 550:pr-8 750:pr-14 py-1 bg-white border border-black rounded-full focus:outline-none placeholder:text-[12px]"
        />
        <Link href={`/products/search/${query}`}>
          <span className="absolute cursor-pointer inset-y-0 right-3 flex items-center">
            <FaSearch className="text-gray-400" />
          </span>
        </Link>
      </div>
    </div>
  );
}

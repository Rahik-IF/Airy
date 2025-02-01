import Image from 'next/legacy/image'
import React from 'react'
import airy from "@/app/airy.png"
import SearchBar from './SearchBox'

function HeaderTop() {
  return (
    <div className='flex justify-between items-center py-[1%] 550:py-0 px-[5%]'>
      <div className='relative w-[7%] pt-2'>
        <Image
          alt='airy-logo'
          fill="true"
          objectFit='contain'
          src={airy} />
      </div>
      <div className="hidden text-primary font-bold 550:block font-bungee text-[12px] sm:text-[15px] md:text-[18px] lg:text-[22px]">
       Cleanroom AC LLC
      </div>
      <div className='pt-2'>
      <SearchBar />
      </div>
    </div>
  ) 
}

export default HeaderTop
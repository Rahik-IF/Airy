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
      <div className='pt-2'>
      <SearchBar />
      </div>
    </div>
  )
}

export default HeaderTop
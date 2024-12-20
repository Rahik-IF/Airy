import React from 'react'

function Container({children}) {
  return (
    <div className='w-full container 450:px-2 750:px-4 1000:px-24'>{children}</div>
  )
}

export default Container
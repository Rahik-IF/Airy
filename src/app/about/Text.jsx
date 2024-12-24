import React from 'react'

function Text({ header, text }) {
    return (
        <div className='850:py-6'>
            <h2 className='font-bold 450:text-[26px] 750:text-[28px] text-left text-primary'>{header}</h2>
            <p className=' text-justify 750:text-[22px]'>{text}</p>
        </div>
    )
}

export default Text
import React from 'react'

const Banner = () => {
  return (
    <div className='container mt-16'>
        <div className='grid gap-4 sm:gap-8 sm:grid-cols-2'>
            <div className='overflow-hidden rounded-lg'>
                <img className='hover:scale-105 transition-transform' src='/assets/banner__1.webp' alt="" />
            </div>
            <div className='overflow-hidden rounded-lg'> 
                <img className='hover:scale-105 transition-transform' src="/assets/banner__2.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner
import React from 'react'
import { LuMailOpen } from 'react-icons/lu'
const NewsLetter = () => {
    return (
        <div className='bg-accentDark mt-16'>
            <div className='flex container py-8 justify-between items-center text-white md:flex-row flex-col gap-4'>
                <div className='flex items-center gap-4 flex-shrink-0'>
                    <LuMailOpen className='text-[60px]' />
                    <div>
                        <h2 className='text-xl sm:text-2xl font-semibold'>Sign up To Our Newsletters</h2>
                        <p>...and receive $20 coupon for first shopping</p>
                    </div>
                </div>

                <div className='max-w-[500px] w-full relative'>
                    <input className='w-full py-4 px-6 rounded-full text-black' type="text" placeholder='Your Email Address'/>
                    <button className=' absolute top-[50%] right-2 translate-y-[-50%] bg-accentDark py-2 px-4 rounded-full hover:bg-accent'>Subscribe!</button>
                </div>
            </div>


        </div>
    )
}

export default NewsLetter
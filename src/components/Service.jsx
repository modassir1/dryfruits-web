import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { FaMoneyBillWave } from 'react-icons/fa'
import { AiFillGift } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
const Service = () => {
    return (
        <div className='container pt-16'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <div className='flex gap-4'>
                    <div className='w-[50px] h-[50px] rounded-full bg-gray-300 text-[24px] flex items-center justify-center text-accentDark'>
                        <LiaShippingFastSolid />
                    </div>
                    <div>
                        <p className='text-accent text-xl font-medium'>Free Shipping</p>
                        <p className='text-gray-500 font-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='w-[50px] h-[50px] rounded-full bg-gray-300 text-[24px] flex items-center justify-center text-accentDark'>
                        <FaMoneyBillWave />
                    </div>
                    <div>
                        <p className='text-accent text-xl font-medium'>Best Price Guarntee</p>
                        <p className='text-gray-500 font-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='w-[50px] h-[50px] rounded-full bg-gray-300 text-[24px] flex items-center justify-center text-accentDark'>
                        <AiFillGift />
                    </div>
                    <div>
                        <p className='text-accent text-xl font-medium'>Free Curbside Pickup</p>
                        <p className='text-gray-500 font-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='w-[50px] h-[50px] rounded-full bg-gray-300 text-[24px] flex items-center justify-center text-accentDark'>
                        <BiPhoneCall />
                    </div>
                    <div>
                        <p className='text-accent text-xl font-medium'>Support 24/7</p>
                        <p className='text-gray-500 font-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
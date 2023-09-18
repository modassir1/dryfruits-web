import React from 'react'
import { AiFillStar, AiOutlineShopping, AiOutlineStar } from 'react-icons/ai'
const ProductCart = ({ img, name, price }) => {
    return (
        <div className='border border-gray-200  hover:border-gray-200 hover:scale-105 transition-transform rounded-lg'>
            <img src={img} alt={name} />
            <div className='p-4 space-y-2 relative'>
                <div className='flex gap-[2px] text-[20px] text-yellow-400'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
                <h3 className='font-medium'>{name}</h3>
                <h3 className='text-2xl font-medium text-red-600'>{price}</h3>
                <div className='absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full cursor-pointer flex items-center justify-center'>
                    <AiOutlineShopping />
                </div>
            </div>

        </div>
    )
}

export default ProductCart
import React from 'react'
import { BsSearch } from 'react-icons/bs';
// import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
const Navbar = () => {
    return (
        <>
        {/* //mobile */}
            <div className='lg:hidden container p-8 sticky z-10 top-0 bg-white'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-6 text-[25px]'>
                        <AiOutlineMenu />
                        <BsSearch />
                    </div>
                    <div>
                        <h2 className='text-4xl font-medium'>Digi Fruit</h2>
                    </div>
                    <div className='flex gap-6 text-[30px] relative'>
                        <AiOutlineUser />
                        <AiOutlineShoppingCart />
                        <span className='absolute -right-3 -top-1 text-white text-[14px] bg-red-600 w-[20px] h-[20px] flex justify-center items-center rounded-full'>0</span>
                    </div>

                </div>
            </div>


        {/* //desktop */}
            <div className='container hidden lg:block sticky z-10 top-0 bg-white'>
                <div className='flex items-center justify-between pt-8 pb-8'>
                    <h1 className='text-4xl font-medium'>Digi Fruit</h1>
                    <div className='relative w-full max-w-[500px]'>
                        <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" name="" id="" placeholder='Search Product..' />
                        <BsSearch className='absolute top-0 right-0 mt-4 mr-5' size={20} />
                    </div>


                    <div className='flex gap-4'>
                        <div className='icon_wrapper border border-gray-400 rounded-full w-[50px] h-[50px] flex items-center justify-center text-[22px]'>
                            <AiOutlineUser />
                        </div>

                        <div className='icon_wrapper border border-gray-400 rounded-full w-[50px] h-[50px] flex items-center justify-center text-[22px] relative'>
                            <AiOutlineShoppingCart />
                            <span className='absolute -right-1 -top-1 bg-red-600 text-white text-[14px] rounded-full flex items-center justify-center w-5 h-5'>0</span>

                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}

export default Navbar
import React from 'react'
import ProductCart from './ProductCart'
const BreakfastData = [
    { id: "0", img: "/assets/product__5.webp", name: "Fresh Tomato", price: "$400" },
    { id: '1', img: "assets/product__2.webp", name: "Crunchy Crispy", price: "$300" },
    { id: '2', img: "assets/product__3.webp", name: "Jewel Cardoriy", price: "$150" },
    { id: "3", img: "assets/product__4 (1).webp", name: "Almond Orgenic", price: "$100" }
]

const BreakFast = () => {
    return (
        <div className='container mt-8'>
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h3 className='font-medium text-2xl'>BreakFast & Dairy</h3>
                    <p className='text-gray-600 mt-2'>Buy best quality breakfast online from big-basket stop near you.</p>
                </div>
                <div className='mt-8 lg:mt-0 space-x-4'>
                    <button className='bg-accent text-white px-4 py-1 rounded-full hover:bg-accentDark'>Eggs & Dairy</button>
                    <button className='text-gray-600 hover:text-accent'>Pizza</button>
                    <button className='text-gray-600 hover:text-accent'>Snacks</button>
                </div>
            </div>


            <div className='pt-8 gap-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                <div>
                    <img className='w-full h-full object-cover' src='/assets/feature__2.webp' alt="" />
                </div>

                {
                    BreakfastData.map((e, i) => {
                        return (
                            <ProductCart key={e.id} img={e.img} price={e.price} name={e.name}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default BreakFast
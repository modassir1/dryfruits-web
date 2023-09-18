import React from 'react'
import ProductCart from './ProductCart'

const featureData = [
    { id: '0', img: "/product__1.webp", name: "Dried Mango", price: "$500" },
    { id: '1', img: "/product__2.webp", name: "Crunchy Crispy", price: "$300" },
    { id: '2', img: "/product__3.webp", name: "Jewel Cardoriy", price: "$150" },
    { id: "3", img: "/product__4 (1).webp", name: "Almond Orgenic", price: "$100" }
]

const FeatureSection = () => {
    return (
        <div className='container pt-16'>
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h2 className='font-medium text-2xl'>Fruits & Vegetables</h2>
                    <p className='text-gray-600 mt-2'>Buy farm freash fruits vegetable online at good price</p>
                </div>

                <div className='space-x-4 mt-8 lg:mt-0'>
                    <button className='bg-accent text-white px-4 py-1 rounded-full hover:bg-accentDark'>Fruits</button>
                    <button className='text-gray-600 hover:text-accent'>Vegetables</button>
                    <button className='text-gray-600 hover:text-accent'>Bread & Bakery</button>
                </div>
            </div>


            <div className='pt-8 gap-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                <div>
                    <img className='w-full h-full object-cover' src="/feature__1.webp" alt="" />
                </div>

                {
                    featureData.map((e, i) => {
                        return (
                            <ProductCart key={e.id} img={e.img} name={e.name} price={e.price} />
                        )
                    })
                }
            </div>
        </div>


    )
}

export default FeatureSection
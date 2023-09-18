import React from 'react'
import CategoryCard from './CategoryCard'
import data from './data'
const Category = () => {
  return (
    <div className='container pt-16'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                data.map((e, i) => {
                    return (
                        <CategoryCard key={e.id} img={e.img} name={e.name} count={e.count}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Category
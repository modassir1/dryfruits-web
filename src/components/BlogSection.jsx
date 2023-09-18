import React from 'react'
import BlogData from './BlogData'
const BlogProduct = [
    { id: "0", name: "Healthy Food Healthy Life", date: "Aug 25, 2023", comment: "1", img: "/assets/post__1.webp" },
    { id: "1", name: "Healthy Food Healthy Life", date: "Aug 25, 2023", comment: "6", img: "/assets/post__2.webp" },
    { id: "2", name: "Healthy Food Healthy Life", date: "Aug 25, 2023", comment: "5", img: "/assets/post__3.webp" }
]
const BlogSection = () => {
    return (
        <div className='container pt-16'>
            <h2 className='font-bold text-2xl'>Latest News</h2>
            <p className='text-gray-500'>Present posts in a best way to highlight interesting moments of your blog.</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 pt-8 gap-8'>
                {
                    BlogProduct.map((e, i) => {
                        return (
                            <BlogData img={e.img} date={e.date} comment={e.comment} name={e.name} key={e.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogSection
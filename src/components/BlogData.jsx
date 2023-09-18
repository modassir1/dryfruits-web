import React from 'react'

const BlogData = ({ name, img, date, comment }) => {
    return (
        <div className='space-y-4'>
            <img className='rounded-lg transition-transform hover:scale-105' src={img} alt="post" />
            <div className='text-accent font-medium'>
                <span>{date} / </span>
                <span>{comment} Comment</span>
            </div>
            <h2 className='font-medium text-xl'>{name}</h2>
        </div>
    )
}

export default BlogData
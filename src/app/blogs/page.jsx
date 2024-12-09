import React from 'react'
import BlogListPage from '../components/blogs-page/Blogs'


function BlogsPage() {
  return (
    <div className='flex flex-col w-full container mx-auto 450:px-4 750:px-6 1000:px-28'>
      <BlogListPage />
    </div>
  )
}

export default BlogsPage
// BlogList.js
import BlogItem from './BlogItem';
import blogData from "@/database/blogs/blogs.json"


const BlogList = () => {
    return (
        <div className="py-10 bg-gray-50 rounded-lg shadow-md">
            <div className="text-3xl  text-gray-800 mb-8 flex justify-between">
                <h2 className='font-bold'>Blog</h2>
                <button className='px-2 bg-[#C8E0CA] text-black text-[12px] 750:text-[14px]'>See All</button>
            </div>
            {blogData.map((blog, index) => (
                <BlogItem
                    key={index}
                    date={blog.date}
                    title={blog.title}
                    description={blog.description}
                />
            ))}
        </div>
    );
};

export default BlogList;

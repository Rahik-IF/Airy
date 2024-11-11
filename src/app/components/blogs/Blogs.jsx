// BlogList.js
import BlogItem from './BlogItem';

const blogData = [
    {
        date: { day: '11', month: 'April', year: '2024' },
        title: 'New Cleanroom dress are set',
        description: 'Lorem ipsum dolor sit amet consectetur. Eu adipiscing vulputate morbi vel vitae faucibus purus felis suspendisse. Pretium lectus ut lectus.',
    },
    {
        date: { day: '11', month: 'April', year: '2024' },
        title: 'New Cleanroom dress are set',
        description: 'Lorem ipsum dolor sit amet consectetur. Eu adipiscing vulputate morbi vel vitae faucibus purus felis suspendisse. Pretium lectus ut lectus.',
    },
    {
        date: { day: '11', month: 'April', year: '2024' },
        title: 'New Cleanroom dress are set',
        description: 'Lorem ipsum dolor sit amet consectetur. Eu adipiscing vulputate morbi vel vitae faucibus purus felis suspendisse. Pretium lectus ut lectus.',
    },
    // Add more items as needed
];

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

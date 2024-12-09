"use client";
import React from "react";
import BlogItem from "./BlogItem";
import { useGetBlogsQuery } from "../../../../redux/features/blogsApi";
import Link from "next/link";
import Loading from "../Loader";


const BlogList = () => {
  const { data: blogs, isLoading, error } = useGetBlogsQuery({ skip: 0, take: 3 });

  if (isLoading) return <Loading />;
  if (error) return <div>Error fetching blogs...</div>;

  // Helper function to parse the date
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    return { day, month, year };
  };

  return (
    <div className="py-10 bg-gray-50 rounded-lg shadow-md">
      <div className="text-3xl text-gray-800 mb-8 flex justify-between">
        <h2 className="font-bold">Blogs</h2>
        <Link href="/blogs" className="px-2 bg-[#C8E0CA] text-black text-[12px] 750:text-[14px]">
          See All
        </Link>
      </div>
      {blogs?.blogs?.map((blog) => (
        <BlogItem
          key={blog.slug}
          date={parseDate(blog.published_at)} // Parse date before passing
          title={blog.title}
          description={blog.description}
        />
      ))}
      
    </div> 
  );
};

export default BlogList;

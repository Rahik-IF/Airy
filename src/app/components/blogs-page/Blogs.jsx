"use client";
import React, { useState } from "react";
import BlogItem from "./BlogItem";
import { useGetBlogsQuery } from "../../../../redux/features/blogsApi";
import Link from "next/link";
import Loading from "../Loader";
import Pagination from "../Pagination";


const BlogListPage = () => {

  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10); // Default results per page
  const skip = (page - 1) * resultsPerPage;
  const { data, isLoading, error } = useGetBlogsQuery({ skip, take: resultsPerPage });

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;
  console.log(data);
  const { blogs, total } = data;
  const totalPages = Math.ceil(Number(total) / resultsPerPage);

  if (isLoading) return <div>Loading blogs...</div>;
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
      </div>
      {blogs?.map((blog) => (
        <BlogItem
          key={blog.slug}
          date={parseDate(blog.published_at)} // Parse date before passing
          title={blog.title}
          description={blog.description}
          slug={blog.slug}
        />
      ))}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
        resultsPerPage={resultsPerPage}
        total={total}
        onResultsPerPageChange={(newResults) => {
          setResultsPerPage(newResults);
          setPage(1);
        }} />
    </div>
  );
};

export default BlogListPage;

"use client";
import React from "react";

import Loading from "@/app/components/Loader";
import { useGetBlogBySlugQuery } from "../../../../redux/features/blogsApi";
import { useRouter } from "next/navigation";

const BlogDetailsPage = ({ params }) => {
  const router = useRouter();
  const { data: blog, error, isLoading } = useGetBlogBySlugQuery({
    slug: `${params.slug}`,
  });

  if (isLoading) return <Loading />;
  if (error) return <>Error in data fetching...</>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 md:px-16">
      <button
        onClick={() => router.back()}
        className="mb-8 text-sm text-blue-600 hover:underline flex items-center gap-2"
      >
        <span>&larr;</span> Back to Blogs
      </button>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Blog Header */}
        <div className="relative bg-primary text-white py-20 px-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {blog.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base">{blog.published_at}</p>
        </div>

        {/* Blog Content */}
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-800">
            Overview
          </h2>
          <p className="text-primary-light text-justify leading-relaxed mb-8">
            {blog.description}
          </p>

          {/* Author Section */}
          <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
            <div className="w-12 h-12 rounded-full bg-blue-300"></div>
            <div>
              <h3 className="font-semibold text-gray-800">Author Name</h3>
              <p className="text-sm text-gray-600">Expert in HVAC Systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;

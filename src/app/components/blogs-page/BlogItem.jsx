import Link from "next/link";

const BlogItem = ({ date, title, description, slug }) => {
  return (
       <Link href={`/blogs/${slug}`}>
    <div className="flex items-stretch border border-orange-600 rounded-lg overflow-hidden mb-4 shadow-sm">
      <div className="bg-primary text-white text-center p-4 flex-shrink-0">
          <p className="text-lg font-semibold 880:text-[24px] 950:text-[26px]">{date.day}</p>
        <p className="text-sm">{date.month}</p>
        <p className="text-sm">{date.year}</p>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-center">
        <h3 className="text-primary font-bold mb-1 880:text-[22px] 950:text-[24px]">{title}</h3>
        <p className="text-gray-700 880:text-[22px] 950:text-[24px] text-justify line-clamp-2">{description}</p>
      </div>
    </div>
      </Link>
  );
};

export default BlogItem;

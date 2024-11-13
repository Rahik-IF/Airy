import BannerSection from "./components/Banner";
import BlogList from "./components/blogs/Blogs";
import ProductList from "./components/products/Products";
import ServiceList from "./components/services/Services";

// page.jsx
export default function Home() {
  return (
    <div className="flex flex-col items-center p-0">
      <main className="flex flex-col w-full container 450:px-4 750:px-6 1000:px-28">
        <BannerSection />
        <ProductList />
        <ServiceList />
        <BlogList />
        {/* <p className="font-montserrat">This is text 1</p>
        <p className="font-itim">This is text 2</p> */}
      </main>
    </div>
  );
}



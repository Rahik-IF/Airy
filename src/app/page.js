import BannerSection from "./components/Banner";
import BlogList from "./components/blogs/Blogs";
import CategoryCards from "./components/category-card/Cards";
import Container from "./components/Container";
import ProductsCarousel from "./components/sliders/pic-slider/Carousel";
import ProductList from "./components/products/Products";
import ServiceList from "./components/services/Services";

// page.jsx
export default function Home() {
  return (
    <div className="flex flex-col items-center p-0">
      <main className="flex flex-col w-full">
        <BannerSection />
        <Container><ProductList /></Container>
        <Container><ServiceList /></Container>
        <Container><ProductsCarousel /></Container>
        <Container><BlogList /></Container>

        {/* <p className="font-montserrat">This is text 1</p>
        <p className="font-itim">This is text 2</p> */}
      </main>
    </div>
  );
}



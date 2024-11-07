import BannerSection from "./components/Banner";

// page.jsx
export default function Home() {
  return (
    <div className="flex flex-col  items-center p-0">
      <main className="flex flex-col  items-center w-full">
        <BannerSection />
        <p className="font-montserrat">This is text 1</p>
        <p className="font-itim">This is text 2</p>
      </main>
    </div>
  );
}



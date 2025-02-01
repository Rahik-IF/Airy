"use client";

import Link from "next/link";
import { useGetContactsQuery } from "../../../redux/features/contactApi";
import Loading from "../components/Loader";
//import banner from "./contact-banner.png"; // Ensure the image path is correct

export default function ContactPage() {
  const { data, isLoading, error } = useGetContactsQuery();
  if (isLoading) return <Loading />;
  if (error) return <p className="text-center text-red-600">Error loading contacts.</p>;

  const { phone, email, facebook, address } = data;
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14430.309768701802!2d55.351617!3d25.284796349999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8ea240fd4f%3A0x5ff600f60d0aacdf!2sHor%20Al%20Anz%20East%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1735041841158!5m2!1sen!2sbd";

  return (
    <div className="flex flex-col w-full container mx-auto px-4 md:px-6 xl:px-20 bg-gray-50">
      {/* Header */}
      <header
        className="relative text-white text-center py-10 md:py-16 lg:py-24"
        style={{
          backgroundImage: `url(/contact-banner.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Get In Touch</h1>
          <p className="text-lg mt-2 opacity-90">We’re always here to help you.</p>
        </div>
      </header>

      {/* Contact Sections */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-8 justify-center">
        {/* Call Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-primary">Contact Us</h2>
          <a href={`tel:${phone}`} className="text-gray-600 mt-4 block">
            📞 {phone}
          </a>
          <a href={`mailto:${email}`} className="text-gray-600 mt-4 block">
            📩 {email}
          </a>
        </div>


        {/* Address Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
          <Link href="https://www.google.com/maps/place/Hor+Al+Anz+East+-+Dubai+-+United+Arab+Emirates">
            <h2 className="text-xl font-bold text-primary">Visit Us</h2>
          </Link>
          <p className="text-gray-600 mt-4">{address}</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <iframe
          src={mapUrl}
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

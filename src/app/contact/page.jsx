"use client";

import { useGetContactsQuery } from "../../../redux/features/contactApi";
import Loading from "../components/Loader";

export default function ContactPage() {
  const { data, isLoading, error } = useGetContactsQuery();
  if (isLoading) return <Loading />;
  if (error) return <p className="text-center text-red-600">Error loading contacts.</p>;

  const { phone, email, facebook, address } = data;
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.85800128338!2d90.38347647397535!3d23.894653483225664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43a7aeae529%3A0xd0856a9d666a2288!2sAiry%20International!5e0!3m2!1sen!2sbd!4v1730995000664!5m2!1sen!2sbd";

  return (
    <div className="flex flex-col w-full container mx-auto px-4 md:px-6 xl:px-20 bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white text-center py-10 md:py-16">
        <h1 className="text-4xl font-extrabold">Get In Touch</h1>
        <p className="text-lg mt-2 opacity-90">We’re always here to help you.</p>
      </header>

      {/* Contact Sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
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

        {/* WhatsApp/Email Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-primary">Follow Us</h2>

          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 block"
            >
              🌐 Visit our Facebook Page
            </a>
          )}
        </div>

        {/* Address Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-primary">Visit Us</h2>
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

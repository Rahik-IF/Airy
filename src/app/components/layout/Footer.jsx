"use client"
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import MapEmbed from '../Map';
import { useGetContactsQuery } from '../../../../redux/features/contactApi';
import Loading from '../Loader';


export default function Footer() {
  const { data, isLoading, error } = useGetContactsQuery();
  if (isLoading) return <Loading />;
  if (error) return <p className="text-center text-red-600">Error loading contacts.</p>;

  const { phone, email, facebook, address } = data;
  return (
    <footer className="bg-[#a45728] text-white text-[12px] 480:text-[14px] 700:text-[16px] md:text-[10px] 850:text-[12px] 1000:text-[14px] 1150:text-[16px] py-8 px-4 1200:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">

        {/* Company Info */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <p>
            {address}
          </p>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl mt-2">
            {/* <Link href={facebook} ><FaFacebook /></Link>
            <Link href={`mailto:${email}`} ><FaEnvelope /></Link>
            <Link href='https://www.x.com' ><FaTwitter /></Link>
            <Link href='https://www.youtube.com' ><FaYoutube /></Link> */}
          </div>
        </div>

        {/* About Us */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold mb-2">About Us</h3>
          <ul className="space-y-1">
            <li><Link href="/products/cleanroom">About Cleanroomac</Link></li>
            <li><Link href="/about">Products</Link></li>
            <li><Link href="/services/cleanroom">Services</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li><Link href={facebook}><FaFacebook className="inline mr-2" />facebook</Link></li>
            <li><Link href={`mailto:${email}`}><FaEnvelope className="inline mr-2" />{email}</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-1">
            <li>FAQs</li>
            <li><Link href="/services/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Location */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold mb-2">Our Location</h3>
          {/* Placeholder for the map image */}
          <div className="w-full h-40 bg-gray-300 mt-2">
            {/* You can replace this div with an <iframe> or image for an actual map */}

            <MapEmbed />
          </div>
        </div>
      </div>
    </footer>
  );
}

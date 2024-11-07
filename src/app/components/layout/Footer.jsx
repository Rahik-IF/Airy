import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import MapEmbed from '../Map';


export default function Footer() {
  return (
    <footer className="bg-[#a45728] text-white text-[12px] 480:text-[14px] 700:text-[16px] md:text-[10px] 850:text-[12px] 1000:text-[14px] 1150:text-[16px] py-8 px-4 1200:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Company Info */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-2xl font-semibold italic">Airy</h2>
          <p>
            Sadiq, Alkazem Building (133-251), Plot No: 1536-0<br />
            Hor Al Anz East, Dubai, United Arab Emirates (UAE)
          </p>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl mt-2">
            <Link href='https://www.facebook.com' ><FaFacebook/></Link>
            <Link href='https://www.x.com' ><FaTwitter /></Link>
            <Link href='https://www.youtube.com' ><FaYoutube /></Link>
            <Link href='https://www.instagram.com' ><FaInstagram /></Link>
          </div>
        </div>

        {/* About Us */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold mb-2">About Us</h3>
          <ul className="space-y-1">
            <li>About Airy</li>
            <li>Products</li>
            <li>Services</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li><FaFacebook className="inline mr-2" /> www.xxxxxxxxxxxx</li>
            <li><FaTwitter className="inline mr-2" /> www.xxxxxxxxxxxx</li>
            <li><FaInstagram className="inline mr-2" /> +8801XXXXXXXXX</li>
          </ul>
        </div>

        {/* Help */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-1">
            <li>FAQs</li>
            <li>Ask Question</li>
            <li>Contact Us</li>
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

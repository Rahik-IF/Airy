"use client";
import React from "react";
import { useGetContactsQuery } from "../../../../redux/features/contactApi";
import Loading from "../Loader";
import Link from "next/link";

function Options({options}) {
  const { data, isLoading, error } = useGetContactsQuery();
  if (isLoading) return <Loading />;
  if (error) return <p className="text-center text-red-600">Error loading contacts.</p>;

  const { phone, email, facebook, address } = data;
  return (
    <div className="flex justify-center">
      {/* Parent container: flex for both small (sm) and larger screens (md) */}
      <div className="flex flex-col sm:flex-row sm:w-full md:flex-col bg-gray-50 p-6 rounded-lg shadow-lg font-sans">
        
        {/* Services Section: flex-2 for small screens and flex-1 for larger screens */}
        <div className="sm:flex-1 flex-1 mb-4 sm:mb-0 border-b-2  sm:border-none md:border-b-2 pb-1">
          <div className="text-lg font-semibold text-gray-800 mb-4">Our Services</div>

       
           {/* <div className="hover:bg-orange-500 hover:text-white p-3 rounded-md cursor-pointer transition duration-300">
            Cleanroom Services
          </div>

        
          <div className="hover:bg-orange-500 hover:text-white p-3 rounded-md cursor-pointer transition duration-300 mt-2">
            HVAC Services
          </div>  */}
          {options.map(
            (option, index) => (
          <Link key={index} href={`${option?.link}`} >
          <div className="bg-[#ededed] mt-1 hover:bg-orange-500 hover:text-white p-3 rounded-md cursor-pointer transition duration-300 py-5 md:py-3">
            {option?.name}
          </div>
          </Link>
          )
          )}
        </div>

        {/* Contact Us Section: flex-3 for small screens and flex-1 for larger screens */}
        <div className="sm:flex-3 flex-1 mt-4 sm:mt-0 sm:border-l md:border-none pt-4 pl-4">
          <h1 className="text-lg font-bold text-gray-800 mb-2">Contact Us</h1>

          <h3 className="text-sm font-semibold text-gray-600">Address:</h3>
          <p className="text-sm text-gray-700 mb-2">{address}</p>

          <h3 className="text-sm font-semibold text-gray-600">Time:</h3>
          <p className="text-sm text-gray-700 mb-2">
            Monday to Friday <br /> 8:30 AM to 6:00 PM
          </p>

          <h3 className="text-sm font-semibold text-gray-600">E-mail:</h3>
          <a href={`mailto:${email}`} className="text-sm text-blue-500 hover:underline cursor-pointer">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Options;

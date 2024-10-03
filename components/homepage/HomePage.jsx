import Image from 'next/image';
import React from 'react';
import leftImage from '../../asset/images/Mask group (1).svg'; // Replace with the actual image path

function HomePage() {
  return (
    <div className="min-h-screen flex items-start justify-between px-[69px] py-[100px] ">
      {/* Left Side Content (Text) */}
      <div className="flex flex-col justify-between space-y-6 max-w-[759px]">
        {/* Greetings Text */}
        <h2 className="font-inter text-[22px] font-medium leading-[28px] text-black animate-fadeIn">
        Greetings, you&apos;re now in Ibizcarrd
        </h2>

        {/* Main Heading */}
        <h1 className="font-inter text-[72px] font-bold leading-tight text-black animate-slideIn">
          Bringing Your Dream Card Vision at One Link
        </h1>

        {/* Subheading */}
        <p className="font-inter text-[22px] font-medium leading-[28px] text-black animate-fadeIn">
          Your Card, Your Way - Create your Professional Digital Business Card + Website + Customizable Templates for a Lasting Impression!
        </p>

        {/* Call to Action Button */}
        <button
          className="bg-[#40A8C4] text-white font-inter text-[24px] font-bold leading-[28px] py-4 px-12 mt-5 rounded-tl-[20px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Make Your Vcard
        </button>
      </div>

      {/* Right Side Image */}
      <div className="relative w-[821px] h-[472px] rounded-[20px] overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn">
        <Image
          src={leftImage} 
          alt="Left Side Image"
          layout="fill"
          objectFit="cover"
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
}

export default HomePage;

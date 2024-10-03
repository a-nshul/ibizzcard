'use client';
import Image from 'next/image';
import React from 'react';
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import homeicon from "../../asset/images/Screenshot 2024-09-21 120056 1.svg";
import { useRouter } from 'next/navigation';
function Header() {
  const router = useRouter();

  const handlelogin=()=>{
    router.push('/login');
  }

  return (
    <div className="w-[1370px] h-[100px] ml-[69px] rounded-bl-[20px] rounded-br-[20px] bg-[#181C1B] backdrop-blur-lg flex items-center justify-between px-6">
      {/* Left side: Icon and "ibizcard" */}
      <div className="flex items-center">
        <div className="w-[47px] h-[47px] bg-[#FBFBFC] rounded-full flex items-center justify-center">
          <Image
            src={homeicon}
            alt="Home Icon"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <span className="ml-[42px] text-white font-bold text-3xl font-inter">ibizcard</span>
      </div>

      {/* Center: Navigation Links */}
      <Menu mode="horizontal" theme="dark" className="bg-transparent flex gap-[28px] font-inter">
        <Menu.Item key="home" className="text-white text-lg font-medium">
          Home
        </Menu.Item>
        <Menu.Item key="product" className="text-white text-lg font-medium">
          Product
        </Menu.Item>
        <Menu.SubMenu key="package" title="Package" icon={<DownOutlined />} className="text-white text-lg font-medium">
          <Menu.Item key="package1">Basic</Menu.Item>
          <Menu.Item key="package2">Pro</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="about" className="text-white text-lg font-medium">
          About
        </Menu.Item>
        <Menu.Item key="contact" className="text-white text-lg font-medium">
          Contact
        </Menu.Item>
      </Menu>

      {/* Right side: Login and Get Started buttons */}
      <div className="flex items-center">
        <button 
        className="w-[118px] h-[45px] bg-black text-white border border-[#40A8C4] font-medium text-sm rounded-tl-md"
        onClick={handlelogin}
        >
          Log In
        </button>
        <button className="ml-4 w-[118px] h-[45px] bg-black text-white border border-[#40A8C4] font-medium text-sm rounded-tl-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Header;

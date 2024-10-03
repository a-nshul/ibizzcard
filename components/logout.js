"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { LogoutOutlined } from '@ant-design/icons'; // Logout icon
import { Modal } from 'antd'; // Import Ant Design Modal
import { useRouter } from 'next/navigation';
const Header = () => {
    const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Handle the logout action here (e.g., clear user session, redirect)
    setIsModalVisible(false);
    // Redirect to logout endpoint or clear session logic
    router.push('/login') // Replace with your logout logic
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg">Ibizcard</h1>
      <LogoutOutlined
        className="text-xl cursor-pointer hover:text-gray-400"
        onClick={showModal} // Show modal on click
      />

      {/* Confirmation Modal */}
      <Modal
        title="Confirm Logout"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Logout"
        cancelText="Cancel"
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </header>
  );
};

export default Header;

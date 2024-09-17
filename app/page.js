'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import LoginPage from '../components/login/Login';
import ResumeForm from '../components/VcardForm';
import ResumeTemplate from '../components/VcardTemplate';
import { LogoutOutlined } from '@ant-design/icons';

const HomePage = () => {
  const [resumeData, setResumeData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleFormSubmit = (values) => {
    setResumeData(values);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleLogout=()=>{
    setLoggedIn(false);
    window.location.reload();
  }

  return (
    <div className="relative container mx-auto p-4">
      {loggedIn ? (
        <>
          {/* Logout Icon */}
          <span 
            onClick={handleLogout} 
            className="absolute top-4 right-4 cursor-pointer text-red-500 hover:text-red-700"
            title="Logout"
          >
            <LogoutOutlined style={{ fontSize: '24px' }} />
          </span>

          <div className="flex flex-col md:flex-row gap-4 mt-10">
            {/* Form Section with Reduced Width */}
            <div className="flex-1 max-w-[600px] bg-gray-100 p-3 rounded-lg shadow-lg">
              <ResumeForm onSubmit={handleFormSubmit} />
            </div>

            {/* Template Section */}
            {resumeData && (
              <div className="flex-1 min-w-[250px] text-white p-4 rounded-lg shadow-lg">
                <ResumeTemplate resumeData={resumeData} />
              </div>
            )}
          </div>
        </>
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default HomePage;

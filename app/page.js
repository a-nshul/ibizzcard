'use client';

import { useState } from 'react';
import LoginPage from '../components/login/Login';
import ResumeForm from '../components/VcardForm';
import ResumeTemplate from '../components/VcardTemplate';

const HomePage = () => {
  const [resumeData, setResumeData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleFormSubmit = (values) => {
    setResumeData(values);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div className="container mx-auto p-4">
      {loggedIn ? (
        <div className="flex flex-col md:flex-row gap-4">
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
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default HomePage;

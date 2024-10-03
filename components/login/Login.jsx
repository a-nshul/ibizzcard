"use client";
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import GoogleLogo from "../../asset/images/Google.svg";
import loginart from "../../asset/images/Login Art.svg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To handle errors
  const router = useRouter(); // For navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // API call to login
      const response = await axios.post('https://template-api-kmu4.vercel.app/api/users/login', {
        email,
        password
      });

      // Assuming API response contains user data or token
      if (response.status === 200) {
        // Store token or any required data in localStorage or cookies if needed
        localStorage.setItem('token', response.data.token);

        // Navigate to form page upon successful login
        router.push('/form'); // Replace '/form' with the correct path of your form page
      } else {
        setErrorMessage('Login failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {/* Left Side (Login Form) */}
      <div className="flex flex-col justify-between w-[450px] h-auto max-h-screen px-8 py-10 gap-10 bg-white rounded-lg shadow-lg animate-fadeIn">
        {/* Welcome Section */}
        <div className="flex flex-col items-center gap-4 animate-slideIn">
          <h1 className="font-[SF Pro Rounded] text-[24px] font-semibold leading-[28px] tracking-[0.01em] text-center text-[#0C1421] transition duration-500 ease-in-out transform hover:scale-105">
            Welcome Back 👋
          </h1>
          <p className="font-[SF Pro Rounded] text-[14px] leading-[22px] tracking-[0.01em] text-center text-black p-2 rounded-md transition duration-500 ease-in-out transform hover:scale-105">
          Today is a new day. It&apos;s your day. You shape it. Sign in to start managing your Business V card.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col w-full max-w-md mx-auto gap-6 animate-fadeInUp">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="font-roboto text-[14px] leading-[16px] text-left text-[#0C1421]">
              Email
            </label>
            <input
              type="email"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[40px] p-2 bg-white border border-[#D4D7E3] rounded-md outline-none transition duration-300 focus:ring-2 focus:ring-blue-500 focus:shadow-lg"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="font-roboto text-[14px] leading-[16px] text-left text-[#0C1421]">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[40px] p-2 bg-white border border-[#D4D7E3] rounded-md outline-none transition duration-300 focus:ring-2 focus:ring-blue-500 focus:shadow-lg"
            />
            <a href="#" className="text-[14px] leading-[16px] text-blue-500 text-right hover:underline transition duration-200 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full h-[40px] bg-[#1E4AE9] text-white font-roboto text-[16px] rounded-lg hover:bg-[#294957] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Sign In
          </button>

          {/* Or Divider */}
          <div className="flex items-center justify-between gap-2">
            <hr className="w-full border-gray-300" />
            <span className="text-gray-500 text-[14px]">Or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Google Sign In Button */}
          <button
            type="button"
            className="flex items-center justify-center w-full h-[40px] bg-[#F3F9FA] border border-gray-300 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            <Image src={GoogleLogo} alt="Google Icon" width={28} height={28} />
            <span className="ml-3 font-roboto text-[14px] text-[#313957]">
              Sign in with Google
            </span>
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-[14px] font-roboto text-gray-500 animate-fadeInUp">
        Don&apos;t have an account?<a href="/signup" className="text-blue-500 hover:underline transition duration-300 hover:text-blue-700">Sign up</a>
        </p>
      </div>

      {/* Right Side (Image Section) */}
      <div className="flex items-center justify-center w-[450px] h-auto max-h-screen rounded-lg shadow-lg">
        <Image
          src={loginart}
          alt="Login Art"
          width={450}
          height={500}
          className="rounded-lg object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Login;


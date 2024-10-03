"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';
import { Form, Input, Button, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';
import GoogleLogo from "../../asset/images/Google.svg";
import MacbookImage from "../../asset/images/@ Macbook Pro.svg"; 

export default function SignupPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); 

  const onFinish = async (values) => {
    setLoading(true); 
  
    try {
      const response = await axios.post('https://template-api-kmu4.vercel.app/api/users/signup', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: "+1234567890",
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
  
      message.success("Account created successfully! Go to Login Page to login");
      form.resetFields();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(error.response?.data?.message || "Failed to create account");
      } else {
        message.error("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[1050px] h-[650px] flex justify-between overflow-hidden relative">
        
        {/* First Container for Promotional Content */}
        <div className="bg-[#40A8C4] w-[45%] h-full p-4 flex flex-col items-start justify-center animate-fade-in">
          <h2 className="font-inter text-[20px] font-normal leading-[28px] tracking-[0.04em] text-left mb-2">
            Need Business Vcard to promote your brand?
          </h2>
          <h2 className="font-inter text-[20px] font-bold leading-[28px] tracking-[0.04em] text-left mb-2">
            Ibizcarrd will help you.
          </h2>
          <Image
            src={MacbookImage}
            alt="Macbook"
            width={200}
            height={110}
            className="w-full h-auto object-cover" 
          />
        </div>

        {/* Second Container for Signup Form */}
        <div className="bg-white shadow-md rounded-xl w-[55%] h-full flex flex-col p-4 border-l border-gray-300">
          <h1 className="font-montserrat text-[22px] font-bold text-black mb-4">
            Create Account
          </h1>
          
          <Form form={form} layout="vertical" onFinish={onFinish} className="w-full">
            {/* First Name Field */}
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
              className="mb-2"
            >
              <Input
                className="h-[40px] text-sm border-gray-300 focus:outline-none"
                placeholder="First Name"
              />
            </Form.Item>

            {/* Last Name Field */}
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
              className="mb-2"
            >
              <Input
                className="h-[40px] text-sm border-gray-300 focus:outline-none"
                placeholder="Last Name"
              />
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
              className="mb-2"
            >
              <Input
                className="h-[40px] text-sm border-gray-300 focus:outline-none"
                placeholder="Email"
              />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              className="mb-2"
            >
              <Input.Password
                className="h-[40px] text-sm border-gray-300 focus:outline-none"
                placeholder="Password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            {/* Confirm Password Field */}
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
              className="mb-2"
            >
              <Input.Password
                className="h-[40px] text-sm border-gray-300 focus:outline-none"
                placeholder="Confirm Password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            {/* Sign Up Button */}
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full h-[45px] bg-black text-white text-sm font-bold rounded-lg transition hover:scale-105 hover:shadow-md mb-2"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>

            {/* OR Divider */}
            <div className="my-2 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Sign Up Button */}
            <button className="w-full h-[40px] border border-[#5B86E5] text-black flex justify-center items-center gap-2 rounded-lg transition hover:scale-105 mb-4">
              <Image
                src={GoogleLogo}
                alt="Google Icon"
                width={25}
                height={25}
                className="w-[20px] h-[20px]"
              />
              <span className="text-sm font-medium">
                Sign up with Google Account
              </span>
            </button>

            {/* Already have an account */}
            <div className="text-center">
              <span className="text-gray-500 text-sm">Already have an account? </span>
              <a
                href="/"
                className="text-blue-600 text-sm font-bold hover:underline"
              >
                Login
              </a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Typography } from 'antd';
import 'antd/dist/reset.css';

const { Title } = Typography;

const LoginPage = ({ onLoginSuccess }) => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleFinish = (values) => {
    const { username, password } = values;

    // Dummy validation
    if (username === 'admin' && password === 'admin123') {
      onLoginSuccess(); // Notify parent component about successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img src="https://i.ytimg.com/vi/7I7Ax6EDvv8/maxresdefault.jpg" alt="VCard Logo" className="w-32" />
        </div>
        
        {/* Login Form */}
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <Title level={2} className="text-center mb-6">Login</Title>
          {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
          <Form layout="vertical" onFinish={handleFinish} className="space-y-4">
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

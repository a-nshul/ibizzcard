'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Typography } from 'antd';
import 'antd/dist/reset.css';

const { Title } = Typography;

const SignupPage = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleFinish = (values) => {
    const { username, password, confirmPassword } = values;

    if (password === confirmPassword) {
      router.push('/login');
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <Title level={2} className="text-center mb-6">Sign Up</Title>
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
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;

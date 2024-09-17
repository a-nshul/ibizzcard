'use client';

import { Form, Input, Button, Typography, Divider, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;

const ResumeForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <Title level={2} className="text-center mb-6">V-Card Details</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="space-y-4"
      >
        <Form.Item
          label="Cover Image"
          name="coverImage"
          valuePropName="fileList"
          getValueFromEvent={({ fileList }) => fileList}
          extra="Upload a cover image for your resume."
        >
          <Upload 
            beforeUpload={() => false} 
            listType="picture" 
            className="upload-list-inline"
            showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
          >
            <Button icon={<UploadOutlined />}>Upload Cover Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Profile Image"
          name="profileImage"
          valuePropName="fileList"
          getValueFromEvent={({ fileList }) => fileList}
          extra="Upload a profile image for your resume."
        >
          <Upload 
            beforeUpload={() => false} 
            listType="picture" 
            className="upload-list-inline"
            showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
          >
            <Button icon={<UploadOutlined />}>Upload Profile Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Profession"
          name="profession"
          rules={[{ required: true, message: 'Please input your profession!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Facebook"
          name="facebook"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Instagram"
          name="instagram"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="LinkedIn"
          name="linkedin"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Whatsapp"
          name="whatsapp"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Other"
          name="other"
        >
          <Input />
        </Form.Item>

        <Divider />

        <Form.Item
          label="About Me"
          name="aboutMe"
          rules={[{ required: true, message: 'Please input about yourself!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Divider />

        <Form.Item
          label="Email ID"
          name="email"
          rules={[{ type: 'email', message: 'The input is not valid E-mail!' }, { required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mobile Number"
          name="mobile"
          rules={[{ required: true, message: 'Please input your mobile number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Please input your date of birth!' }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: 'Please input your location!' }]}
        >
          <Input />
        </Form.Item>

        <Divider />

        <Form.Item
          label="Service 1"
          name="service1"
          rules={[{ required: true, message: 'Please input your first service!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Service 2"
          name="service2"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Service 3"
          name="service3"
        >
          <Input />
        </Form.Item>

        <Divider />

        <Form.Item
          label="Appointment Date"
          name="appointmentDate"
          rules={[{ required: true, message: 'Please select an appointment date!' }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item
          label="Available Hours"
          name="availableHours"
          rules={[{ required: true, message: 'Please input available hours!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-blue-500 text-white">
            Generate Vcard
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResumeForm;

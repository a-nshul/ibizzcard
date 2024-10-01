// // 'use client';

// // import { Form, Input, Button, Select, Typography, Divider, Upload, Row, Col, DatePicker, message } from 'antd';
// // import { UploadOutlined, CopyOutlined } from '@ant-design/icons';
// // import 'antd/dist/reset.css';
// // import { useState } from 'react';
// // import QRCode from 'qrcode';

// // const { Title } = Typography;

// // const ResumeForm = ({ onSubmit }) => {
// //   const [form] = Form.useForm();
// //   const [qrCodeUrl, setQrCodeUrl] = useState('');
// //   const [publicLink, setPublicLink] = useState('');

// //   const handleFinish = async (values) => {
// //     onSubmit(values);
// //     await generateQRCode(values);
// //   };

// //   // const generateQRCode = async (values) => {
// //   //   const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${values.name}\nEMAIL:${values.email}\nTEL:${values.mobile}\nEND:VCARD`;
// //   //   try {
// //   //     const url = await QRCode.toDataURL(vCard);
// //   //     setQrCodeUrl(url);
// //   //     setPublicLink(`https://user.ibizzcarrd.com/${encodeURIComponent(values.name.replace(/\s+/g, '-').toLowerCase())}`);
// //   //   } catch (error) {
// //   //     console.error('Failed to generate QR code:', error);
// //   //   }
// //   // };
// //   const generateQRCode = async (values) => {
// //     const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${values.name}\nEMAIL:${values.email}\nTEL:${values.mobile}\nEND:VCARD`;
// //     try {
// //       const url = await QRCode.toDataURL(vCard);
// //       setQrCodeUrl(url);
  
// //       // Request backend to generate a public link
// //       const response = await fetch('http://localhost:3003/generate-link', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           name: values.name,
// //           profession: values.profession,
// //           facebook: values.facebook,
// //           instagram: values.instagram,
// //           linkedin: values.linkedin,
// //           whatsapp: values.whatsapp,
// //           aboutMe: values.aboutMe,
// //           email: values.email,
// //           mobile: values.mobile,
// //           location: values.location,
// //           appointmentDate: values.appointmentDate,
// //           availableHours: values.availableHours
// //         }),
// //       });
  
// //       const data = await response.json();
// //       setPublicLink(data.publicLink); // Set the generated public link from the backend
// //     } catch (error) {
// //       console.error('Failed to generate QR code or public link:', error);
// //     }
// //   };
  
  
// //   const handleCopy = () => {
// //     navigator.clipboard.writeText(publicLink)
// //       .then(() => {
// //         message.success('Public link copied to clipboard!');
// //       })
// //       .catch((error) => {
// //         console.error('Failed to copy link:', error);
// //         message.error('Failed to copy link.');
// //       });
// //   };

// //   return (
// //     <div className="w-[500px] h-[990px] p-6 bg-gray-100 rounded-lg shadow-lg mx-auto overflow-auto">
// //       <Title level={2} className="text-center mb-4">V-Card Details</Title>
// //       <Form
// //         form={form}
// //         layout="vertical"
// //         onFinish={handleFinish}
// //         className="space-y-4"
// //       >
// //         {/* Cover and Profile Image Uploads */}
// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Cover Image"
// //               name="coverImage"
// //               valuePropName="fileList"
// //               getValueFromEvent={({ fileList }) => fileList}
// //               extra="Upload a cover image for your resume."
// //             >
// //               <Upload
// //                 beforeUpload={() => false}
// //                 listType="picture"
// //                 className="upload-list-inline"
// //                 showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
// //               >
// //                 <Button icon={<UploadOutlined />}>Upload Cover Image</Button>
// //               </Upload>
// //             </Form.Item>
// //           </Col>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Profile Image"
// //               name="profileImage"
// //               valuePropName="fileList"
// //               getValueFromEvent={({ fileList }) => fileList}
// //               extra="Upload a profile image for your resume."
// //             >
// //               <Upload
// //                 beforeUpload={() => false}
// //                 listType="picture"
// //                 className="upload-list-inline"
// //                 showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
// //               >
// //                 <Button icon={<UploadOutlined />}>Upload Profile Image</Button>
// //               </Upload>
// //             </Form.Item>
// //           </Col>
// //         </Row>

// //         {/* Personal Information */}
// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Name"
// //               name="name"
// //               rules={[{ required: true, message: 'Please input your name!' }]}
// //             >
// //               <Input />
// //             </Form.Item>
// //           </Col>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Profession"
// //               name="profession"
// //               rules={[{ required: true, message: 'Please input your profession!' }]}
// //             >
// //               <Input />
// //             </Form.Item>
// //           </Col>
// //         </Row>

// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item label="Facebook" name="facebook">
// //               <Input />
// //             </Form.Item>
// //           </Col>
// //           <Col span={12}>
// //             <Form.Item label="Instagram" name="instagram">
// //               <Input />
// //             </Form.Item>
// //           </Col>
// //         </Row>

// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item label="LinkedIn" name="linkedin">
// //               <Input />
// //             </Form.Item>
// //           </Col>
// //           <Col span={12}>
// //             <Form.Item label="Whatsapp" name="whatsapp">
// //               <Input />
// //             </Form.Item>
// //           </Col>
// //         </Row>

// //         <Divider />

// //         <Form.Item
// //           label="About Me"
// //           name="aboutMe"
// //           rules={[{ required: true, message: 'Please input about yourself!' }]}
// //         >
// //           <Input.TextArea rows={3} />
// //         </Form.Item>

// //         <Divider />

// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Email ID"
// //               name="email"
// //               rules={[{ type: 'email', message: 'The input is not valid E-mail!' }, { required: true, message: 'Please input your email!' }]}
// //             >
// //               <Input />
// //             </Form.Item>
// //           </Col>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Mobile Number"
// //               name="mobile"
// //               rules={[{ required: true, message: 'Please input your mobile number!' }]}
// //             >
// //               <Input />
// //             </Form.Item>
// //           </Col>
// //         </Row>

// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Location"
// //               name="location"
// //               rules={[{ required: true, message: 'Please input your location!' }]}
// //             >
// //               <Input />
// //             </Form.Item>
// //           </Col>
// //         </Row>

// //         <Divider />

// //         <Row gutter={16}>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Appointment Date"
// //               name="appointmentDate"
// //               rules={[{ required: true, message: 'Please select an appointment date!' }]}
// //             >
// //               <DatePicker
// //                 format="YYYY-MM-DD"
// //                 style={{ width: '100%' }}
// //                 size="large"
// //                 inputReadOnly
// //               />
// //             </Form.Item>
// //           </Col>
// //           <Col span={12}>
// //             <Form.Item
// //               label="Available Hours"
// //               name="availableHours"
// //               rules={[{ required: true, message: 'Please select available hours!' }]}
// //             >
// //               <Select placeholder="Select available hours">
// //                 <Select.Option value="12:00 PM">12:00 PM</Select.Option>
// //                 <Select.Option value="3:00 PM">3:00 PM</Select.Option>
// //                 <Select.Option value="6:00 PM">6:00 PM</Select.Option>
// //               </Select>
// //             </Form.Item>
// //           </Col>
// //         </Row>

// //         <Form.Item>
// //           <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white">
// //             Generate Vcard
// //           </Button>
// //         </Form.Item>

// //         {/* QR Code and Public Link Fields */}
// //         {qrCodeUrl && (
// //           <Row gutter={16}>
// //             <Col span={12}>
// //               <Form.Item label="QR Code">
// //                 <img src={qrCodeUrl} alt="QR Code" className="w-full" />
// //               </Form.Item>
// //             </Col>
// //             <Col span={12}>
// //               <Form.Item label="Public Link">
// //                 <Row gutter={8} align="middle">
// //                   <Col flex="auto">
// //                     <Input value={publicLink} readOnly />
// //                   </Col>
// //                   <Col>
// //                     <Button icon={<CopyOutlined />} onClick={handleCopy} />
// //                   </Col>
// //                 </Row>
// //               </Form.Item>
// //             </Col>
// //           </Row>
// //         )}
// //       </Form>
// //     </div>
// //   );
// // };

// // export default ResumeForm;
// 'use client';

// import { Form, Input, Button, Select, Typography, Divider, Upload, Row, Col, DatePicker, message } from 'antd';
// import { UploadOutlined, CopyOutlined } from '@ant-design/icons';
// import 'antd/dist/reset.css';
// import { useState } from 'react';
// import QRCode from 'qrcode';

// const { Title } = Typography;

// const ResumeForm = ({ onSubmit }) => {
//   const [form] = Form.useForm();
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [publicLink, setPublicLink] = useState('');

//   const handleFinish = async (values) => {
//     onSubmit(values);
//     await generateQRCodeAndLink(values);
//   };

//   const generateQRCodeAndLink = async (values) => {
//     const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${values.name}\nEMAIL:${values.email}\nTEL:${values.mobile}\nEND:VCARD`;
//     try {
//       // Generate QR code
//       const url = await QRCode.toDataURL(vCard);
//       setQrCodeUrl(url);
  
//       // Request backend to generate a public link
//       const response = await fetch('http://localhost:3003/generate-link', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: values.name,
//           profession: values.profession,
//           facebook: values.facebook,
//           instagram: values.instagram,
//           linkedin: values.linkedin,
//           whatsapp: values.whatsapp,
//           aboutMe: values.aboutMe,
//           email: values.email,
//           mobile: values.mobile,
//           location: values.location,
//           appointmentDate: values.appointmentDate,
//           availableHours: values.availableHours
//         }),
//       });
  
//       // Check if response is OK
//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }
  
//       const data = await response.json();
//       console.log('Public link data:', data); // Debug output
//       setPublicLink(data.publicLink); // Set the generated public link from the backend
//     } catch (error) {
//       console.error('Failed to generate QR code or public link:', error);
//     }
//   };
  
//   const handleCopy = () => {
//     navigator.clipboard.writeText(publicLink)
//       .then(() => {
//         message.success('Public link copied to clipboard!');
//       })
//       .catch((error) => {
//         console.error('Failed to copy link:', error);
//         message.error('Failed to copy link.');
//       });
//   };

//   return (
//     <div className="w-[500px] h-[990px] p-6 bg-gray-100 rounded-lg shadow-lg mx-auto overflow-auto">
//       <Title level={2} className="text-center mb-4">V-Card Details</Title>
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={handleFinish}
//         className="space-y-4"
//       >
//         {/* Cover and Profile Image Uploads */}
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Cover Image"
//               name="coverImage"
//               valuePropName="fileList"
//               getValueFromEvent={({ fileList }) => fileList}
//               extra="Upload a cover image for your resume."
//             >
//               <Upload
//                 beforeUpload={() => false}
//                 listType="picture"
//                 className="upload-list-inline"
//                 showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
//               >
//                 <Button icon={<UploadOutlined />}>Upload Cover Image</Button>
//               </Upload>
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Profile Image"
//               name="profileImage"
//               valuePropName="fileList"
//               getValueFromEvent={({ fileList }) => fileList}
//               extra="Upload a profile image for your resume."
//             >
//               <Upload
//                 beforeUpload={() => false}
//                 listType="picture"
//                 className="upload-list-inline"
//                 showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
//               >
//                 <Button icon={<UploadOutlined />}>Upload Profile Image</Button>
//               </Upload>
//             </Form.Item>
//           </Col>
//         </Row>

//         {/* Personal Information */}
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Name"
//               name="name"
//               rules={[{ required: true, message: 'Please input your name!' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Profession"
//               name="profession"
//               rules={[{ required: true, message: 'Please input your profession!' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item label="Facebook" name="facebook">
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item label="Instagram" name="instagram">
//               <Input />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item label="LinkedIn" name="linkedin">
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item label="Whatsapp" name="whatsapp">
//               <Input />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Divider />

//         <Form.Item
//           label="About Me"
//           name="aboutMe"
//           rules={[{ required: true, message: 'Please input about yourself!' }]}
//         >
//           <Input.TextArea rows={3} />
//         </Form.Item>

//         <Divider />

//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Email ID"
//               name="email"
//               rules={[{ type: 'email', message: 'The input is not valid E-mail!' }, { required: true, message: 'Please input your email!' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Mobile Number"
//               name="mobile"
//               rules={[{ required: true, message: 'Please input your mobile number!' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Location"
//               name="location"
//               rules={[{ required: true, message: 'Please input your location!' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Divider />

//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Appointment Date"
//               name="appointmentDate"
//               rules={[{ required: true, message: 'Please select an appointment date!' }]}
//             >
//               <DatePicker
//                 format="YYYY-MM-DD"
//                 style={{ width: '100%' }}
//                 size="large"
//                 inputReadOnly
//               />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Available Hours"
//               name="availableHours"
//               rules={[{ required: true, message: 'Please select available hours!' }]}
//             >
//               <Select placeholder="Select available hours">
//                 <Select.Option value="12:00 PM">12:00 PM</Select.Option>
//                 <Select.Option value="3:00 PM">3:00 PM</Select.Option>
//                 <Select.Option value="6:00 PM">6:00 PM</Select.Option>
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white">
//             Generate Vcard
//           </Button>
//         </Form.Item>

//         {/* QR Code and Public Link Fields */}
//         {qrCodeUrl && (
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item label="QR Code">
//                 <img src={qrCodeUrl} alt="QR Code" className="w-full" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Public Link">
//                 <Row gutter={8} align="middle">
//                   <Col flex="auto">
//                     <Input value={publicLink} readOnly />
//                   </Col>
//                   <Col>
//                     <Button icon={<CopyOutlined />} onClick={handleCopy} />
//                   </Col>
//                 </Row>
//               </Form.Item>
//             </Col>
//           </Row>
//         )}
//       </Form>
//     </div>
//   );
// };

// export default ResumeForm;
'use client';

import { Form, Input, Button, Select, Typography, Divider, Upload, Row, Col, DatePicker, message } from 'antd';
import { UploadOutlined, CopyOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { useState } from 'react';
import QRCode from 'qrcode';

const { Title } = Typography;

const ResumeForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [publicLink, setPublicLink] = useState('');

  const handleFinish = async (values) => {
    onSubmit(values);
    await generateQRCode(values);
    await generatePublicLink(values);
  };

  const generateQRCode = async (values) => {
    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${values.name}\nEMAIL:${values.email}\nTEL:${values.mobile}\nEND:VCARD`;
    try {
      const url = await QRCode.toDataURL(vCard);
      setQrCodeUrl(url);
    } catch (error) {
      console.error('Failed to generate QR code:', error);
    }
  };

  const generatePublicLink = async (values) => {
    try {
      const response = await fetch('https://template-api-kmu4.vercel.app/generate-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          profession: values.profession,
          facebook: values.facebook,
          instagram: values.instagram,
          linkedin: values.linkedin,
          whatsapp: values.whatsapp,
          aboutMe: values.aboutMe,
          email: values.email,
          mobile: values.mobile,
          location: values.location,
          appointmentDate: values.appointmentDate,
          availableHours: values.availableHours
        }),
      });


      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPublicLink(data.publicLink); // Set the generated public link from the backend
    } catch (error) {
      console.error('Failed to generate public link:', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(publicLink)
      .then(() => {
        message.success('Public link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy link:', error);
        message.error('Failed to copy link.');
      });
  };

  return (
    <div className="w-[500px] h-[990px] p-6 bg-gray-100 rounded-lg shadow-lg mx-auto overflow-auto">
      <Title level={2} className="text-center mb-4">V-Card Details</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="space-y-4"
      >
        {/* Cover and Profile Image Uploads */}
        <Row gutter={16}>
          <Col span={12}>
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
          </Col>
          <Col span={12}>
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
          </Col>
        </Row>

        {/* Personal Information */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Profession"
              name="profession"
              rules={[{ required: true, message: 'Please input your profession!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Facebook" name="facebook">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Instagram" name="instagram">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="LinkedIn" name="linkedin">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Whatsapp" name="whatsapp">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        <Form.Item
          label="About Me"
          name="aboutMe"
          rules={[{ required: true, message: 'Please input about yourself!' }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <Divider />

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email ID"
              name="email"
              rules={[{ type: 'email', message: 'The input is not valid E-mail!' }, { required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Mobile Number"
              name="mobile"
              rules={[{ required: true, message: 'Please input your mobile number!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: 'Please input your location!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Appointment Date"
              name="appointmentDate"
              rules={[{ required: true, message: 'Please select an appointment date!' }]}
            >
              <DatePicker
                format="YYYY-MM-DD"
                style={{ width: '100%' }}
                size="large"
                inputReadOnly
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Available Hours"
              name="availableHours"
              rules={[{ required: true, message: 'Please select available hours!' }]}
            >
              <Select placeholder="Select available hours">
                <Select.Option value="12:00 PM">12:00 PM</Select.Option>
                <Select.Option value="3:00 PM">3:00 PM</Select.Option>
                <Select.Option value="6:00 PM">6:00 PM</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white">
            Generate Vcard
          </Button>
        </Form.Item>

        {/* QR Code and Public Link Fields */}
        {qrCodeUrl && (
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="QR Code">
                <img src={qrCodeUrl} alt="QR Code" className="w-full" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Public Link">
                <Row gutter={8} align="middle">
                  <Col flex="auto">
                    <Input value={publicLink} readOnly />
                  </Col>
                  <Col>
                    <Button icon={<CopyOutlined />} onClick={handleCopy} />
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>
        )}
      </Form>
    </div>
  );
};

export default ResumeForm;

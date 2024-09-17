'use client';

import { Typography, Divider, Card, Avatar, Space, Button } from 'antd';
import 'antd/dist/reset.css';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined, LinkOutlined } from '@ant-design/icons';
import { useMemo, useState } from 'react';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const { Title, Text } = Typography;

const ResumeTemplate = ({ resumeData }) => {
  const {
    coverImage,
    profileImage,
    name,
    profession,
    facebook,
    instagram,
    linkedin,
    whatsapp,
    other,
    aboutMe,
    email,
    mobile,
    dob,
    location,
    appointmentDate,
    availableHours,
  } = resumeData;

  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const coverImageURL = useMemo(() => coverImage && URL.createObjectURL(coverImage[0]?.originFileObj), [coverImage]);
  const profileImageURL = useMemo(() => profileImage && URL.createObjectURL(profileImage[0]?.originFileObj), [profileImage]);

  const generateQRCode = async () => {
    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nEMAIL:${email}\nTEL:${mobile}\nEND:VCARD`;
    try {
      const url = await QRCode.toDataURL(vCard);
      setQrCodeUrl(url);
    } catch (error) {
      console.error('Failed to generate QR code:', error);
    }
  };

  const generatePDF = async () => {
    const element = document.getElementById('resume-template');
    if (!element) return;
  
    // Capture the HTML content without QR code
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / imgHeight;
      const height = pdfWidth / ratio;
  
      let heightLeft = imgHeight;
      let position = 0;
  
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, height);
      heightLeft -= pdfHeight;
  
      while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, height);
        heightLeft -= pdfHeight;
      }
  
      pdf.save('resume.pdf');
    });
  };

  // Helper function to format date
  const formatDate = (date) => {
    return date ? new Date(date).toLocaleDateString() : '';
  };

  return (
    <div className="relative bg-[#1E1F29] text-white w-[428px] h-[1200px] mx-auto p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl" id="resume-template">
      {/* Container 1: Cover Image and Profile Image */}
      <div className="relative w-full h-[250px] overflow-hidden rounded-t-lg">
        {coverImageURL && (
          <img
            alt="Cover"
            src={coverImageURL}
            className="w-full h-full object-cover filter brightness-60 transition-transform duration-700 hover:scale-105"
          />
        )}
      </div>
      {profileImageURL && (
        <div className="relative w-full flex justify-center -mt-[60px]">
          <Avatar
            size={120}
            src={profileImageURL}
            className="border-4 border-[#1E1F29] shadow-xl transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}

      {/* Name, Profession, and Social Media Icons */}
      <div className="mt-[20px] text-center">
        <Title level={3} style={{ color: '#ffff' }} className="font-semibold text-[22px] leading-[28px] text-white tracking-wide transition-colors duration-300 hover:text-[#00D4FF]">
          {name}
        </Title>
        <Text className="text-[#B0B0B0] text-[16px] leading-[20px] font-light">{profession}</Text>

        <Divider className="bg-[#606060] w-[140px] mx-auto mt-[16px]" />

        <Space size="middle">
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FacebookOutlined className="text-white transition-transform duration-300 hover:text-[#4267B2] hover:rotate-6 hover:scale-125" />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <InstagramOutlined className="text-white transition-transform duration-300 hover:text-[#E1306C] hover:rotate-6 hover:scale-125" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="text-white transition-transform duration-300 hover:text-[#0077B5] hover:rotate-6 hover:scale-125" />
            </a>
          )}
          {whatsapp && (
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
              <WhatsAppOutlined className="text-white transition-transform duration-300 hover:text-[#25D366] hover:rotate-6 hover:scale-125" />
            </a>
          )}
          {other && (
            <a href={other} target="_blank" rel="noopener noreferrer">
              <LinkOutlined className="text-white transition-transform duration-300 hover:text-[#00D4FF] hover:rotate-6 hover:scale-125" />
            </a>
          )}
        </Space>
      </div>

      {/* About Me Section */}
      <Card className="mt-[30px] bg-[#2A2B35] border-none rounded-lg shadow-lg w-[360px] mx-auto p-5 transition-transform duration-500 hover:translate-y-1 hover:shadow-2xl">
        <Title level={3} style={{ color: '#ffff' }} className="text-white text-[16px] font-semibold ">About Me</Title>
        <Text className="text-[#D0D0D0] text-[14px] leading-[20px] font-light">{aboutMe}</Text>
      </Card>

      {/* Contact Details Section */}
      <Card className="mt-6 bg-[#2A2B35] border-none rounded-lg shadow-lg w-[360px] mx-auto p-5 transition-transform duration-500 hover:translate-y-1 hover:shadow-2xl">
        <Title level={3} style={{ color: '#ffff' }} className="style={{ color: '#ffff' }}text-white text-[16px] font-semibold">Contact Information</Title>
        <Text className="text-[#D0D0D0]">Email: {email}</Text><br />
        <Text className="text-[#D0D0D0]">Mobile: {mobile}</Text><br />
        <Text className="text-[#D0D0D0]">Date of Birth: {formatDate(dob)}</Text><br />
        <Text className="text-[#D0D0D0]">Location: {location}</Text>
      </Card>

      {/* Appointment Section */}
      <Card className="mt-6 bg-[#2A2B35] border-none rounded-lg shadow-lg w-[360px] mx-auto p-5 transition-transform duration-500 hover:translate-y-1 hover:shadow-2xl">
        <Title level={3} style={{ color: '#ffff' }} className="text-white text-[16px] font-semibold">Appointment</Title>
        <div className="text-[#D0D0D0]">
          <Text className=" text-[#D0D0D0] block text-[14px] font-semibold">Date:</Text>
          <Text className="text-[#D0D0D0] text-[14px]">{formatDate(appointmentDate)}</Text>
          <br />
          <Text className="text-[#D0D0D0] block text-[14px] font-semibold">Available Hours:</Text>
          <Text className=" text-[#D0D0D0] text-[14px]">{availableHours}</Text>
        </div>
      </Card>

      {/* QR Code and Buttons */}
      <div className="text-center mt-6">
        {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" className="mx-auto mb-4" />}
        {/* <Button type="primary" onClick={generateQRCode} className="mr-4">Generate QR Code</Button> */}
        <Button type="primary" onClick={generatePDF}>Generate PDF</Button>
      </div>
    </div>
  );
};

export default ResumeTemplate;

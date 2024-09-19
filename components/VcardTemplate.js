'use client';
import { Typography } from 'antd';
import 'antd/dist/reset.css';
import { FacebookOutlined, InstagramOutlined, ClockCircleOutlined, CalendarOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, WhatsAppOutlined, LinkOutlined } from '@ant-design/icons';
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
const coverImageUrl = useMemo(() => coverImage && URL.createObjectURL(coverImage[0]?.originFileObj), [coverImage]);
const profileImageUrl = useMemo(() => profileImage && URL.createObjectURL(profileImage[0]?.originFileObj), [profileImage]);
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
<div id="resume-template" className="w-[428px] h-[926px] bg-[#033637] rounded-lg shadow-lg relative overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105">
   <img src={coverImageUrl || '/default-cover.jpg'} alt="Cover Image" className="w-full h-[283px] object-cover absolute top-0 left-0 border-b-4 border-[#4CAF50] transition-opacity duration-700 ease-in-out opacity-90 hover:opacity-100" />
   <img src={profileImageUrl || '/default-profile.jpg'} alt="Profile Image" className="w-[106px] h-[105px] rounded-full border-4 border-white shadow-lg absolute top-[160px] left-[26px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />
   <div className="absolute top-[307px] left-0 w-full h-[130px] bg-[#033637] p-[22px] box-border transition-opacity duration-500 ease-in-out opacity-90 hover:opacity-100">
      <div className="text-2xl font-bold font-serif text-[#C29843] transition-transform duration-500 ease-in-out transform hover:scale-105">{name || 'John Doe'}</div>
      <div className="text-lg text-[#CDECEE] mt-2 animate-fadeIn">{profession || 'Software Engineer'}</div>
      <div className="mt-2 text-[#719D9E] text-sm leading-6">{aboutMe || 'Experienced software engineer with expertise in building scalable applications.'}</div>
   </div>
   <div className="absolute top-[480px] left-0 w-full p-[20px] box-border flex flex-col gap-4 text-white">
      <h2 className="text-xl font-serif text-center border-b-2 border-[#B07F2A] pb-2">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <div className="flex items-center bg-[#1D4F4F] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <MailOutlined className="text-[#B07E33] mr-3 text-2xl" />
            <div className="flex-1">
               <strong className="block text-sm font-medium text-[#719D9E]">Email:</strong>
               <span className="text-sm break-words">{email || 'john.doe@example.com'}</span>
            </div>
         </div>
         <div className="flex items-center bg-[#1D4F4F] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <PhoneOutlined className="text-[#B07E33] mr-3 text-2xl" />
            <div>
               <strong className="block text-sm font-medium text-[#719D9E]">Mobile:</strong>
               <span className="text-sm ">{mobile || '+123 456 7890'}</span>
            </div>
         </div>
         <div className="flex items-center bg-[#1D4F4F] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <EnvironmentOutlined className="text-[#B07E33] mr-3 text-2xl" />
            <div>
               <strong className="block text-sm font-medium text-[#719D9E]">Location:</strong>
               <span className="text-sm">{location || 'New York, USA'}</span>
            </div>
         </div>
         <div className="flex items-center bg-[#1D4F4F] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <CalendarOutlined className="text-[#B07E33] mr-3 text-2xl" />
            <div>
               <strong className="block text-sm font-medium text-[#719D9E]">Appointment Date:</strong>
               <span className="text-sm">{formatDate(appointmentDate) || '01/01/2025'}</span>
            </div>
         </div>
         <div className="flex items-center bg-[#1D4F4F] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <ClockCircleOutlined className="text-[#B07E33] mr-3 text-2xl" />
            <div>
               <strong className="block text-sm font-medium text-[#719D9E]">Available Hours:</strong>
               <span className="text-sm ">{availableHours || '9 AM - 5 PM'}</span>
            </div>
         </div>
      </div>
   </div>
   <div className="absolute top-[460px] left-0 w-full flex justify-center items-center space-x-6 mt-[-15px]">
      {facebook && (
      <div className="flex items-center justify-center bg-[#033637] rounded-full border border-silver w-12 h-12">
         <FacebookOutlined className="text-silver text-3xl text-[#B07E33]" />
      </div>
      )}
      {instagram && (
      <div className="flex items-center justify-center bg-[#033637] rounded-full border border-silver w-12 h-12">
         <InstagramOutlined className="text-silver text-3xl text-[#B07E33]" />
      </div>
      )}
      {linkedin && (
      <div className="flex items-center justify-center bg-[#033637] rounded-full border border-silver w-12 h-12">
         <LinkedinOutlined className="text-silver text-3xl text-[#B07E33]" />
      </div>
      )}
      {whatsapp && (
      <div className="flex items-center justify-center bg-[#033637] rounded-full border border-silver w-12 h-12">
         <WhatsAppOutlined className="text-silver text-3xl text-[#B07E33]" />
      </div>
      )}
      {other && (
      <div className="flex items-center justify-center bg-[#033637] rounded-full border border-silver w-12 h-12">
         <LinkOutlined className="text-silver text-3xl text-[#B07E33]" />
      </div>
      )}
   </div>
   <div className="absolute bottom-[20px] left-0 w-full text-center text-xs font-serif text-white flex items-center justify-center">
      <div className="flex-1 border-t border-silver"></div>
      <strong className="mx-4">Appointment Details:</strong>
      <div className="flex-1 border-t border-silver"></div>
   </div>
</div>
);
};
export default ResumeTemplate;

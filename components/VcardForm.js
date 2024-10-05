"use client";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import testimonials from "../asset/images/image 3.svg";
import star from "../asset/images/Vector (4).svg";
import { Select,message,Modal,Button } from 'antd';
import axios from 'axios';
const { Option } = Select;

export default function CustomForm() {
  const router = useRouter();
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState(Array(4).fill(null));
  const [productImages, setProductImages] = useState(Array(4).fill(null));
  const [serviceImages, setServiceImages] = useState(Array(4).fill(null));
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [publicLink, setPublicLink] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [location, setLocation] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [availableHours, setAvailableHours] = useState("");
  const [profession, setProfession] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false); // Modal state
  const [qrCode, setQRCode] = useState(""); // State to store generated QR code

  const dates = [
    { day: 7, dayName: 'Mon' },
    { day: 8, dayName: 'Tue' },
    { day: 9, dayName: 'Wed' },
    { day: 10, dayName: 'Thu' },
  ];
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to hide the modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleGalleryUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedGalleryImages = [...galleryImages];
      updatedGalleryImages[index] = URL.createObjectURL(file);
      setGalleryImages(updatedGalleryImages);
    }
  };
  const [loadingLink, setLoadingLink] = useState(false);
  const [loadingQRCode, setLoadingQRCode] = useState(false);

  const generatePublicLink = async () => {
    setLoadingLink(true);
    try {
      const formData = new FormData();
      formData.append("coverImage", coverImage);
      formData.append("profileImage", profileImage);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("mobile", mobile);
      formData.append("aboutMe", aboutMe);
      formData.append("location", location);
      formData.append("appointmentDate", appointmentDate);
      formData.append("availableHours", availableHours);
      formData.append("profession", profession);
      formData.append("facebook", facebook);
      formData.append("instagram", instagram);
      formData.append("whatsapp", whatsapp);
      formData.append("galleryImages",galleryImages);
      formData.append("serviceImages", serviceImages);
      formData.append("productImages",productImages);
      const response = await axios.post("https://template-api-kmu4.vercel.app/generate-link", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPublicLink(response.data.link);
      setQRCode(response.data.qrCode); // Store the generated QR code
      message.success("Public link generated successfully!");
      showModal(); // Show the modal after the link is generated
    } catch (error) {
      message.error("Error generating public link: " + error.message);
    } finally {
      setLoadingLink(false);
    }
  };
  

  // const generateQRCode = async () => {
  //   setLoadingQRCode(true);
  //   try {
  //     const response = await axios.post('http://localhost:3003/generate-link', {
  //       // Add any necessary data here
  //     });
  //     message.success('QR code generated successfully: ' + response.data.qrCode);
  //   } catch (error) {
  //     message.error('Error generating QR code: ' + error.message);
  //   } finally {
  //     setLoadingQRCode(false);
  //   }
  // };
  const handleProductUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedProductImages = [...productImages];
      updatedProductImages[index] = URL.createObjectURL(file);
      setProductImages(updatedProductImages);
    }
  };
  const handleRemoveGalleryImage = (index) => {
    const newGalleryImages = [...galleryImages];
    newGalleryImages[index] = null;
    setGalleryImages(newGalleryImages);
  };

  const handleRemoveProductImage = (index) => {
    const newProductImages = [...productImages];
    newProductImages[index] = null;
    setProductImages(newProductImages);
  };
  const handleLogout = () => {
    router.push("/login");
  };

 
  return (
    <div className="bg-white max-w-6xl mx-auto p-8 shadow-lg rounded-lg border border-gray-300 flex gap-8">
      {/* Left Form Section */}
      <div className="flex-1">
        {/* Cover Image */}
        <div className="relative w-full h-80 mb-10 rounded-lg overflow-hidden">
          {coverImage ? (
            <Image
              src={URL.createObjectURL(coverImage)}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <div className="bg-gray-300 h-full flex items-center justify-center">
              <span className="text-gray-500 bg-[#40A8C4]">Cover Image</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />

          {/* Profile Image overlapping Cover Image */}
          <div
            className="absolute w-32 h-32 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center"
            style={{ top: "60%" }}
          >
            {profileImage ? (
              <Image
                src={URL.createObjectURL(profileImage)}
                alt="Profile Image"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            ) : (
              <span className="text-gray-500 bg-[#40A8C4]">Profile Image</span>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfileImage(e.target.files[0])}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="mb-6">
          <label className="text-sm font-noto text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
          />
        </div>
        <div className="mb-6">
          <label className="text-sm font-noto text-gray-600">Profession</label>
          <input
            type="profession"
            placeholder="Enter Your Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
          />
        </div>
        {/* About Me Section */}
          <div className="mb-6">
            <label className="text-sm font-noto text-gray-600">About Me</label>
            <textarea
              placeholder="Tell us about yourself"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105 h-24 resize-none"
            />
          </div>
        {/* Email and Mobile */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-sm font-noto text-gray-600">Email Id</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
            />
          </div>
          <div>
            <label className="text-sm font-noto text-gray-600">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="text-sm font-noto text-gray-600">Location</label>
          <input
            type="location"
            placeholder="Enter Your Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
          />
        </div>
        {/* Social Media Links */}
        <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="mb-8">
          <label className="text-sm font-noto text-gray-600">Social Media Accounts</label>
          <div className="relative mt-2">
            <select
              value={selectedSocialMedia}
              onChange={(e) => setSelectedSocialMedia(e.target.value)}
              className="w-full h-[56px] px-4 py-2 border border-[#CCCCCC] rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 bg-[#40A8C4] text-white appearance-none pr-10" // Added pr-10 for padding
            >
              <option value="" className="w-full py-4 border-b-0 opacity-100 bg-[#40A8C4] text-white">
                Select Account
              </option>
              <option value="linkedin" className="bg-[#40A8C4] text-white">
                LinkedIn
              </option>
              <option value="facebook" className="bg-[#40A8C4] text-white">
                Facebook
              </option>
              <option value="instagram" className="bg-[#40A8C4] text-white">
                Instagram
              </option>
            </select>
            {/* Dropdown Arrow Icon */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06 0L10 10.64l3.71-3.43a.75.75 0 111.06 1.06l-4.25 4a.75.75 0 01-1.06 0l-4.25-4a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

          <div>
            <label className="text-sm font-noto text-gray-600">Public Link</label>
            <input
              type="text"
              value={publicLink}
              onChange={(e) => setPublicLink(e.target.value)}
              placeholder="Paste your public link here"
              className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-8">
          <h2 className="text-lg font-noto text-gray-700">Gallery</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative w-49 h-44 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center"
              >
                {image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <button
                    onClick={() => handleRemoveGalleryImage(index)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-200"
                  >
                    <span className="text-white text-lg">X</span>
                  </button>
                </div>
                  
                ) : (
                  <label className="relative flex items-center justify-center">
                    <span className="text-grey-800 bg-[#40A8C4] flex items-center justify-center"
                      style={{
                        width: "120px",
                        height: "35px",
                        borderRadius: "13px 0px 0px 0px",
                        opacity: 0.3,
                      }}
                    >
                      + Add Image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleGalleryUpload(index, e)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <!-- Testimonials Section --> */}
        <div className="mb-8 px-7 shadow-lg rounded-r-2xl bg-[#0000000D] w-[618px] h-[350px]">
          <h2 className="text-lg font-noto text-gray-700">Testimonials</h2>
          <div className="flex items-start gap-4 mt-4">
            <div className="flex flex-row items-start gap-6 w-full">
              {/* Left Image Section */}
              <div className="w-[230px] h-[255px] shadow-md rounded-r-[40px] bg-[#0000000D] flex-shrink-0">
                <Image
                  src={testimonials}
                  alt="Testimonial Image"
                  width={230}
                  height={255}
                  className="rounded-l-md"
                />
              </div>

              {/* Right Content Section */}
              <div className="flex flex-col justify-start w-full">
                <h3 className="text-[20px] font-bold text-[#2A2A2A] leading-[24.2px]">Anita Anastasya</h3>
                <div className="flex items-center mt-2">
                  {/* Star Rating */}
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      src={star}
                      alt="Star Rating"
                      width={17.11}
                      height={16.36}
                      className="ml-[0.44px] mt-[0.57px]"
                      // style={{
                      //   backgroundColor: "#006557",
                      //   opacity: 1,
                      // }}
                    />
                  ))}
                </div>
                <p className="text-[18px] font-medium leading-7 mt-4 text-[#535353]">
                  Lorem ipsum dolor sit amet consectetur. Est id consectetur elementum gravida vulputate lacinia in. Condimentum pretium eget sit suspendisse tincidunt ac. Blandit eget egestas nunc dolor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-noto text-gray-700">Products</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {productImages.map((image, index) => (
              <div
                key={index}
                className="relative w-49 h-44 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center"
              >
                {image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <button
                    onClick={() => handleRemoveProductImage(index)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-200"
                  >
                    <span className="text-white text-lg">X</span>
                  </button>
                </div>
                ) : (
                  <label className="relative flex items-center justify-center">
                    <span className="text-grey-800 bg-[#40A8C4] flex items-center justify-center"
                      style={{
                        width: "120px",
                        height: "35px",
                        borderRadius: "13px 0px 0px 0px",
                        opacity: 0.3,
                      }}
                    >
                      + Add Image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleProductUpload(index, e)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Date and Time */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="text-sm font-noto text-gray-600">Appointment Date</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
            />
          </div>
          <div>
            <label className="text-sm font-noto text-gray-600">Appointment Time</label>
            <input
              type="time"
              value={availableHours}
              onChange={(e) => setAvailableHours(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
            />
          </div>
        </div>
              {/* Save & Generate Buttons */}
      <div className="flex gap-4 mt-12">
        <button className="px-6 py-3 bg-[#40A8C4] text-white font-noto rounded-lg shadow-lg hover:bg-[#1E809C] transition duration-300 transform hover:scale-105">
          Save
        </button>
        {/* <button className="px-6 py-3 bg-[#40A8C4] text-white font-noto rounded-lg shadow-lg hover:bg-[#1E809C] transition duration-300 transform hover:scale-105" onClick={generateQRCode}>
          Generate QR Code
        </button> */}
        <button
          onClick={generatePublicLink}
          className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
          disabled={loadingLink}
        >
          {loadingLink ? 'Generating Link...' : 'Generate Public Link and QR code'}
        </button>
        <Modal
        title="Generated Public Link"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <div className="text-center">
          <p>Here is your public link:</p>
          <a href={publicLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            {publicLink}
          </a>

          {/* QR code section */}
          {qrCode && (
            <div className="mt-4">
              <p>Here is your QR Code:</p>
              <Image
                src={qrCode}
                alt="QR Code"
                width={200}
                height={200}
              />
            </div>
          )}
        </div>
      </Modal>
      </div>
    </div>
    
      <div className="flex-1 w-[450px] h-[1560px] bg-[conic-gradient(from_-71.84deg_at_50%_50%,_#191B1C_0deg,_#5E060E_360deg)] p-6 rounded-lg shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-white tracking-wide animate-fadeIn">Preview</h2>

        <div className="flex flex-col items-center mb-4">
          {coverImage ? (
            <Image
              src={URL.createObjectURL(coverImage)}
              alt="Cover Image Preview"
              width={400}
              height={200}
              className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            />
          ) : (
            <div className="bg-gray-600 h-40 w-full rounded-lg flex items-center justify-center text-gray-300 shadow-md">
              <span>No Cover Image Selected</span>
            </div>
          )}

          {/* Profile Image */}
          <div className="relative w-32 h-32 mt-[-40px] mb-4 rounded-full border-4 border-white bg-gray-200 shadow-lg overflow-hidden transition-all duration-300 hover:scale-110">
            {profileImage ? (
              <Image
                src={URL.createObjectURL(profileImage)}
                alt="Profile Image Preview"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            ) : (
              <span className="text-gray-500 flex items-center justify-center">No Profile Image</span>
            )}
          </div>

          <h1 className="mt-2 text-center font-bold text-[32px] leading-[35.2px] tracking-[-0.01em] text-white opacity-100" style={{ width: '230px', height: '18px' }}>
            {name || "Not Provided"}
          </h1>

          <h2 className="mt-1 text-center font-light text-[15px] leading-[16.5px] tracking-[-0.01em] text-gray-300 opacity-90" style={{ width: '172px', height: '17px' }}>
            {profession || "Designation"}
          </h2>
        </div>

        {/* Social Icons with Ant Design & Animations */}
        <div className="flex justify-center gap-4 my-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
            <FacebookOutlined className="text-3xl text-white hover:text-[#3b5998] animate-bounce" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
            <InstagramOutlined className="text-3xl text-white hover:text-[#E1306C] animate-bounce" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
            <LinkedinOutlined className="text-3xl text-white hover:text-[#0077b5] animate-bounce" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
            <YoutubeOutlined className="text-3xl text-white hover:text-[#FF0000] animate-bounce" />
          </a>
        </div>

          {/* About Me Section */}
          <div className="mb-6">
            <div className="w-[343px] h-[97.43px] bg-[#F9FEFF] border border-gray-500 rounded-lg shadow-lg p-4 bg-opacity-80 animate-slideIn">
              <h3 className="text-[20px] font-semibold font-poppins text-gray-800 mb-2 tracking-wide">About Me</h3>
              <p className="text-[14px] font-normal font-poppins leading-[22px] tracking-[0.02em] text-justify text-gray-600">
                {aboutMe || "No about me information provided."}
              </p>
            </div>
          </div>

            {/* Gallery Section */}
            <h3 className="font-poppins font-medium text-2xl mt-6 text-white">Gallery:</h3>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-[90px] h-[90px] rounded-md overflow-hidden flex items-center justify-center bg-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
                    style={{
                      boxShadow: "0px 2px 5px 0px rgba(255, 255, 255, 0.5)", // Adjust box shadow
                      opacity: 0.8, // Set opacity as required
                    }}
                  >
                    {image ? (
                      <Image
                        src={image}
                        alt={`Gallery Image Preview ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-opacity duration-300 ease-in-out"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-gray-500 text-center p-2">No Image</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
        {/* Products Section */}
        <h3 className="font-bold text-lg mt-6 text-white">Products:</h3>
          <div className="grid grid-cols-4 gap-4 mt-4">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-[90px] h-[90px] rounded-[30px] overflow-hidden flex items-center justify-center bg-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
                  style={{
                    boxShadow: "0px 2px 10px 0px #FF0052", // Adjust box shadow
                    opacity: 0.8, // Set opacity as required
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.0001) 57.4%, rgba(0, 0, 0, 0.718859) 68.88%, rgba(0, 0, 0, 0.640024) 99.54%)", // Background gradient
                  }}
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={`Product Image Preview ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300 ease-in-out"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-500 text-center p-2">No Image</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <h3 className="font-bold text-lg mt-6 text-white">Services</h3>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {serviceImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-[75px] h-[75px] border-2 border-[#D11325] rounded-[20px] overflow-hidden flex items-center justify-center bg-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
                  style={{
                    opacity: 0.8, // Set opacity as required
                    boxShadow: "0px 2px 5px rgba(255, 255, 255, 0.5)", // Adjust box shadow
                  }}
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={`Service Image Preview ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300 ease-in-out"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-500 text-center p-2">No Image</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <h3 className="font-bold text-lg mt-6 text-white">Schedules</h3>
            <div className="relative mt-2">
              <Select
                defaultValue="August"
                className="w-full text-black rounded-md shadow-md"
                dropdownClassName="rounded-md shadow-lg"
                style={{
                  width: '150px', // Width of the dropdown
                  background: '#F7F8F8',
                  border: '2px solid #D11325',
                }}
              >
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                  <Option key={month} value={month}>
                    {month}
                  </Option>
                ))}
              </Select>
            </div>

             {/* Date and Day Container */}
              <div className="mt-4 flex items-start space-x-4">
                {dates.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-[#CE014D] border-2 border-[#F7F8F8] rounded-[15px]"
                    style={{
                      width: '80px', // Width of the date container
                      height: '64px',
                    }}
                  >
                    <span className="font-poppins text-[16px] font-semibold leading-[12px] tracking-[0.02em] text-white">
                      {item.day}
                    </span>
                    <span className="font-poppins text-[12px] font-medium leading-[12px] tracking-[0.02em] text-white">
                      {item.dayName}
                    </span>
                  </div>
                ))}
              </div>
              <h3 className="font-rubik font-medium text-[16px] leading-[18.96px] text-white mb-6 mt-5">
                 Available Time
              </h3>
              <div className="flex space-x-4">
        {/* Time Slot 1 */}
        <div className="flex flex-col items-center justify-center bg-[#EFE7FF] rounded-lg w-[60px] h-[60px]">
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">10:00</span>
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">AM</span>
        </div>

        {/* Time Slot 2 */}
        <div className="flex flex-col items-center justify-center bg-[#EFE7FF] rounded-lg w-[60px] h-[60px]">
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">12:00</span>
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">PM</span>
        </div>

        {/* Time Slot 3 */}
        <div className="flex flex-col items-center justify-center bg-[#EFE7FF] rounded-lg w-[60px] h-[60px]">
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">2:00</span>
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">PM</span>
        </div>

        {/* Time Slot 4 */}
        <div className="flex flex-col items-center justify-center bg-[#EFE7FF] rounded-lg w-[60px] h-[60px]">
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">4:00</span>
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">PM</span>
        </div>

        {/* Time Slot 5 */}
        <div className="flex flex-col items-center justify-center bg-[#EFE7FF] rounded-lg w-[60px] h-[60px]">
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">6:00</span>
          <span className="font-rubik text-[13px] font-normal leading-[15.41px] text-center">PM</span>
        </div>
      </div>
      <div className="flex justify-center mt-4">
      <button
        className="w-[332px] h-[58px] bg-gradient-to-r from-[#DD0089] to-[#B90000] rounded-[15px] shadow-[0px_5px_10px_rgba(255,0,0,0.5)] text-white font-bold tracking-wider hover:bg-[#B00013] transition duration-300"
      >
        Book Appointment
      </button>
    </div>
      </div>
    </div>
  );
}


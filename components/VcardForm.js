// "use client"
// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// export default function CustomForm() {
//   const router = useRouter();
//   const [coverImage, setCoverImage] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);
//   const [galleryImages, setGalleryImages] = useState(Array(4).fill(null));
//   const [productImages, setProductImages] = useState(Array(4).fill(null));
//   const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
//   const [publicLink, setPublicLink] = useState("");
//   const handleGalleryUpload = (index, event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const updatedGalleryImages = [...galleryImages];
//       updatedGalleryImages[index] = URL.createObjectURL(file);
//       setGalleryImages(updatedGalleryImages);
//     }
//   };

//   const handleProductUpload = (index, event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const updatedProductImages = [...productImages];
//       updatedProductImages[index] = URL.createObjectURL(file);
//       setProductImages(updatedProductImages);
//     }
//   };
//   const handleLogout =()=>{
//     router.push('/login')
//   }
//   return (
//     <div className="bg-white max-w-3xl mx-auto p-8 shadow-lg rounded-lg border border-gray-300">
//       {/* <div className="mb-4">
//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 bg-red-600 text-white font-noto rounded-lg shadow-lg hover:bg-red-500 transition duration-300 transform hover:scale-105"
//         >
//           Logout
//         </button>
//       </div> */}
//       {/* Cover Image */}
//       <div className="relative w-full h-80 mb-10 rounded-lg overflow-hidden ">
//           {coverImage ? (
//             <Image
//               src={URL.createObjectURL(coverImage)}
//               alt="Cover Image"
//               layout="fill"
//               objectFit="cover"
//             />
//           ) : (
//             <div className="bg-gray-300 h-full flex items-center justify-center">
//               <span className="text-gray-500 bg-[#40A8C4]">Cover Image</span>
//             </div>
//           )}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setCoverImage(e.target.files[0])}
//             className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
//           />

//           {/* Profile Image overlapping Cover Image */}
//           <div className="absolute w-32 h-32 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center" style={{ top: '60%' }}>
//             {profileImage ? (
//               <Image
//                 src={URL.createObjectURL(profileImage)}
//                 alt="Profile Image"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-full"
//               />
//             ) : (
//               <span className="text-gray-500 bg-[#40A8C4]">Profile Image</span>
//             )}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setProfileImage(e.target.files[0])}
//               className="absolute inset-0 opacity-0 cursor-pointer"
//             />
//           </div>
//         </div>


//       {/* Full Name */}
//       <div className="mb-6">
//         <label className="text-sm font-noto text-gray-600">Full Name</label>
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
//         />
//       </div>
      
//       {/* Email and Mobile */}
//       <div className="grid grid-cols-2 gap-6 mb-6">
//         <div>
//           <label className="text-sm font-noto text-gray-600">EmailId</label>
//           <input
//             type="email"
//             placeholder="Enter Your Email"
//             className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
//           />
//         </div>
//         <div>
//           <label className="text-sm font-noto text-gray-600">Mobile Number</label>
//           <input
//             type="tel"
//             placeholder="Enter Mobile Number"
//             className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
//           />
//         </div>
//       </div>
//       <div className="mb-6">
//         <label className="text-sm font-noto text-gray-600">Location</label>
//         <input
//           type="location"
//           placeholder="Enter Your Location"
//           className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
//         />
//       </div>
//       <div className="mb-6">
//         <label className="text-sm font-noto text-gray-600">Our Services</label>
//         <input
//           type="our-services"
//           placeholder="Enter Your Services"
//           className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
//         />
//       </div>
//       {/* Social Media Links */}
//       <div className="grid grid-cols-2 gap-6 mb-8">
//         <div>
//           <label className="text-sm font-noto text-gray-600">Social Media Accounts</label>
//           <select
//             value={selectedSocialMedia}
//             onChange={(e) => setSelectedSocialMedia(e.target.value)}
//             className="w-[350px] h-[56px] mt-2 px-4 py-2 border border-[#CCCCCC] rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 bg-[#40A8C4] text-white appearance-none"
//           >
//             <option value="" className="w-full py-4 border-b-0 opacity-100 bg-[#40A8C4] text-white">
//               Select Account
//             </option>
//             <option value="linkedin" className="w-full py-4 border-b-0 opacity-100 bg-[#40A8C4] text-white">
//               LinkedIn
//             </option>
//             <option value="facebook" className="w-full py-4 border-b-0 opacity-100 bg-[#40A8C4] text-white">
//               Facebook
//             </option>
//             <option value="instagram" className="w-full py-4 border-b-0 opacity-100 bg-[#40A8C4] text-white">
//               Instagram
//             </option>
//           </select>
//         </div>
//         <div>
//           <label className="text-sm font-noto text-gray-600">Public Link</label>
//           <input
//             type="text"
//             value={publicLink}
//             onChange={(e) => setPublicLink(e.target.value)}
//             placeholder="Paste your public link here"
//             className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
//           />
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="mb-8">
//         <h2 className="text-lg font-noto text-gray-700">Gallery</h2>
//         <div className="grid grid-cols-4 gap-4 mt-4">
//         {galleryImages.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative w-44 h-44 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center"
//               >
//                 {image ? (
//                   <Image
//                     src={image}
//                     alt={`Gallery Image ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 ) : (
//                   <label className="relative flex items-center justify-center">
//                     <span className="text-grey-800 bg-[#40A8C4] flex items-center justify-center"
//                       style={{
//                         width: "120px",
//                         height: "35px",
//                         borderRadius: "13px 0px 0px 0px",
//                         opacity: 0.3,
//                       }}
//                     >
//                       + Add Image
//                     </span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) => handleGalleryUpload(index, e)}
//                       className="absolute inset-0 opacity-0 cursor-pointer"
//                     />
//                   </label>
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>
//       <div className="mb-8">
//         <h2 className="text-lg font-noto text-gray-700">Product</h2>
//         <div className="grid grid-cols-4 gap-4 mt-4">
//         {productImages.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative w-44 h-44 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center"
//               >
//                 {image ? (
//                   <Image
//                     src={image}
//                     alt={`Product Image ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 ) : (
//                   <label className="relative flex items-center justify-center">
//                     <span className="text-grey-800 bg-[#40A8C4] flex items-center justify-center"
//                       style={{
//                         width: "120px",
//                         height: "35px",
//                         borderRadius: "13px 0px 0px 0px",
//                         opacity: 0.3,
//                       }}
//                     >
//                       + Add Image
//                     </span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) => handleProductUpload(index, e)}
//                       className="absolute inset-0 opacity-0 cursor-pointer"
//                     />
//                   </label>
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>
//       {/* Book Appointment */}
//       <div className="mb-8">
//         <h2 className="text-lg font-noto text-gray-700">Book an Appointment</h2>
//         <div className="grid grid-cols-2 gap-6 mt-4">
//           <div className="flex flex-col">
//             <label className="text-sm font-noto text-gray-600">Date</label>
//             <input
//               type="date"
//               className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-sm font-noto text-gray-600">Time</label>
//             <input
//               type="time"
//               className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>

      // {/* Save & Generate Buttons */}
      // <div className="flex gap-4 mt-12">
      //   <button className="px-6 py-3 bg-[#40A8C4] text-white font-noto rounded-lg shadow-lg hover:bg-[#1E809C] transition duration-300 transform hover:scale-105">
      //     Save
      //   </button>
      //   <button className="px-6 py-3 bg-[#40A8C4] text-white font-noto rounded-lg shadow-lg hover:bg-[#1E809C] transition duration-300 transform hover:scale-105">
      //     Generate QR Code
      //   </button>
      //   <button className="px-6 py-3 bg-[#40A8C4] text-white font-noto rounded-lg shadow-lg hover:bg-[#1E809C] transition duration-300 transform hover:scale-105">
      //     Generate Public Link
      //   </button>
      // </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CustomForm() {
  const router = useRouter();
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState(Array(4).fill(null));
  const [productImages, setProductImages] = useState(Array(4).fill(null));
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [publicLink, setPublicLink] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleGalleryUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedGalleryImages = [...galleryImages];
      updatedGalleryImages[index] = URL.createObjectURL(file);
      setGalleryImages(updatedGalleryImages);
    }
  };

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
    newGalleryImages[index] = null; // Reset the image
    setGalleryImages(newGalleryImages);
  };

  const handleRemoveProductImage = (index) => {
    const newProductImages = [...productImages];
    newProductImages[index] = null; // Reset the image
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
          <label className="text-sm font-noto text-gray-600">Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
          />
        </div>

        {/* Email and Mobile */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-sm font-noto text-gray-600">EmailId</label>
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
          <div>
            <label className="text-sm font-noto text-gray-600">Social Media Accounts</label>
            <select
              value={selectedSocialMedia}
              onChange={(e) => setSelectedSocialMedia(e.target.value)}
              className="w-full mt-2 h-[56px] px-4 py-2 border border-[#CCCCCC] rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 bg-[#40A8C4] text-white appearance-none"
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
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
            />
          </div>
        </div>
              {/* Save & Generate Buttons */}
      <div className="flex gap-4 mt-12">
        <button className="px-6 py-3 bg-[#40A8C4] text-white font-noto rounded-lg shadow-lg hover:bg-[#1E809C] transition duration-300 transform hover:scale-105">
          Save
        </button>
        <button className="px-6 py-3 bg-[#40A8C4] text-white font-noto rounded-lg shadow-lg hover:bg-[#1E809C] transition duration-300 transform hover:scale-105">
          Generate QR Code
        </button>
        <button className="px-6 py-3 bg-[#40A8C4] text-white font-noto rounded-lg shadow-lg hover:bg-[#1E809C] transition duration-300 transform hover:scale-105">
          Generate Public Link
        </button>
      </div>
      </div>

      {/* Right Preview Section */}
      <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <div className="flex flex-col items-center mb-4">
          {coverImage ? (
            <Image
              src={URL.createObjectURL(coverImage)}
              alt="Cover Image Preview"
              width={400}
              height={200}
              className="rounded-lg"
            />
          ) : (
            <div className="bg-gray-300 h-40 w-full rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No Cover Image Selected</span>
            </div>
          )}
          <div className="relative w-32 h-32 mt-[-40px] rounded-full border-4 border-white bg-gray-100">
            {profileImage ? (
              <Image
                src={URL.createObjectURL(profileImage)}
                alt="Profile Image Preview"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            ) : (
              <span className="text-gray-500">No Profile Image Selected</span>
            )}
          </div>
        </div>

        <div className="text-left">
          <h3 className="font-bold text-lg mb-4">Details:</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <p><strong>Name:</strong> {fullName || "Not provided"}</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <p><strong>Email:</strong> {email || "Not provided"}</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <p><strong>Mobile:</strong> {mobile || "Not provided"}</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <p><strong>Location:</strong> {location || "Not provided"}</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <p><strong>Social Media:</strong> {selectedSocialMedia || "Not provided"}</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <p><strong>Public Link:</strong> {publicLink || "Not provided"}</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <p><strong>Appointment Date:</strong> {appointmentDate || "Not provided"}</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <p><strong>Appointment Time:</strong> {appointmentTime || "Not provided"}</p>
            </div>
          </div>
        </div>
        <h3 className="font-bold text-lg mt-4">Gallery:</h3>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative w-49 h-44 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center">
              {image ? (
                <Image
                  src={image}
                  alt={`Gallery Image Preview ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
          ))}
        </div>

        <h3 className="font-bold text-lg mt-4">Products:</h3>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {productImages.map((image, index) => (
            <div key={index} className="relative w-49 h-44 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center">
              {image ? (
                <Image
                  src={image}
                  alt={`Product Image Preview ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

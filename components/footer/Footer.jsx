import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import locationicon from "../../asset/images/Vector (2).svg";
import phoneicon from "../../asset/images/Vector (3).svg";

function Footer() {
  return (
    <div className="w-[1777px] h-[567px] bg-[#222B32] mt-[3319px] px-[150px] py-[150px]">
      <div className="flex gap-[125px]">
        {/* Pages Container */}
        <div className="w-[170px] h-[267px]">
          <h3 className="font-graphik text-[20px] font-bold leading-[28px] text-white">Pages</h3>
          <ul className="mt-4 space-y-[15px]">
            <li className="text-[15px] font-medium leading-[28px] text-white">Home</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Product</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Pricing</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">About</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Contact Us</li>
          </ul>
        </div>

        {/* Team Members Container */}
        <div className="w-[186px] h-[267px]">
          <h3 className="font-graphik text-[20px] font-bold leading-[28px] text-white">Team</h3>
          <ul className="mt-4 space-y-[15px]">
            <li className="text-[15px] font-medium leading-[28px] text-white">Eleanor Edwards</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Ted Robertson</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Annette Russell</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Jennie Mckinney</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Gloria Richards</li>
          </ul>
        </div>

        {/* More Team Members Container */}
        <div className="w-[186px] h-[267px]">
          <h3 className="font-graphik text-[20px] font-bold leading-[28px] text-white">Team</h3>
          <ul className="mt-4 space-y-[15px]">
            <li className="text-[15px] font-medium leading-[28px] text-white">Jane Black</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Dummy 1</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Dummy 2</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Dummy 3</li>
            <li className="text-[15px] font-medium leading-[28px] text-white">Dummy 4</li>
          </ul>
        </div>

        {/* Contact Information Container */}
        <div className="w-[284px] h-[193px]">
          <h3 className="font-graphik text-[20px] font-bold leading-[28px] text-white">Contact</h3>
          <ul className="mt-4 space-y-[10px]">
          <li className="flex items-center text-[15px] font-medium leading-[27px] text-white">
            <div className="mr-2">
              <Image
                src={locationicon}  // Replace with the actual path to the location icon
                alt="Location Icon"
                width={15}
                height={20}
              />
            </div>
            7480 Mockingbird Hill
          </li>
            <li className="flex items-center text-[15px] font-medium leading-[27px] text-white">
            <div className="mr-2">
            <Image
                src={phoneicon}  // Replace with the actual path to the phone icon
                alt="Phone Icon"
                width={15}
                height={20}
              />
            </div>
              +1 (234) 567-890
            </li>
          </ul>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4 text-white">
            <FaTwitter size={24} />
            <FaFacebookF size={24} />
            <FaLinkedinIn size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

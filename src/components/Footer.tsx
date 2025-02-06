import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <FaFacebook size={24} cursor={"pointer"} />
          <TiSocialGooglePlus size={24} cursor={"pointer"} />
          <TiSocialLinkedinCircular size={24} cursor={"pointer"} />
          <div className="border-l border-gray-400 pl-4">
            <p className="text-white">Home</p>
          </div>
        </div>
        <div>
          <p className="text-white">Theme by Muhammad Abdullah</p>
        </div>
      </div>
      {/* <p className="text-sm">© 2025 My Website. All rights reserved.</p> */}
    </footer>
  );
};

export default Footer;

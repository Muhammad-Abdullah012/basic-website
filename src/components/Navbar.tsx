import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="relative bg-black bg-opacity-40 text-white w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="https://www.smallmatek.pt/wp-content/uploads/2015/10/logo-vetorial-branco.png"
            width={100}
            height={100}
            alt="logo"
          />
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Store
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black bg-opacity-40 text-white w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between md:justify-center items-center md:gap-10">
        {/* Logo */}
        <Image
          src="https://www.smallmatek.pt/wp-content/uploads/2015/10/logo-vetorial-branco.png"
          width={100}
          height={100}
          alt="logo"
        />

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={30} />
        </button>

        {/* Navigation Menu (Desktop) */}
        <ul className="hidden md:flex space-x-4">
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
            <a href="#productsAndServices" className="hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a href="#productsAndServices" className="hover:text-gray-300">
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
            <a href="#contactUs" className="hover:text-gray-300">
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

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="bg-gray-800 w-64 h-full p-6 relative">
          <div className="flex flex-row justify-between items-center">
            <Image
              src="https://www.smallmatek.pt/wp-content/uploads/2015/10/logo-vetorial-branco.png"
              width={100}
              height={100}
              alt="logo"
            />
            <button className="text-white" onClick={() => setIsOpen(false)}>
              <X size={30} />
            </button>
          </div>
          <ul className="mt-10 space-y-4 text-white">
            <li>
              <a
                href="#"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#productsAndServices"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#productsAndServices"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#contactUs"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
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

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Search, Globe, Bell, User, ChevronDown } from "lucide-react";
import logo from "../assets/logo/logo.png";
import Image, { StaticImageData } from "next/image";

interface Image {
  image: StaticImageData;
  alt: string;
}

const Header = () => {
  const image: Image[] = [{ image: logo, alt: "logo-image" }];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#170000] shadow-sm w-full mt-4 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-18">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="w-auto h-[34px]">
              <Link href="/">
                <Image
                  src={image[0].image.src}
                  width={100}
                  height={100}
                  alt="SandBrix Logo"
                  className="h-full w-auto object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6 ml-7">
              <Link href="/" className="text-white hover:text-gray-300 text-[15px]">
                Home
              </Link>
              <Link href="/shows" className="text-[#9F9F9F] hover:text-gray-300 text-[15px]">
                Shows
              </Link>
              <Link href="/documents" className="text-[#9F9F9F] hover:text-gray-300 text-[15px]">
                Documents
              </Link>
              <Link href="/news" className="text-[#9F9F9F] hover:text-gray-300 text-[15px]">
                News & Politics
              </Link>
              <Link href="/sports" className="text-[#9F9F9F] hover:text-gray-300 text-[15px]">
                Sports
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="hidden lg:block relative w-[200px] xl:w-[300px] h-[40px]">
              <input
                type="text"
                placeholder="Search for Title"
                className="w-full h-full bg-transparent border border-[#9F9F9F] rounded-full pl-4 pr-10 text-white placeholder:text-[#9F9F9F] text-sm focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            {/* Language */}
            <div className="hidden md:flex items-center space-x-1 cursor-pointer">
              <Globe className="text-white h-[18px] w-[18px]" />
              <span className="text-white text-[14px]">English</span>
              <ChevronDown className="text-white h-4 w-4" />
            </div>

            {/* Notification Icon */}
            <div className="relative cursor-pointer">
              <Bell className="text-white h-[20px] w-[20px] stroke-[2px]" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>

            {/* User Icon with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center cursor-pointer space-x-1"
                onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className="w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center">
                  <User className="text-gray-600 h-5 w-5" />
                </div>
                <ChevronDown className="text-white h-4 w-4" />
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#170000] rounded-md shadow-lg z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2  text-white text-sm text-gray-700 hover:bg-[#400303]">
                    My Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2  text-white text-sm text-gray-700 hover:bg-[#400303]">
                    Settings
                  </Link>
                  <button
                    className="w-full text-left text-white  px-4 py-2 text-sm text-gray-700 hover:bg-[#400303]"
                    onClick={() => {
                      // logout logic here
                      alert("Logged out!");
                    }}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="text-[#404040] mt-2" />
    </header>
  );
};

export default Header;

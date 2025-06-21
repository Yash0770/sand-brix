import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Search, Globe, Bell, User, ChevronDown, SquareCheck } from "lucide-react";
import { TbCricket } from "react-icons/tb";
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
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }

      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-[#400303] text-white flex justify-center text-sm px-4 py-2 flex-col md:flex-row md:items-center sm:space-x-2">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <SquareCheck className="w-4 h-4 mt-0.5 mr-1 mb-1" />
          <span>Accurate Predictions.</span>
        </div>
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <TbCricket className="w-4 h-4 lg:mx-1 mt-0.5 mr-1 mb-1" />
          <span>Fast Live Scores. Free Streaming. Zero Lag.</span>
        </div>
        <div className="flex items-center">
          <span>Only On SandBrix!</span>
          <Link href="/details" className="underline ml-1 mt-1 sm:mt-0">
            View Details
          </Link>
        </div>
      </div>

      <header className="bg-[#180000] shadow-sm w-full pt-2 sticky top-0 z-50">
        <div className="custom-container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <div className="lg:hidden mr-4">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              {/* Logo */}
              <div className="w-auto lg:h-[38px] mb-1">
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
              <nav className="hidden lg:flex lg:space-x-8 md:space-x-6 lg:ml-10 md:ml-8">
                <Link href="/" className="text-white hover:text-gray-300 text-base">
                  Home
                </Link>
                <Link href="/shows" className="text-[#9F9F9F] hover:text-gray-300 text-base">
                  Shows
                </Link>
                <Link href="/documents" className="text-[#9F9F9F] hover:text-gray-300 text-base">
                  Documents
                </Link>
                <Link href="/news" className="text-[#9F9F9F] hover:text-gray-300 text-base">
                  News & Politics
                </Link>
                <Link href="/sports" className="text-[#9F9F9F] hover:text-gray-300 text-base">
                  Sports
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-6">
              {/* Search */}
              {/* <div className="hidden lg:block relative w-[200px] xl:w-[300px] h-[40px]"> */}
              <div className="hidden md:block relative w-[150px] sm:w-[100px] md:w-[200px] lg:w-[250px] xl:w-[300px] lg:h-[40px] md:h-[34px]">
                <input
                  type="text"
                  placeholder="Search for Title"
                  className="w-full h-full bg-transparent border border-[#9F9F9F] rounded-full pl-4 pr-10 text-white placeholder:text-[#9F9F9F] text-sm focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {/* Language Dropdown */}
              <div className="hidden md:flex items-center relative" ref={languageRef}>
                <div
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => setLanguageOpen(!languageOpen)}>
                  <Globe className="text-white h-[18px] w-[18px]" />
                  <span className="text-white text-[14px]">English</span>
                  <ChevronDown className="text-white h-4 w-4" />
                </div>

                {languageOpen && (
                  <div className="absolute right-0 top-10 w-36 bg-[#180000] rounded-md shadow-lg z-50">
                    <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#400303] cursor-pointer">
                      සිංහල
                    </button>
                    <button className="block rounded-md w-full text-left px-4 py-2 text-sm text-white hover:bg-[#400303] cursor-pointer">
                      English
                    </button>
                  </div>
                )}
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
                  <div className="absolute right-0 mt-2 w-44 bg-[#180000] rounded-md shadow-lg z-50">
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
                      className="w-full rounded-md text-left text-white cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-[#400303]"
                      onClick={() => {
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
      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#180000] w-full px-4 py-2">
          <nav className="flex flex-col space-y-4 mt-2">
            <Link href="/" className="text-white hover:text-gray-300 text-sm">
              Home
            </Link>
            <Link href="/shows" className="text-[#9F9F9F] hover:text-gray-300 text-sm">
              Shows
            </Link>
            <Link href="/documents" className="text-[#9F9F9F] hover:text-gray-300 text-sm">
              Documents
            </Link>
            <Link href="/news" className="text-[#9F9F9F] hover:text-gray-300 text-sm">
              News & Politics
            </Link>
            <Link href="/sports" className="text-[#9F9F9F] hover:text-gray-300 text-sm">
              Sports
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

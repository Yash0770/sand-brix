import React from "react";
import logo from "../assets/logo/logo.png";
import facebookIcon from "../assets/footer/facebook_icon.png";
import instagramIcon from "../assets/footer/instagram_icon.png";
import youtubeIcon from "../assets/footer/media_social_video_youtube_icon.png";
import vimeoIcon from "../assets/footer/vimeo_vimeo logo_icon.png";
import footerBg from "../assets/footer/footer-bg.png";
import { StaticImageData } from "next/image";

interface Image {
  image: StaticImageData;
  alt: string;
  link: string;
}

const Footer = () => {
  const brandLogo: Image = { image: logo, alt: "Brand Logo", link: "/" };

  const socialIcons: Image[] = [
    { image: facebookIcon, alt: "facebook", link: "https://facebook.com" },
    { image: instagramIcon, alt: "instagram", link: "https://instagram.com" },
    { image: youtubeIcon, alt: "youtube", link: "https://youtube.com" },
    { image: vimeoIcon, alt: "vimeo", link: "https://vimeo.com" },
  ];  

  return (
    <footer className="bg-black w-full mt-4 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-2">
        <div className="flex justify-between items-center">
          {/* Left: Brand Logo */}
          <a href={brandLogo.link}>
            <img src={brandLogo.image.src} alt={brandLogo.alt} className="h-7" />
          </a>

          {/* Right: Social Media Icons */}
          <div className="flex space-x-6">
            {socialIcons.map((icon, idx) => (
              <a
                key={idx}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm">
                <img src={icon.image.src} alt={icon.alt} className="h-4 w-4.5" />
                <span className="text-sm text-[#9F9F9F]">{icon.alt}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-[#7070705E]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="container pb-8 sm:pb-0 pt-8 flex flex-col md:flex-row gap-12 text-sm text-neutral-300">
          {/* Live Streaming and Our Sites on left (70% width) */}
          <div className="w-full md:w-[80%] flex flex-col md:flex-row gap-8">
            {/* Live Streaming Column 1 */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-4">Live Streaming</h3>
              <ul className="space-y-3 text-[#9F9F9F]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Live TV
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hot & News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Premium
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Advertise
                  </a>
                </li>
              </ul>
            </div>

            {/* Live Streaming Column 2 (empty heading) */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-4 invisible">Live Streaming</h3>
              <ul className="space-y-3 text-[#9F9F9F]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hot & News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Premium
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Advertising
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Sites Column 1 */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-4">Our Sites</h3>
              <ul className="space-y-3 text-[#9F9F9F]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Learn About Our Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Masthead
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press Room
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Advertise With Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Sites Column 2 (empty heading) */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-4 invisible">Our Sites</h3>
              <ul className="space-y-3 text-[#9F9F9F]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Attend a Live Event
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Buy Maps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Inspire Your Kids
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shop Nat Geo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Watch TV
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#7070705E] mx-4"></div>

          {/* Support Column on right (30% width) */}
          <div className="w-full md:w-[20%]">
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-[#9F9F9F]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div
        className="relative w-full h-52 bg-cover bg-center text-sm text-neutral-300"
        style={{ backgroundImage: `url(${footerBg.src})` }}
        >
        {/* Horizontal Line at top-middle (absolute) */}
        <div className="absolute w-full top-28 left-1/2 transform -translate-x-1/2 w-16 h-px bg-white opacity-20" />

        {/* Footer Bottom Row */}
        <div className="absolute bottom-4 left-0 right-0 px-4 max-w-7xl mx-auto flex justify-between items-center py-3">
          <span className="text-xs">
            Copyright &copy; {new Date().getFullYear()} Sandbrix. All Rights Reserved.
          </span>
          <div className="flex space-x-2 text-xs">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy |
            </a>
            <a href="/terms-and-conditions" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { ChevronDown } from 'lucide-react'; // Import from Lucide

export default function LanguageCard() {
  return (
    <div
      className="w-[419px] h-[61px] bg-[#2D0000] rounded-[5px] opacity-100 flex items-center justify-center text-white text-sm mt-4"
    >
      <div className="flex flex-row gap-20 items-center">
        <div className="text-[14px]">
          <p>Language</p>
        </div>

        {/* Dropdown Wrapper */}
        <div className="relative w-[198px] h-[40px]">
          <select
            className="w-full h-full appearance-none pl-4 pr-10 text-white text-[14px] rounded-full border border-[#492F2F] bg-[#2D0000]"
          >
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="french">Hindi</option>
   
          </select>

          {/* ChevronDown Icon from Lucide */}
          <ChevronDown
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

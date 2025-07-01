// components/MatchDetail.tsx
import React from 'react';

export default function MatchDetail() {
  return (
    <div
      style={{
        width: '419px',
        background: '#2D0000',
        borderRadius: '5px',
        opacity: 1,
      }}
      className="text-white sm:w-full"
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-[16px]">Match Details</h2>
      </div>

      {/* Toss */}
      <div className="w-full border-t border-[#492F2F]" />
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] px-4 mt-4">
        <div className="text-[#8D7575]">Toss</div>
        <div>India, elected to bat first</div>
      </div>

      {/* Series */}
      <div className="w-full border-t border-[#492F2F] mt-4" />
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] px-4 mt-4">
        <div className="text-[#8D7575]">Series</div>
        <div>
          <p>Sachin-Anderson Series</p>
          <p className="mt-2 border-t border-[#492F2F] pt-2 w-full">ICC World Test Championship</p>
        </div>
      </div>

      {/* Season */}
      <div className="w-full border-t border-[#492F2F] mt-4" />
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] px-4 mt-4">
        <div className="text-[#8D7575]">Season</div>
        <div>2025</div>
      </div>

      {/* Match Number */}
      <div className="w-full border-t border-[#492F2F] mt-4" />
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] px-4 mt-4">
        <div className="text-[#8D7575]">Match Number</div>
        <div>Test 2 of 5</div>
      </div>

      {/* Match Days */}
      <div className="w-full border-t border-[#492F2F] mt-4" />
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] px-4 mt-4">
        <div className="text-[#8D7575]">Match Days</div>
        <div>July 1 – July 5 ,Jaipur,Rajasthan</div>
      </div>

      {/* TV Umpire */}
      <div className="w-full border-t border-[#492F2F] mt-4" />
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] px-4 mt-4 items-center">
        <div className="text-[#8D7575]">TV Umpire</div>
        <div className="flex items-center gap-2">
          <img src="https://flagcdn.com/w40/au.png" alt="Australia" className="w-5 h-4" />
          <span>Simon Taufel</span>
        </div>
      </div>

      {/* Reserve Umpire */}
      <div className="w-full border-t border-[#492F2F] mt-4" />
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] px-4 mt-4 items-center">
        <div className="text-[#8D7575]">Reserve Umpire</div>
        <div className="flex items-center gap-2">
          <img src="https://flagcdn.com/w40/au.png" alt="Australia" className="w-5 h-4" />
          <span>Rod Tucker</span>
        </div>
      </div>

      {/* Test Debut */}
      <div className="w-full border-t border-[#492F2F] mt-4 " />
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] px-4 mt-4">
        <div className="text-[#8D7575]">Test Debut</div>
        <div>
          <div className="flex items-center gap-2">
            <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-4" />
            <p>Nitish Reddy (India)</p>
          </div>
          <div className="mt-2 border-t border-[#492F2F] pt-2 flex items-center gap-2 mb-6">
            <img src="https://flagcdn.com/w40/in.png" alt="Australia" className="w-5 h-4" />
            <p>Sai Sudarshan Marsh (India)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

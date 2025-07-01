// components/MatchDetail.tsx
import React from 'react';

export default function MatchDetail() {
  return (
    <div
      className="text-white p-4 sm:w-full bg-[#2D0000] rounded"
      style={{
        width: '419px',
        borderRadius: '5px',
        opacity: 1,
      }}
    >
      <h2 className="text-lg font-semibold mb-4 text-[16px]">Match Details</h2>

      {/* Toss */}
      <div className="w-full border-t border-[#492F2F]"></div>
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] mt-4">
        <div className="text-[#8D7575]">Toss</div>
        <div className="w-full">India, elected to bat first</div>
      </div>

      {/* Series */}
      <div className="w-full border-t border-[#492F2F] mt-4"></div>
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] mt-4">
        <div className="text-[#8D7575]">Series</div>
        <div className="w-full">
          <p>Sachin-Anderson Series</p>
          <p className="mt-2 border-t border-[#492F2F] pt-2 w-full">ICC World Test Championship</p>
        </div>
      </div>

      {/* Season */}
      <div className="w-full border-t border-[#492F2F] mt-4"></div>
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] mt-4">
        <div className="text-[#8D7575]">Season</div>
        <div className="w-full">2025</div>
      </div>

      {/* Match Number */}
      <div className="w-full border-t border-[#492F2F] mt-4"></div>
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] mt-4">
        <div className="text-[#8D7575]">Match Number</div>
        <div className="w-full">Test 2 of 5</div>
      </div>

      {/* Match Days */}
      <div className="w-full border-t border-[#492F2F] mt-4"></div>
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] mt-4">
        <div className="text-[#8D7575]">Match Days</div>
        <div className="w-full">July 1 – July 5</div>
      </div>

      {/* TV Umpire */}
      <div className="w-full border-t border-[#492F2F] mt-4"></div>
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] mt-4">
        <div className="text-[#8D7575]">TV Umpire</div>
        <div className="w-full">Simon Taufel</div>
      </div>

      {/* Reserve Umpire */}
      <div className="w-full border-t border-[#492F2F] mt-4"></div>
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] mt-4">
        <div className="text-[#8D7575]">Reserve Umpire</div>
        <div className="w-full">Rod Tucker</div>
      </div>

      {/* Test Debut */}
      <div className="w-full border-t border-[#492F2F] mt-4"></div>
      <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] mt-4">
        <div className="text-[#8D7575]">Test Debut</div>
        <div className="w-full">
          <p>Rahul Sharma (India)</p>
          <p className="mt-2 border-t border-[#492F2F] pt-2 w-full">Daniel Marsh (Australia)</p>
        </div>
      </div>
    </div>
  );
}

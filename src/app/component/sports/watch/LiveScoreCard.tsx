'use client';
import { Share2, SquareArrowOutUpRight } from 'lucide-react';
import React, { useState } from 'react';

export default function LiveScoreCard() {

    const [activeFilter, setActiveFilter] = useState('All');
  const batters = [
    { name: 'Rohit Sharma', r: 45, b: 60, fours: 6, sixes: 1, sr: 75.0 },
    { name: 'Shubman Gill', r: 30, b: 42, fours: 4, sixes: 0, sr: 71.4 },
  ];

  const bowlers = [
    { name: 'James Anderson', o: 8, m: 2, r: 21, w: 1, eco: 2.63 },
  ];

    const filterButtons = [
    { label: 'Info', width: '48px' },
    { label: 'Live', width: '50px' },
    { label: 'Scorecard', width: '98px' },
    { label: 'Commentary', width: '104px' },
    { label: 'Point Table', width: '110px' },
  ];

  return (
    <div
      style={{
        width: '800px',
        height: '278px',
        background: '#2D0000',
        borderRadius: '5px',
        opacity: 1,
      }}
      className="text-white p-4 flex flex-col justify-start"
    >
      <div className='flex flex-row gap-55'>

 <div className="flex gap-2 mb-2">
        {filterButtons.map((btn) => (
          <div
            key={btn.label}
            onClick={() => setActiveFilter(btn.label)}
            className={`flex items-center justify-center text-[#8D7575] text-[14px] cursor-pointer  ${
              activeFilter === btn.label ? 'border-white' : 'border-[#3B1717]'
            }`}
            style={{
              width: btn.width,
              height: '31px',
              borderWidth: '1px',
              borderRadius: '2px',
              opacity: 1,
            }}
          >
            {btn.label}
          </div>
        ))}

  
      </div>

              <div className='flex text-end text-[14px] underline mt-2 cursor-pointer'>
          <p>Share With</p> &nbsp; <SquareArrowOutUpRight className='w-4 h-4 mt-0' />
        </div>
      </div>

    
      

      {/* Batters Table */}
      <div>
     
        <div className="grid grid-cols-6  border-b border-[#492F2F] pb-1 text-[#8D7575] text-[14px] mt-4">
          <span >Batters</span>
          <span className="text-center">R</span>
          <span className="text-center">B</span>
          <span className="text-center">4s</span>
          <span className="text-center">6s</span>
          <span className="text-center">SR</span>
        </div>
        {batters.map((batter, index) => (
          <div
            key={index}
            className="grid grid-cols-6 text-sm py-1 border-b border-[#492F2F] text-[#ffff] text-[14px]"
          >
            <span>{batter.name}</span>
            <span className="text-center">{batter.r}</span>
            <span className="text-center">{batter.b}</span>
            <span className="text-center">{batter.fours}</span>
            <span className="text-center">{batter.sixes}</span>
            <span className="text-center">{batter.sr.toFixed(1)}</span>
          </div>
        ))}
      </div>

      {/* Bowlers Table */}
      <div className="mt-6">
   
        <div className="grid grid-cols-6 text-xs border-b border-[#492F2F] text-[#8D7575] text-[14px] pb-1">
          <span>Bowler</span>
          <span className="text-center">O</span>
          <span className="text-center">M</span>
          <span className="text-center">R</span>
          <span className="text-center">W</span>
          <span className="text-center">ECO</span>
        </div>
        {bowlers.map((bowler, index) => (
          <div
            key={index}
            className="grid grid-cols-6 text-sm py-1 "
          >
            <span>{bowler.name}</span>
            <span className="text-center">{bowler.o}</span>
            <span className="text-center">{bowler.m}</span>
            <span className="text-center">{bowler.r}</span>
            <span className="text-center">{bowler.w}</span>
            <span className="text-center">{bowler.eco.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

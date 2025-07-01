'use client';
import React, { useState } from 'react';
import ScoreCard from './ScoreCard';
import LanguageCard from './LanguageCard';
import MatchDetail from './MatchDetailCard';
import AdvertisementCard from './AdvertisementCard';
import LiveScoreCard from './LiveScoreCard';
import CommentaryCard from './CommentryCard';
import {  SquareArrowOutUpRight } from 'lucide-react';

export default function BottomSection() {

      const [activeFilter, setActiveFilter] = useState('Live');
      const filterButtons = [
    { label: 'Info', width: '48px' },
    { label: 'Live', width: '50px' },
    { label: 'Scorecard', width: '98px' },
    { label: 'Commentary', width: '104px' },
    { label: 'Point Table', width: '110px' },
  ];
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side: ScoreCard + LiveScoreCard */}
        <div className="flex flex-col gap-4">
          <ScoreCard />
               <div className='flex flex-row gap-60'>

 <div className="flex gap-2 mb-0">
        {filterButtons.map((btn) => (
          <div
            key={btn.label}
            onClick={() => setActiveFilter(btn.label)}
            className={`flex items-center justify-center text-[#8D7575] text-[14px] cursor-pointer  ${
              activeFilter === btn.label ? 'text-white' : ''
            }`}
            style={{
              width: btn.width,
              height: '31px',
              opacity: 1,
            }}
          >
            {btn.label}
          </div>
        ))}

  
      </div>

              <div className='flex text-end text-[14px] underline mt-2 cursor-pointer text-white'>
          <p>Share With</p> &nbsp; <SquareArrowOutUpRight className='w-4 h-4 mt-0' />
        </div>
      </div>
          <LiveScoreCard />
          <CommentaryCard/>
        </div>

        {/* Right side: stacked cards */}
        <div className="flex flex-col gap-4 pt-4 items-center">
          <LanguageCard />
          <MatchDetail />

          <div className='flex justify-center items-center text-center text-[14px] text-white'>
             <p>ADVERTISEMENT</p>
          </div>
          <AdvertisementCard />
        </div>
      </div>
    </div>
  );
}

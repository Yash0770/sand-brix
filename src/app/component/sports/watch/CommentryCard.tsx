'use client';
import React, { useState } from 'react';

export default function CommentaryCard() {
  // Sample commentary data
  const commentary = [
    { over: '35.5', text: 'Anderson to S.Gill', commentry: 'Perfect, Cover Drive on the ball', ball: '4nb' },
    { over: '35.4', text: 'Anderson to S.Gill', commentry: 'Defended back to the bowler. Good line and length.', ball: '0' },
    { over: '35.3', text: 'Anderson to S.Gill', commentry: 'Single taken to deep midwicket.', ball: '6' },
    { over: '35.2', text: 'Anderson to S.Gill', commentry: 'Short and wide, left alone by the batter.', ball: '1' },
    { over: '34.1', text: 'Anderson to S.Gill', commentry: 'Dot ball. Tight over from Anderson.', ball: '4' },
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const filterButtons = [
    { label: 'All', width: '48px' },
    { label: 'Highlights', width: '97px' },
    { label: 'Overs', width: '61px' },
    { label: 'W', width: '32px' },
    { label: '4s', width: '32px' },
    { label: '6s', width: '32px' },
    { label: 'Inn 1', width: '65px' },
    { label: 'Milestone', width: '94px' },
  ];

  return (
    <div
      style={{
        width: '800px',
        height: '575px',
        background: '#2D0000',
        borderRadius: '5px',
        opacity: 1,
      }}
      className="p-4 text-white flex flex-col"
    >
      <h2 className="text-lg font-semibold mb-3 pb-2 text-[18px]">
        Commentary
      </h2>

      {/* Filter Header */}
      <div className="flex gap-2 mb-2">
        {filterButtons.map((btn) => (
          <div
            key={btn.label}
            onClick={() => setActiveFilter(btn.label)}
            className={`flex items-center justify-center text-white text-[14px] cursor-pointer ${
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

      {/* Commentary List */}
      <div className=" flex-1 space-y-4 pr-2 custom-scrollbar mt-8">
        {commentary.map((item, idx) => (
          <div key={idx} className="-mx-4 px-4 border-b border-[#492F2F] pb-3 flex gap-4 justify-between ">
            {/* Over and Ball */}
            <div className="w-[50px] text-[16px] text-white flex flex-col items-center">
              <div>{item.over}</div>
              <div
                className={`mt-1 px-2 py-[2px] text-[14px] ${
                  item.ball.includes('nb')
                    ? 'bg-[#E60019] text-white rounded-full'
                    : 'bg-white text-black rounded-full'
                }`}
                style={{
                  minWidth: '28px',
                  textAlign: 'center',
                }}
              >
                {item.ball}
              </div>
            </div>

            {/* Text and Commentary */}
            <div className="flex-1 mb-4">
              <div className="text-[#8D7575] text-[14px]">{item.text}</div>
              <div className="text-white text-[16px]">{item.commentry}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

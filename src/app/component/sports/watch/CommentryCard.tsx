import React from 'react';

export default function CommentaryCard() {
  // Sample commentary data
  const commentary = [
    { over: '35.4', text: 'Four! Cracked through the covers by Rohit Sharma.' },
    { over: '35.3', text: 'Defended back to the bowler. Good line and length.' },
    { over: '35.2', text: 'Single taken to deep midwicket.' },
    { over: '35.1', text: 'Short and wide, left alone by the batter.' },
    { over: '34.6', text: 'Dot ball. Tight over from Anderson.' },
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
      <h2 className="text-lg font-semibold mb-3 border-b border-[#444] pb-2">
        Commentary
      </h2>

      <div className="overflow-y-auto flex-1 space-y-4 pr-2 custom-scrollbar">
        {commentary.map((item, idx) => (
          <div key={idx} className="flex gap-4 border-b border-[#333] pb-2">
            <div className="w-[50px] text-sm font-semibold text-[#E0B0FF]">
              {item.over}
            </div>
            <div className="flex-1 text-sm text-gray-200">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

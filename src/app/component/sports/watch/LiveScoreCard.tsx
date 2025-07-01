import React from 'react';

export default function LiveScoreCard() {
  const batters = [
    { name: 'Rohit Sharma', r: 45, b: 60, fours: 6, sixes: 1, sr: 75.0 },
    { name: 'Shubman Gill', r: 30, b: 42, fours: 4, sixes: 0, sr: 71.4 },
  ];

  const bowlers = [
    { name: 'James Anderson', o: 8, m: 2, r: 21, w: 1, eco: 2.63 },
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
      {/* Top Centered Score */}
      <div className="w-full text-center text-xl font-bold mb-4">
        IND 124/2 <span className="text-sm font-normal">(35.4 ov)</span>
      </div>

      {/* Batters Table */}
      <div>
        <p className="font-semibold text-sm mb-1">Batters</p>
        <div className="grid grid-cols-6 text-xs border-b border-[#444] pb-1 text-gray-300">
          <span>Name</span>
          <span className="text-center">R</span>
          <span className="text-center">B</span>
          <span className="text-center">4s</span>
          <span className="text-center">6s</span>
          <span className="text-center">SR</span>
        </div>
        {batters.map((batter, index) => (
          <div
            key={index}
            className="grid grid-cols-6 text-sm py-1 border-b border-[#333]"
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
      <div className="mt-3">
        <p className="font-semibold text-sm mb-1">Bowler</p>
        <div className="grid grid-cols-6 text-xs border-b border-[#444] pb-1 text-gray-300">
          <span>Name</span>
          <span className="text-center">O</span>
          <span className="text-center">M</span>
          <span className="text-center">R</span>
          <span className="text-center">W</span>
          <span className="text-center">ECO</span>
        </div>
        {bowlers.map((bowler, index) => (
          <div
            key={index}
            className="grid grid-cols-6 text-sm py-1 border-b border-[#333]"
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

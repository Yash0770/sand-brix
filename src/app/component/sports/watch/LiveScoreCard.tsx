'use client';

import React, { useState } from 'react';

export default function LiveScoreCard() {


  const batters = [
    { name: 'Rohit Sharma', r: 45, b: 60, fours: 6, sixes: 1, sr: 75.0 },
    { name: 'Shubman Gill *', r: 30, b: 42, fours: 4, sixes: 0, sr: 71.4 },
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
 
      {/* Batters Table */}
      <div>
     
        <div className="grid grid-cols-12 border-b border-[#492F2F]   pb-1 text-[#8D7575] text-[14px] mt-4">
          <span >Batters</span>
          <span className="text-center">R</span>
          <span className="text-center">B</span>
          <span className="text-center">4s</span>
          <span className="text-center">6s</span>
          <span className="text-center">SR</span>
               <span className="text-center">This Bowler</span>
                    <span className="text-center">Last 10 ovs</span>
                       <span className="text-center">Mat</span>
                    <span className="text-center">Runs</span>
                       <span className="text-center">HS</span>
                    <span className="text-center">Ave</span>
        </div>
        {batters.map((batter, index) => (
          <div
            key={index}
            className="grid grid-cols-12 text-sm py-1   text-[#ffff] text-[14px]"
          >
            <span>{batter.name}</span>
            <span className="text-center">{batter.r}</span>
            <span className="text-center">{batter.b}</span>
            <span className="text-center">{batter.fours}</span>
            <span className="text-center">{batter.sixes}</span>
            <span className="text-center">{batter.sr.toFixed(1)}</span>
              <span className="text-center">11(17b)</span>
                       <span className="text-center">26(34b)</span>
                             <span className="text-center">73</span>
                                    <span className="text-center">4716</span>
                                           <span className="text-center">245</span>
                                                  <span className="text-center">36.84</span>
          </div>
        ))}
      </div>

      {/* Bowlers Table */}
      <div className="mt-6">
   
        <div className="grid grid-cols-14 text-xs border-b border-[#492F2F] text-[#8D7575] text-[14px] pb-1">
          <span>Bowlers</span>
          <span className="text-center">O</span>
          <span className="text-center">M</span>
          <span className="text-center">R</span>
          <span className="text-center">W</span>
          <span className="text-center">ECO</span>
               <span className="text-center">Os</span>
                  <span className="text-center">4s</span>
                      <span className="text-center">6s</span>
                      <span className="text-center">This Spell</span>
                            <span className="text-center">Mat</span>
                  <span className="text-center">Wkts</span>
                      <span className="text-center">BBI</span>
                      <span className="text-center">Ave</span>
        </div>
        {bowlers.map((bowler, index) => (
          <div
            key={index}
            className="grid grid-cols-14 text-sm py-1 "
          >
            <span>{bowler.name}</span>
            <span className="text-center">{bowler.o}</span>
            <span className="text-center">{bowler.m}</span>
            <span className="text-center">{bowler.r}</span>
            <span className="text-center">{bowler.w}</span>
            <span className="text-center">{bowler.eco.toFixed(2)}</span>
                 <span className="text-center">{69}</span>
            <span className="text-center">{13}</span>
            <span className="text-center">{0}</span>
            <span className="text-center">{2-0-6-0}</span>
                 <span className="text-center">{9}</span>
            <span className="text-center">{24}</span>
            <span className="text-center">{5/61}</span>
            <span className="text-center">{42.50}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

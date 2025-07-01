import React from 'react';
import ScoreCard from './ScoreCard';
import LanguageCard from './LanguageCard';
import MatchDetail from './MatchDetailCard';
import AdvertisementCard from './AdvertisementCard';
import LiveScoreCard from './LiveScoreCard';
import CommentaryCard from './CommentryCard';

export default function BottomSection() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side: ScoreCard + LiveScoreCard */}
        <div className="flex flex-col gap-4">
          <ScoreCard />
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

import React from 'react';
import { ChevronLeft, CircleSmall, EllipsisVertical, Eye, Flag, Folder, FolderArchive, Gift, Lightbulb, Maximize2, MessageCircle, MoreHorizontal, Share, Share2, Star, ThumbsDown, ThumbsUp, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import chatlogo from '@/app/assets/sports/03.jpg';

export default function WatchNow() {
    const chats = [
  {
    id: 1,
    avatar: chatlogo,
    username: "John Doe",
    message: "Hi 😃😃😉 anybody here",
    time: "9:45",
  },
  {
    id: 2,
    avatar: chatlogo,
    username: "Jane Smith",
    message: "Hello John! Yes, I'm here.",
    time: "9:46",
  },
  {
    id: 3,
    avatar: chatlogo,
    username: "Mike Johnson",
    message: "Great game today!",
    time: "9:47",
  },
  {
    id: 1,
    avatar: chatlogo,
    username: "John Doe",
    message: "Hi 😃😃😉 anybody here",
    time: "9:45",
  },
  {
    id: 2,
    avatar: chatlogo,
    username: "Jane Smith",
    message: "Hello John! Yes, I'm here.",
    time: "9:46",
  },
  {
    id: 3,
    avatar: chatlogo,
    username: "Mike Johnson",
    message: "Great game today!",
    time: "9:47",
  },
   {
    id: 2,
    avatar: chatlogo,
    username: "Jane Smith",
    message: "Hello John! Yes, I'm here.",
    time: "9:46",
  },
  {
    id: 3,
    avatar: chatlogo,
    username: "Mike Johnson",
    message: "Great game today!",
    time: "9:47",
  }

];
  return (
    <div
      className="bg-[#180000] w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url('img/402633.png')`,
      }}
    >
      {/* Outer responsive container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Flex layout for video and chat */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Video Container */}
          <div className="w-full lg:w-[70%] aspect-[16/9] bg-cover bg-center ml-[-58px] relative border border-[#7070705E] " style={{ backgroundImage: "url('img/402633.png')" }}>
            <video
              className="w-full h-full object-cover"
              controls
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            >
              Your browser does not support the video tag.
            </video>

    <div className="flex items-center justify-between mt-4 px-4 text-white w-full">
  <p className="text-md">
    England vs India, 1st Test at Leeds, ENG vs IND, Jun 20 2025 - Full Scorecard
  </p>
 <div className="flex gap-2">
  {[ Lightbulb, ChevronLeft].map((Icon, i) => (
    <div
      key={i}
      className="w-8 h-8 bg-[#250F0F] flex items-center justify-center rounded cursor-pointer hover:scale-105 transition"
    >
      <Icon className="w-4 h-4 text-white" />
    </div>
  ))}
</div>

</div>

  <div className="flex items-center gap-4 text-[10px] text-gray-400 mt-0 ml-4">
    <div className="flex items-center gap-1">
      <MessageCircle className="w-3 h-3" />
      <span>2 Comments</span>
    </div>
    <div className="flex items-center gap-1">
      <Folder className="w-3 h-3" />
      <span>Gaming</span>
    </div>
    <div className="flex items-center gap-1">
      <Eye className="w-3 h-3" />
      <span>1.3k Views</span>
    </div>
  
</div>


{/* Centered Icon Row */}
<div className="flex justify-center gap-3 mt-3 pb-8">
  {[Gift, ThumbsUp, ThumbsDown, Share2, Flag].map((Icon, index) => {
    const isThumb = Icon === ThumbsUp || Icon === ThumbsDown;
    const count = Icon === ThumbsUp ? 123 : Icon === ThumbsDown ? 12 : null;

    return (
      <div
        key={index}
        className="relative w-9 h-9 bg-[#250F0F] flex items-center justify-center rounded cursor-pointer hover:scale-105 transition"
      >
        <Icon className="w-4 h-4 text-white" />
        
        {/* Count badge only for ThumbsUp or ThumbsDown */}
        {isThumb && (
          <div className="absolute -top-1 -right-1  bg-[#2B2B2B] text-[8px] text-white w-4 h-4 flex items-center justify-center rounded">
            {count}
          </div>
        )}
      </div>
    );
  })}
</div>

          </div>

          {/* Chat/Comments Container */}
          <div className="w-full lg:w-[30%] flex flex-col gap-4 mt-4 lg:mt-0">
            {/* Live Chat / Comments toggle bar */}
            <div className="w-[480px] h-[55px] border border-[#7070705E] flex justify-center items-center text-center text-white bg-[#250F0F] ml-[-24px]">
              <div className="w-full h-full grid grid-cols-2 text-sm">
                <div className="flex items-center justify-center border-r border-[#7070705E]">
                  <CircleSmall width={15} height={15} color="red" fill="red" /> &nbsp; Live Chat
                </div>
                <div className="flex items-center justify-center">Comments</div>
              </div>
            </div>

            {/*  Match Info Row Below Toggle Bar */}
            <div className="w-[480px] h-[45px] bg-[#170000] border-b border-[#403232] flex justify-between items-center px-4 text-white ml-[-24px]">
              {/* Left: Image + Text */}
              <div className="flex items-center gap-3">
                <Image
                  src={chatlogo}
                  alt="chatlogo"
                  width={50}
                  height={50}
                  className="rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="flex flex-col leading-tight">
      <p className="text-sm sm:text-base font-medium">England vs India</p>
      <p className="text-xs text-[#E60019]">7 Participants</p>
    </div>
              
              </div>

              <Maximize2 className="w-4 h-4 cursor-pointer hover:scale-105 transition" />
            </div>

            <div className='flex flex-col '>

            </div>

<div className="flex flex-col items-center text-white text-[10px] space-y-1">
  <p>Start of conversation</p>
  <div className="bg-[#250F0F] w-24 h-6 flex items-center justify-center">
    <p>June 28, 2025</p>
  </div>

</div>

   {chats.map(({ id, avatar, username, message, time }) => (
  <div key={id} className="w-[480px] bg-[#170000] flex justify-between items-center px-4 text-white ml-[-24px] py-2">
    {/* Left: avatar + username + message */}
    <div className="flex items-center gap-3">
      <Image
        src={avatar}
        alt={`${username} avatar`}
        width={40}
        height={40}
        className="rounded-2xl object-cover"
        loading="lazy"
      />
      <div className="flex flex-col leading-tight">
        <p className="text-[12px] font-semibold">{username}</p>
        <p className="text-[10px] text-gray-300">{message}</p>
      </div>
    </div>

    {/* Right: grouped icons & time */}
    <div className="flex items-center gap-1 text-gray-400">
      <Star className="w-3 h-3 cursor-pointer hover:scale-105 transition" color="yellow" />
      <p className="text-[10px] leading-none">{time}</p>
      <EllipsisVertical className="w-3 h-3 cursor-pointer hover:scale-105 transition" />
    </div>
  </div>
))}




          </div>
        </div>
      </div>
    </div>
  );
}

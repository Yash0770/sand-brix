import React from 'react';
import {
  ChevronLeft,
  CircleSmall,
  EllipsisVertical,
  Eye,
  Flag,
  Folder,
  Gift,
  Lightbulb,
  Maximize2,
  MessageCircle,
  Share2,
  Star,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';
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
    message: "Hello John! Yes, I'm here.I am enjoying this game it is superb may best team win the match 🤩😎",
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
  },
   {
    id: 3,
    avatar: chatlogo,
    username: "Mike Johnson",
    message: "Great game today!",
    time: "9:47",
  }
  ,
  ];

  function getInitials(name:any) {
  const names = name.split(' ');
const initials = names.map((n: string) => n[0]).join('');
  return initials.toUpperCase();
}

  return (
    <div
      className="bg-[#180000] w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url('img/402633.png')`,
      }}
    >
      {/* Removed outer padding/margin container */}
      <div className="w-full py-2">
        {/* Removed gap between video and chat */}
        <div className="flex items-start border-b border-[#7070705E]">

          {/* Video Container */}
          <div
            className="w-full lg:w-[70%] aspect-[16/9] bg-cover bg-center relative border border-[#7070705E]"
            style={{ backgroundImage: "url('img/402633.png')" }}
          >
            <video
              className="w-full h-full object-cover"
              controls
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            >
              Your browser does not support the video tag.
            </video>

            {/* Video bottom info */}
            <div className="flex items-center justify-between mt-4 px-4 text-white w-full">
              <p className="text-md">
                England vs India, 1st Test at Leeds, ENG vs IND, Jun 20 2025 - Full Scorecard
              </p>
              <div className="flex gap-2">
                {[Lightbulb, ChevronLeft].map((Icon, i) => (
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
                    {isThumb && (
                      <div className="absolute -top-1 -right-1 bg-[#2B2B2B] text-[8px] text-white w-4 h-4 flex items-center justify-center rounded">
                        {count}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chat Container */}
          <div className="w-full lg:w-[30%] flex flex-col  max-h-[calc(16/9*70vw)] overflow-y-auto bg-[#170000]">
            {/* Live Chat / Comments toggle bar */}
            <div className="h-[55px] border-b border-[#7070705E] flex justify-center items-center text-center text-white bg-[#250F0F]">
              <div className="w-full h-full grid grid-cols-2 text-sm">
                <div className="flex items-center justify-center border-r border-[#7070705E]">
                  <CircleSmall width={15} height={15} color="red" fill="red" /> &nbsp; Live Chat
                </div>
                <div className="flex items-center justify-center">Comments</div>
              </div>
            </div>

            {/* Match Info Row */}
            <div className="h-[45px]  flex justify-between items-center px-4 text-white">
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

            {/* Start of conversation */}
            <div className="flex flex-col items-center text-white text-[10px] space-y-1 my-2">
              <p>Start of conversation</p>
              <div className="bg-[#250F0F] w-24 h-6 flex items-center justify-center">
                <p>June 28, 2025</p>
              </div>
            </div>

            {/* Chat messages */}
        {/* Chat Messages */}
{/* Chat Messages or Empty State */}
<div className="flex flex-col bg-[#170000]">
  {chats.length > 0 ? (
    chats.map(({ id, avatar, username, message, time }) => (
      <div
        key={id}
        className="flex justify-between items-center px-4 text-white py-2"
      >
        <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#863535] flex items-center justify-center text-white font-semibold text-sm select-none">
  {getInitials(username)}
</div>
          <div className="flex flex-col leading-tight">
            <p className="text-[12px] font-semibold">{username}</p>
            <p className="text-[10px] text-gray-300">{message}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-400">
              <EllipsisVertical className="w-3 h-3 cursor-pointer hover:scale-105 transition" />
          <Star className="w-3 h-3 cursor-pointer hover:scale-105 transition" color="yellow" />
          <p className="text-[10px] leading-none">{time}</p>
        
        </div>
      </div>
    ))
  ) : (
    <div className="flex justify-center items-center py-8 text-gray-500 text-sm">
      No conversations yet.
    </div>
  )}
</div>


          </div>
        </div>
      </div>
    </div>
  );
}

// WatchNowCard.tsx
import { CircleSmall } from 'lucide-react';
import React from 'react';

import IndiaImg from '../../../assets/sports/india-flag.jpg'
import EngImg from '../../../assets/sports/england-flag.jpg'
import Image from 'next/image';

export default function ScoreCard() {
  return (
    <div
      className="mx-auto mt-8 rounded-md"
      style={{
        background: '#2D0000 0% 0% no-repeat padding-box',
        opacity: 1,
        width: '800px',
        height: '255px',
        borderRadius: '5px',
      }}
    >

 
 <div className='flex justify-center items-center text-center mt-8'> 
    <p className="text-[14px] text-white inline-flex items-center gap-2">
  <span className="inline-flex items-center">
    <CircleSmall width={15} height={15} color="red" fill="red" />
  </span>
 <span className='text-[#FF0000]'>Live</span> 2nd Test, Delhi (DCA), June 25 - 29, 2025, England tour of India
</p>

 </div>

<div className="flex flex-row items-center justify-center gap-8 mt-4 text-white text-center">

  {/* India: Flag then Text */}
  <div className="flex flex-row items-center gap-2">
   <Image
  src={IndiaImg}
  alt="India national flag"
  width={64}
  height={64}
  className="rounded-full w-[64px] h-[64px] object-cover"
/>
    <div className="flex flex-col items-start text-[17px]">
      <p >India</p>
      <p >616</p>
    </div>
  </div>

  {/* Center Number */}
  <div className="text-[60px] font-bold ml-10 mr-10">4</div>

  {/* England: Text then Flag */}
  <div className="flex flex-row items-center gap-2">
       <div className="flex flex-col items-start text-[17px]">
      <p>England</p>
      <p>378/9 (108 ov.)</p>
    </div>
   <Image
  src={EngImg}
  alt="England national flag"
  width={64}
  height={64}
  className="rounded-full w-[64px] h-[64px] object-cover"
/>
  </div>

</div>



 <div className='flex justify-center items-center text-center mt-8'> 
    <p className="text-[14px] text-white inline-flex items-center gap-2">
Day 3 - Session 2: India lead by 238 runs.
</p>

 </div>

  <div className='flex justify-center items-center text-center mt-2'> 
    <p className="text-[14px] text-white inline-flex items-center gap-2">
Current RR: 3.86 • Min. Ov. Rem: 58 • Last 10 ov (RR): 38/1 (3.80)
</p>

 </div>




    </div>
  );
}

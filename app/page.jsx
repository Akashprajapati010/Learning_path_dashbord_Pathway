'use client';

import Link from 'next/link';
import { ReactTyped } from 'react-typed';
export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black/50 text-center px-4 ">
        <h1 className="text-[60px] font-extrabold text-gray-900"> Welcome to{' '}
          <ReactTyped
            strings={['Pathway', 'Your Mentor', 'Skill Builder']}
            typeSpeed={250}
            backSpeed={50}
            loop={true}
            className="text-blue-900 font-extrabold "
/>
</h1>

        <h2 className="water-text text-xl text-center  text-gray-200 italic max-w-2xl">
          "Skill is not something you're born with — it's something you build.
          Every small step you take today is shaping the expert you'll become tomorrow."
        </h2>

        <Link href="/browse">
          <button className="mt-4 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-teal-700 transition">
            Start Exploring Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

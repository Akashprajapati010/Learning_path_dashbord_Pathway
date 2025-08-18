"use client"
import React from 'react';
import Image from 'next/image';
import { Book, YoutubeIcon } from 'lucide-react';

function CategoryItem({ course }) {
  return (
    <div>
    <div className='border-2 border-gray-200 rounded-lg p-2 shadow-md cursor-pointer hover:border-teal-200 bg-emerald-100'>
      {course?.banner?.url && (
        <Image
          src={course.banner.url}
          alt={course.name}
          width={1000}
          height={500}
          className='rounded-lg'
        />
      )}
      <div className='mt-2'>
        <h2 className='text-[17px] md:text-[15px] font-medium'>{course.name}</h2>
        <h2 className='text-gray-400 text-[12px]'>{course.author}</h2>

        {course.totalChapters && (
          <div className='flex items-center gap-2 mt-2'>
            <Book className='h-6 w-6 text-teal-600 rounded-full bg-teal-100 p-1' />
            <h2 className='text-[12px] text-gray-400'>{course.totalChapters} Chapters</h2>
          </div>
        )}

        {course.youtubeUrl && (
          <div className='flex items-center gap-2 mt-2'>
            <YoutubeIcon className='h-6 w-6 text-red-600 rounded-full bg-red-100 p-1' />
            <h2 className='text-[12px] text-gray-400'>Available on YouTube</h2>
          </div>
        )}

        <h2 className='mt-2 text-gray-700 text-[13px]'>{course.free ? 'Free' : 'Paid'}</h2>
      </div>
    </div>
    </div>
  );
}

export default CategoryItem;

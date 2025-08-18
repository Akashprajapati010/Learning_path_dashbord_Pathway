import { CheckCircle2 } from 'lucide-react';
import React, { useContext } from 'react'
import { CompletedChapterContext } from '../../../../../_context/CompletedChapterContext';
import { markChapterCompleted} from './../../../../../_services/index';

function FullVideoPlayer({userCourse, activeChapter }) {
  console.log(activeChapter);
  const {completedChapter,setCompletedChapter}=
  useContext(CompletedChapterContext)

  const isChapterCompleted=(chapterId)=>{
      return completedChapter.find(item=>item.chapterId==chapterId)
  }

  const markChapterCompleted=async()=>{
      if(!completedChapter?.length)
      {
        setCompletedChapter([]);
      }
      completedChapter?setCompletedChapter(
        [...completedChapter,
          {
            chapterId:activeChapter?.chapterNumber+""
          }]
      ):setCompletedChapter([ {
            chapterId:activeChapter?.chapterNumber+""
          }]);
          console.log(completedChapter);   
        
      // await markChapterCompleted(userCourse?.id,activeChapter?.chapterNumber).then(resp=>{
      //   console.log(resp);
      //   })
  }
  
  return activeChapter&&(
    <div className='p-5'>
      <video width="1500" height="250"
      key={activeChapter?.video?.url}
        controls controlsList='nodownload'>
        <source src={activeChapter?.video?.url}
          type='video/mp4'
        />
      </video>
      <div className='p-5 border-2 border-gray-300 rounded-lg mt-5 flex justify-between items-center'>
        <h2 className='text-[20px] font-medium'>{activeChapter?.name}</h2>
        {!isChapterCompleted(activeChapter.chapterNumber)?
        <button className='bg-teal-500 text-white p-2 px-5 rounded-lg flex gap-2
        hover:bg-teal-700'
        onClick={()=>markChapterCompleted()}>
          <CheckCircle2/> <h2>Mark as Completed</h2>
        </button>:null}
        {/* {<button className=' text-teal-600
        border border-teal-600 p-2 px-5 rounded-lg flex gap-2
        hover:bg-teal-100'>
          <XCircle/> <h2>Mark InComplet</h2>
        </button>} */}
      </div>
    </div>
  )
}

export default FullVideoPlayer

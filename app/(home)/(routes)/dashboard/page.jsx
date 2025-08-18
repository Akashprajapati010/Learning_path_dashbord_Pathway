// "use client"
// import React, { useEffect, useState } from 'react'
// import { GetUserCourseList } from '../../../_services'
// import { useUser } from '@clerk/nextjs'
// import CategoryItem from '../../_components/CategoryItem';

// function Dashboard() {
//     const {user} = useUser();
//     const [userCourseList,setUserCourseList] = useState([]);

//     useEffect(()=>{
//         user?getUserCourse():null;
//     },[user])
//     const getUserCourse = async()=>{
//         await GetUserCourseList(user.primaryEmailAddress.emailAddress)
//         .then(resp=>{
//             console.log(resp?.userEnrollCourses)
//             if(resp)
//                 setUserCourseList(resp?.userEnrollCourses)
//         })
//     }
//   return (
//     <div>
//        {/* {!userCourseList?   <> */}
//         <h2 className='text-[20px] font-medium'>My Enrolled Courses:</h2>
//       <div className='grid grid-cols-1 sm:grid-cols-2
//         md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5'>
//             {/* {userCourseList&&userCourseList.map((course)=>(
//                 <div>
//                     <CategoryItem course={course?.courseLists[0]}/>
//                 </div>
//             ))}
//         </div>
//         </>:
//         <div className='flex justify-center items-center
//         text-[20px] mt-20 text-gray-500'>
//             <h2>You don't have any course enrolled</h2>
//         </div>}
//     </div>
//   )
// } */}
//   {userCourseList && userCourseList.length > 0 ? (
//           userCourseList.map((course, index) => {
//             const courseData = course?.courseLists?.[0]
//             return courseData ? (
//               <div key={courseData?.id || index}>
//                 <CategoryItem course={courseData} />
//               </div>
//             ) : null
//           })
//         ) : (
//           <p className='text-gray-500'>You haven't enrolled in any courses yet.</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Dashboard
"use client"
import React, { useEffect, useState } from 'react'
import { GetUserCourseList } from '../../../_services'
import { useUser } from '@clerk/nextjs'
import CategoryItem from '../../_components/CategoryItem'

function Dashboard() {
  const { user } = useUser()
  const [userCourseList, setUserCourseList] = useState([])

  useEffect(() => {
    if (user) {
      getUserCourse()
    }
  }, [user])

  const getUserCourse = async () => {
    try {
      const resp = await GetUserCourseList(user.primaryEmailAddress.emailAddress)
      console.log("API Response:", resp?.userEnrollCourses)
      if (resp?.userEnrollCourses) {
        setUserCourseList(resp.userEnrollCourses)
      }
    } catch (error) {
      console.error("Failed to fetch user courses:", error)
    }
  }

  return (
    <div>
      <h2 className='text-[20px] font-medium'>My Enrolled Courses:</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5'>
        {userCourseList && userCourseList.length > 0 ? (
          userCourseList.map((course, index) => {
            const courseData = course?.courseLists?.[0]
            return courseData ? (
              <div key={courseData?.id || index}>
                <CategoryItem course={courseData} />
              </div>
            ) : null
          })
        ) : (
          <p className='text-gray-500'>You haven't enrolled in any courses yet.</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard

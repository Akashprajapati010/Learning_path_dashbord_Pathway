import request, { gql } from "graphql-request"
const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"

export const getCourseList=async()=>{
    const query=gql`
    query courseList {
  courseLists {
    name
    banner {
      url
     
    }
    free
    id
    author
    totalChapters
    tag
  }
}
    `
    const result=await request(MASTER_URL,query);
    return result;
}
export const getCourseById=async(id,userEmail)=>{
    const query=gql`
    query course {
  courseList(where: {id: "`+id+`"}) {
    chapter {
      ... on Chapter {
        id
        name
        chapterNumber
        video {
          url  
        }
        
        youtubeUrl

      }
    }
    description
    name
    id
    free
    author
    totalChapters
    
   
  }
    userEnrollCourses(where: {courseId: "`+id+`",
    userEmail: "`+userEmail+`"}) {
    courseId
    userEmail
    completedChapter {
      ... on CompletedChapter {
        chapterId
      }
    }
      id
  }
}
    `
    const result=await request(MASTER_URL,query);
    return result;
}

export const EnrollCourse=async(courseId,userEmail)=>{
  const mutationQuery=gql`
  mutation EnrollCourse {
   createUserEnrollCourse(data: {userEmail: "`+userEmail+`", 
    courseId: "`+courseId+`"}) {
    id
   }
}
  `
  const result=await request(MASTER_URL,mutationQuery);
    return result;
}

export const PublishCourse=async(id)=>{
  const mutationQuery=gql`
  mutation EnrollCourse {
  publishUserEnrollCourse(where: {id: "`+id+`"}) {
    id
  }
}
  `
  const result=await request(MASTER_URL,mutationQuery);
    return result;
}

export const markChapterCompleted=async(recordId,chapterNumber)=>{
  const mutationQuery=gql`
  mutation MarkChapterComplete {
  updateUserEnrollCourse(
    where: {id: "`+recordId+`"}
    data: {completedChapter: {create: 
    {CompletedChapter: {data: {chapterId: "`+chapterNumber+`"}}}}}
  ) {
    id
  }
  publishManyUserEnrollCoursesConnection(to: PUBLISHED) {
    edges {
      node {
        id
      }
    }
  }
}
  `
  const result=await request(MASTER_URL,mutationQuery);
    return result;
}
export const GetUserCourseList=async(userEmail)=>{
  const query=gql`
  query UserCourseList {
  userEnrollCourses(where: {userEmail: "`+userEmail+`"}) {
    courseLists {
      banner {
        url
      }
      description
      id
      name
      free
      sourceCode
      tag
      totalChapters
      author
    }
  }
}`

const result=await request(MASTER_URL,query);
    return result;
}
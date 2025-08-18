"use client"
import React, { useEffect } from 'react'
import SearchBar from './../_components/SearchBar'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';

function Header() {
    const {user}=useUser();
    const router = useRouter();
    useEffect(()=>{
        console.log(user)
    },[user])
    
  return (
    <div className='ml-64 p-6 border-0 border-gray-50 shadow-sm flex item-center justify-between'>
      <SearchBar/>

      {!user?
      <button onClick={()=>router.push('/sign-in')} className='
      bg-teal-500 text-white pl-4 pr-4 text-[18px] rounded-4xl font-semibold
      hover:bg-teal-700 hover:text-white'>Login</button>
      :
      <UserButton/>}
    </div>
  )
}

export default Header

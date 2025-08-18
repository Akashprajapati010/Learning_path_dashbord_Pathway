"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Layout, Mail, Search, Shield } from 'lucide-react'
import { useRouter } from 'next/navigation'

function SideBarNav() {
    const router = useRouter();
    const menuList = [
        {
            id: 1,
            name: 'Browse',
            icon: Search,
            path: '/browse'
        },
        {
            id: 2,
            name: 'Dashboard',
            icon: Layout,
            path: '/dashboard'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        },
        {
            id: 4,
            name: 'Newsletter',
            icon: Mail,
            path: '/newsletter'
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='h-full bg-white border-b border-gray-200 flex flex-col overflow-y-auto shadow-md'>
            <div className='p-5 border-0 z-50'>
                <Image src='/logo.jpg' alt='logo' width={170} height={100} />
            </div>
            <div className='flex flex-col'>
                {menuList.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex gap-2 items-center p-4 px-6 text-gray-500
                        hover:border-emerald-400 font-semibold
                        hover:bg-gray-100 cursor-pointer
                        ${activeIndex === index ? 'border-teal-600 bg-teal-50 text-teal-600' : ''}`}
                        onClick={() => {
                            setActiveIndex(index);
                            router.push(item.path); // <--- navigation added
                        }}
                    >
                        <item.icon />
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBarNav

'use client'

import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type Props = {}

const Navbar = (props: Props) => {
    const pathname = usePathname()
  return (
    <div className='h-14 bg-zinc-950 border-b-gray-400 border-b-2 px-8 flex items-center dark:bg-black select-none'>
        <div className="flex items-center justify-between w-full">
            <Logo text="These2.0"/>
            <div className='flex items-center gap-5'>
                <Link href={'/categories'}>
                    <p className={cn(pathname === "/categories" ? "font-semibold" : " font-light", "text-white" )}>Categories</p>
                </Link>
                <Link href={'/search'}>
                    <p className={cn(pathname === "/search" ? "font-semibold" : "font-light", "text-white" )}>Search</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
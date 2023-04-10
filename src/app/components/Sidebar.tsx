'use client'

import { useState } from 'react'
import { CloseSidebarIcon, HomeIcon, LogoutIcon, OpenSidebarIcon, SettingsIcon, UserCircleIcon, UsersIcon } from './Icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar () {
  const [showSidebar, setShowSidebar] = useState(false)

  const menus = [
    {
      href: '/',
      title: 'Home',
      icon: <HomeIcon stroke='currentColor' width='20' height='20' />
    },
    {
      href: '/users',
      title: 'Usuarios',
      icon: <UsersIcon stroke='currentColor' width='20' height='20' />
    },
    {
      href: '/login',
      title: 'Login',
      icon: <UserCircleIcon stroke='currentColor' width='20' height='20' />
    },
    {
      href: '/settings',
      title: 'Configuración',
      icon: <SettingsIcon stroke='currentColor' width='20' height='20' />
    }
  ]

  const toogleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <>
      <div className='w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex h-full'>
        <div className='p-8'>
          <div className='flex align-center justify-center'>
            <div className='relative w-32 h-32 bg-white bg-opacity-90 rounded-xl'>
              <Image src='/Logo.png' fill title='Logo asociación alcalareña de carnaval' alt='Logo asociación alcalareña de carnaval' />
            </div>
          </div>
          <ul className='mt-12'>
            {
                    menus.map(menu => {
                      return (
                        <li key={menu.href} className='flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6'>
                          <Link href={menu.href} className='flex items-center '>
                            {menu.icon}
                            <span className='text-sm ml-2'>{menu.title}</span>
                          </Link>
                        </li>
                      )
                    })
                }
          </ul>
        </div>
        <div className='px-8 border-t border-gray-700'>
          <ul className='w-full flex items-center justify-center bg-gray-800 text-gray-400 hover:text-gray-300'>
            <li className='cursor-pointer p-5'>
              <button aria-label='show' className='flex justify-center items-center '>
                <LogoutIcon stroke='currentColor' width='20' height='20' />
                <span className='text-sm ml-2'>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between flex sm:hidden transition duration-150 ease-in-out h-full' style={{ transform: (showSidebar ? 'translateX(-260px)' : 'translateX(0px)') }}>
        <button aria-label='toggle sidebar' className='h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white' onClick={toogleSidebar}>
          {
            showSidebar ? <OpenSidebarIcon /> : <CloseSidebarIcon />
            }
        </button>
        <div className='p-8'>
          <div className='flex align-center justify-center'>
            <div className='relative w-32 h-32 bg-white bg-opacity-90 rounded-xl'>
              <Image src='/Logo.png' fill title='Logo asociación alcalareña de carnaval' alt='Logo asociación alcalareña de carnaval' />
            </div>
          </div>
          <ul className='mt-12'>
            {
                    menus.map(menu => {
                      return (
                        <li className='flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6' key={menu.href}>
                          <Link href={menu.href} className='flex items-center '>
                            {menu.icon}
                            <span className='text-sm ml-2'>{menu.title}</span>
                          </Link>
                        </li>
                      )
                    })
                }
          </ul>
        </div>
        <div className='px-8 border-t border-gray-700'>
          <ul className='w-full flex items-center justify-center bg-gray-800 text-gray-400 hover:text-gray-300'>
            <li className='cursor-pointer p-5 w-100'>
              <button aria-label='show' className='flex justify-center items-center '>
                <LogoutIcon stroke='currentColor' width='20' height='20' />
                <span className='text-sm ml-2'>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

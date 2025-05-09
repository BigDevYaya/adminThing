import React from 'react'
import { AlignLeft, Search } from 'lucide-react';
import { useState } from 'react';
import SideMenu from './SideMenu';

const activity = [
    'Reputation',
    'New Users',
    'Voters',
    'Editors',
    'Moderators'
]

const Header = ({value, onChange}) => {
    const [clickedIndex, setClickedIndex] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='xl:mx-28 xl:my-10 mx-5 my-3 sticky top-0 bg-white pb-2 z-50'>
    <h1 className='font-semibold text-3xl mb-3'>Users</h1>
    <div className='flex justify-between items-center my-2'>
        <div className="flex items-center border rounded-md px-3 py-2 md:w-full max-w-md">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
            type="search"
            placeholder="Search here"
            className="flex-1 outline-none bg-transparent text-black placeholder-gray-400"
            value={value}
            onChange={onChange}
        />
        </div>
        <ul className='lg:flex lg:gap-4 lg:items-center lg:justify-center-safe hidden'>
            {
                activity.map((act, i) => (
                    <li key={i} className={`cursor-default py-3 px-3  hover:rounded-sm ${clickedIndex === i ? 'bg-[#849fff]  rounded-sm' : 'hover:font-medium hover:bg-[#fbfcff]'}`} onClick={() => setClickedIndex(i)}><a>{act}</a></li>
                ))

            }
        </ul>
        <AlignLeft className='lg:hidden' onClick={() => setShowMenu(prev => !prev)} />
    </div> 
    {
        showMenu ? <SideMenu /> : ''
    }
    </header>
  )
}

export default Header
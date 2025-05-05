import React from 'react'
import { Search } from 'lucide-react';
import { useState } from 'react';

const activity = [
    'Reputation',
    'New Users',
    'Voters',
    'Editors',
    'Moderators'
]

const Header = ({value, onChange}) => {
    const [clickedIndex, setClickedIndex] = useState(null);
  return (
    <header className='mx-28 my-10'>
    <h1 className='font-semibold text-3xl mb-3'>Users</h1>
    <div className='flex justify-between items-center my-2'>
        <div className="flex items-center border rounded-md px-3 py-2 w-full max-w-sm">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
            type="search"
            placeholder="Search here"
            className="flex-1 outline-none bg-transparent text-black placeholder-gray-400"
            value={value}
            onChange={onChange}
        />
        </div>
        <ul className='flex gap-4 items-center justify-center-safe'>
            {
                activity.map((act, i) => (
                    <li key={i} className={`cursor-default py-3 px-3  hover:rounded-sm ${clickedIndex === i ? 'bg-[#849fff]  rounded-sm' : 'hover:font-medium hover:bg-[#fbfcff]'}`} onClick={() => setClickedIndex(i)}>{act}</li>
                ))

            }
        </ul>
    </div> 
    </header>
  )
}

export default Header
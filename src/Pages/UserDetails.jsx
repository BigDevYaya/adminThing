import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router'
import users from '../assets/data.json'

const UserDetails = () => {
    const { userId } = useParams()
    console.log(userId)
    const user = users.find(u => u.id === Number(userId));
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <Link 
          to={`/`} 
          className="fixed top-6 left-6 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-blue-200/50 hover:scale-105 transition-all duration-300 group z-50"
        >
          <ArrowLeft className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
        </Link>

        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/70 backdrop-blur-lg shadow-2xl shadow-blue-100/30 rounded-[2.5rem] border border-blue-100/50 overflow-hidden'>
          <div className='relative lg:border-r border-blue-100/30 p-12 flex items-center justify-center bg-gradient-to-b from-blue-50/30 to-white'>
            <div className='relative'>
              <img 
                src={user.ProfilePic}
                alt="Profile" 
                className='w-72 h-72 object-cover rounded-full border-8 border-white shadow-2xl shadow-blue-200/50 ring-8 ring-blue-100/20 hover:ring-blue-100/40 transition-all duration-500'
              />
              <div className='absolute inset-0 rounded-full animate-pulse' aria-hidden="true" />
            </div>
          </div>

          <div className='flex flex-col p-8 sm:p-12 space-y-8'>
            <div className='space-y-2'>
              <h1 className='text-4xl font-bold text-blue-900 tracking-tighter'>
                {user.FullName}
              </h1>
              <div className='flex items-center space-x-2'>
                <span className='w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
                <p className='text-lg font-medium text-blue-600/90'>
                  {user.location}
                </p>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='bg-blue-50/40 p-6 rounded-2xl border-l-4 border-blue-400'>
                <p className='text-sm font-semibold text-blue-700/90 uppercase tracking-wide mb-3'>
                  Bio
                </p>
                <p className='text-blue-600/90 leading-relaxed'>
                  {user.bio}
                </p>
              </div>

              {/* Hobbies Section */}
              <div className='bg-gradient-to-br from-white to-blue-50/50 p-6 rounded-2xl shadow-inner shadow-blue-100/30'>
                <div className='mb-6'>
                  <p className='text-sm font-semibold text-blue-700/90 uppercase tracking-wide'>
                    Hobbies & Interests
                  </p>
                  <div className='mt-2 w-12 h-1 bg-blue-400 rounded-full' />
                </div>

                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {user.hobbies.map((hobby, index) => (
                    <li 
                      key={index}
                      className='flex items-center space-x-3 p-3 rounded-xl bg-white/50 hover:bg-blue-50/50 transition-colors duration-200 border border-blue-100/30'
                    >
                      <span className='w-3 h-3 bg-blue-400 rounded-full flex-shrink-0' />
                      <span className='text-blue-700/90 font-medium'>{hobby}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
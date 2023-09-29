'use client'
import React from 'react'
import {PiSealCheckFill} from 'react-icons/pi'
import './globals.css'

const Experience = () => {
  return (
    <section className="h-screen w-full" id='experience'>
      <div className="container mx-auto px-24 flex justify-center items-center flex-col">
        <span className="text-gray-600">Explore My</span>
        <h2 className='text-5xl font-semibold py-6'>Experience</h2>
          <ul className='flex items-center justify-between gap-10 mt-20'>
            <li className=' px-20 py-3 flex items-center justify-start flex-col rounded-2xl border-2 border-zinc-600 item'>
              <p className='text-2xl font-semibold text-gray-500 py-2'>Frontend Development</p>
              <div className='flex items-start justify-center gap-x-40 mt-4 '>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div className=''>
                        <p className='text-black font-semibold uppercase'>Html</p>
                        <span className='text-gray-500 font-medium'>Experienced</span>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div>
                        <p className='text-black font-semibold uppercase'>Sass</p>
                        <span className='text-gray-500 font-medium'>Intermediate</span>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div>
                        <p className='text-black font-semibold uppercase'>Bootstrap</p>
                        <span className='text-gray-500 font-medium'>Experienced</span>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div>
                        <p className='text-black font-semibold'>React JS</p>
                        <span className='text-gray-500 font-medium'>Intermediate</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div className=' items-start'>
                        <p className='text-black font-semibold uppercase'>Css</p>
                        <span className='text-gray-500 font-medium'>Experienced</span>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div className='items-start'>
                        <p className='text-black font-semibold'>JavaScript</p>
                        <span className='text-gray-500 font-medium'>Basic</span>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div className=' items-start'>
                        <p className='text-black font-semibold'>Material UI</p>
                        <span className='text-gray-500 font-medium'>Intermediate</span>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div className=' items-start'>
                        <p className='text-black font-semibold'>Next JS</p>
                        <span className='text-gray-500 font-medium'>Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className=' px-20 py-3 flex items-center justify-start flex-col rounded-2xl border-2 border-zinc-600 item'>
              <p className='text-2xl font-semibold text-gray-500 py-2'>Backend Development</p>
              <div className='flex items-start justify-center gap-x-40 mt-4 '>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div className=''>
                        <p className='text-black font-semibold'>Node JS</p>
                        <span className='text-gray-500 font-medium'>Beginner</span>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div>
                        <p className='text-black font-semibold'>Express JS</p>
                        <span className='text-gray-500 font-medium'>Beginner</span>
                    </div>
                  </div>

                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-start gap-4'>
                    <PiSealCheckFill className="text-2xl"/> 
                    <div className=' items-start'>
                        <p className='text-black font-semibold'>Nest Js</p>
                        <span className='text-gray-500 font-medium'>Beginner</span>
                    </div>
                  </div>

                </div>
              </div>
            </li>
          </ul>
      </div>
    </section>
  )
}

export default Experience;

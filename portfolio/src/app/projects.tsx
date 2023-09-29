import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import projectImage from '../../public/istockphoto-1147544807-612x612.jpg';
import './globals.css'

const Projects = () => {
  return (
    <section className='w-full h-screen' id='projects'>
      <div className='mx-auto container px-24 text-center '>
            <span className="text-gray-600">Browse My Recent</span>
            <h2 className=' text-5xl font-semibold py-6'>Projects</h2>
            <ul className='flex gap-x-9'>
                <li className='p-8 rounded-3xl border border-gray-700 flex items-center flex-col justify-center w-5/12'>
                  <div className='project-image relative cursor-pointer'>
                     <Image alt='project-image' src={projectImage} className='rounded-3xl '/>
                  </div>
                  <h2 className='font-semibold text-2xl py-4'>Project Name</h2>
                  <div className='flex items-center w-full justify-between'>
                    <Link href={'/'} className=' btn px-6 py-2 rounded-3xl border border-gray-700 font-semibold text-sm'>GitHub</Link>
                    <Link href={'/'} className=' btn px-6  py-2 rounded-3xl border border-gray-700 font-semibold text-sm'>Live Demo</Link>
                  </div>
                </li>
                <li className='p-8 rounded-3xl border border-gray-700 flex items-center flex-col justify-center w-5/12 '>
                  <div className='project-image relative'>
                     <Image alt='project-image' src={projectImage} className='rounded-3xl '/>
                  </div>                 
                  <h2 className='font-semibold text-2xl py-4'>Project Name</h2>
                  <div className='flex items-center w-full justify-between'>
                    <Link href={'/'} className=' btn px-6 py-2 rounded-3xl border border-gray-700 font-semibold text-sm'>GitHub</Link>
                    <Link href={'/'} className=' btn px-6  py-2 rounded-3xl border border-gray-700 font-semibold text-sm'>Live Demo</Link>
                  </div>
                </li>
                <li className='p-8 rounded-3xl border border-gray-700 flex items-center flex-col justify-center w-5/12 '>
                  <div className='project-image relative'>
                     <Image alt='project-image' src={projectImage} className='rounded-3xl '/>
                  </div>                  <h2 className='font-semibold text-2xl py-4'>Project Name</h2>
                  <div className='flex items-center w-full justify-between'>
                    <Link href={'/'} className='btn px-6 py-2 rounded-3xl border border-gray-700 font-semibold text-sm'>GitHub</Link>
                    <Link href={'/'} className=' btn px-6  py-2 rounded-3xl border border-gray-700 font-semibold text-sm'>Live Demo</Link>
                  </div>
                </li>
            </ul>
      </div>
    </section>
  )
}

export default Projects

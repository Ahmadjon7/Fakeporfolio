'use client'

import Image from 'next/image'
import React from 'react'
import myImage from '../../public/istockphoto-1147544807-612x612.jpg'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'
import useDownloader from 'react-use-downloader'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Contact from './contact'

export default function Home() {
  const { download } = useDownloader();

  const fileUrl = '/__Ahmadjon__.pdf';
  const filename = '__Ahmadjon__.pdf';

  return (
    <main className='mx-auto'>
      <section className="h-screen flex items-center justify-center">
        <div className='flex justify-around items-center container w-auto gap-20 mb-20'>
          <Image src={myImage} alt={'my-image'} width={288} height={288} className='rounded-full' />
          <div className='flex flex-col items-center gap-2'>
            <p className='font-medium'>Hello , I am </p>
            <h2 className='font-semibold text-3xl tracking-wide hero-text'>Karimov Ahmadjon</h2>
            <h1 className='font-semibold text-2xl tracking-wide text-slate-500'>Frontend Developer</h1>
            <div className='flex justify-center gap-3'>
              <button className='btn rounded-full border-slate-950 p-3 flex items-center justify-center font-medium border' onClick={() => download(fileUrl, filename)}>
                Download CV
              </button>
              <button className=' btn hover:bg-transparent hover:text-black  rounded-full border-slate-950 p-3 flex items-center justify-center font-medium border bg-stone-800 text-white hover:transition hover:ease-in-out hover:duration-300'>Contact Info</button>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <Link href={'https://www.linkedin.com/in/ahmadjon-karimov-b2409625a/'}>
                <AiFillLinkedin className="text-3xl" />
              </Link>
              <Link href={'https://github.com/Ahmadjon7'}>
                <AiFillGithub className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  )
}

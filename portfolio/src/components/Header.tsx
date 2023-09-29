import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full bg-white p-10 h-6 transition ease-in-out'>
      <nav className=' container mx-auto flex items-center justify-around md:container'>
        <Link href='/' className='text-3xl'>
          Ahmadjon
        </Link>
        <ul className='flex items-center justify-between w-96 gap-5'>
          <li>
            <Link href='#about' scroll={true} className="text-2xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-slate-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-slate-400 ">About</Link>
          </li>
          <li>
            <Link href='#experience' scroll={true} className="text-2xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-slate-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-slate-400" >Experience</Link>
          </li>
          <li>
            <Link href='#projects' className="text-2xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-slate-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-slate-400 ">Projects</Link>
          </li>
          <li>
            <Link href='#contact' className="text-2xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-slate-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-slate-400 ">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

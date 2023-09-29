import React from 'react'
import Link from 'next/link'


const Contact = () => {
    return (
        <section className="w-full h-screen" id='contact'>
            <div className="container mx-auto px-24 flex items-center justify-between h-full flex-col " >
                <div className='flex items-center justify-center flex-col'>
                    <span className="text-gray-600">Get In Touch</span>
                    <h2 className='text-5xl font-semibold py-6'>Contact Me</h2>
                    <form className='flex flex-col items-end gap-4 w-96 mt-10' action="https://formsubmit.co/2e23b6bb95ca63317849378326b4aff4 " method='POST'>
                        <input type="text" name="name" placeholder='Full Name' className=" border-2 p-2 w-full rounded-md outline-none border-gray-500" required />
                        <input type="email" name='email' placeholder='Email' className="border-2 p-2 w-full rounded-md outline-none border-gray-500 " required />
                        <textarea name='message' placeholder='Enter text here...' className='border-2 p-2 w-full rounded-md outline-none border-gray-500 h-36' required />
                        <button className="bg-black text-white text-lg rounded-md w-full p-2" type='submit'>Send Message</button>
                    </form>
                </div>
                <nav className="flex items-center justify-center flex-col gap-8 pb-3">
                    <ul className='flex items-center justify-between w-96 gap-5'>
                        <li>
                            <Link href='#about' scroll={true} className="text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-slate-400
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300 hover:text-slate-400 ">About</Link>
                        </li>
                        <li>
                            <Link href='#experience' scroll={true} className="text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-slate-400
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300 hover:text-slate-400" >Experience</Link>
                        </li>
                        <li>
                            <Link href='#projects' scroll={true} className="text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-slate-400
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300 hover:text-slate-400 ">Projects</Link>
                        </li>
                        <li>
                            <Link href='#contact' scroll={true} className="text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-slate-400
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300 hover:text-slate-400 ">Contact</Link>
                        </li>
                    </ul>
                    <p className=' text-slate-600 font-medium text-base'>Copyright © 2023 Karimov Ahmadjon. All Rights Reserved</p>
                </nav>
            </div>
        </section>
    )
}

export default Contact

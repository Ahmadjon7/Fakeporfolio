/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import myImage from '../../public/istockphoto-1147544807-612x612.jpg'
import Image from 'next/image'
import {GiAchievement} from 'react-icons/gi'
import {MdPeopleAlt} from 'react-icons/md'

const About = () => {
  return (
    <section id='about' className='h-screen w-full'>
        <div className='flex items-center justify-center flex-col px-24'>
            <span className="text-gray-600">Get To Know More</span>
            <h2 className=' text-5xl font-semibold py-6'>About me</h2>
            <div className="container flex items-center justify-between gap-20 mt-28">
              <div className="w-full">
                <Image src={myImage} alt={'my-image'} width={350} height={300} className='rounded-2xl' />
              </div>
                <div className='flex items-center justify-center flex-col mx-auto w-3/5'>
                  <ul className='flex items-center w-full gap-8 '>
                    <li className='border rounded-3xl border-black py-8 px-12 flex justify-center items-center flex-col w-96'>
                      <GiAchievement className="text-2xl"/>
                      <h4 className=' font-semibold'>Experience</h4>
                      <span className=' text-gray-600'>1+ years</span>
                      <p className=' text-gray-600'>Frontend Development</p>
                    </li>
                    <li className='border rounded-3xl border-black py-8 px-12 flex justify-center items-center flex-col w-96'>
                      <MdPeopleAlt/>
                      <h4 className=' font-semibold'>Education</h4>
                      <span className=' text-gray-600'>Najot Ta'lim</span>
                      <p className=' text-gray-600'>Muhriddin Qodirov</p>
                    </li>
                  </ul>
                  <p className='font-medium mx-auto text-justify mt-8'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste neque adipisci
                     aliquid veniam temporibus reiciendis rem consectetur ipsa, magnam repellat 
                     molestias cupiditate facilis repellendus. Eos dolores odio natus expedita veniam!
                     Quibusdam totam delectus eaque quae tempora similique harum distinctio voluptatem vitae. 
                     Molestias voluptates debitis exercitationem reiciendis nobis explicabo recusandae error quo consequatur?
                  </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;

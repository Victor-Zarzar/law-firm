import Image from 'next/image'
import React from 'react'
import CardHome from '../Card/CardHome'
import Expertise from '../Expertise/Expertise'

export default function Header() {

  return (
    <div className='relative justify-center'>
      <div className='flex justify-center items-center'>
      <Image
            src="/banner.png"
            alt="logo"
            width={800}
            height={400}
            priority
            className="h-44 w-full md:w-10 md:h-10 lg:w-full lg:h-[35rem]"
          />
        <div className="absolute left-2 md:left-40">
          <Image
            src="/logo.png"
            alt="logo"
            width={400}
            height={800}
            priority
            className="h-40 w-40 md:w-10 md:h-10 lg:w-[35rem] lg:h-[35rem]"
          />
        </div>
      </div>
      <CardHome />
      <Expertise />
    </div>
  )
}

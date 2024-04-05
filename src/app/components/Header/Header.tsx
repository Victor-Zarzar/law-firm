import Image from 'next/image'
import React from 'react'
import CardHome from '../Card/CardHome'
import Expertise from '../Expertise/Expertise'
import ButtonWhatsapp from '../ButtonWhatsapp/ButtonWhatsapp'

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
          className="h-44 w-full md:h-[33rem] md:w-full"
        />
        <div className="absolute left-2 md:left-20 lg:left-32">
          <Image
            src="/logo.png"
            alt="logo"
            width={400}
            height={800}
            priority
            className="h-40 w-40 md:w-72 md:h-72 lg:w-3/4 lg:h-5/6"
          />
        </div>
      </div>
      <CardHome />
      <ButtonWhatsapp />
      <Expertise />
    </div>
  )
}

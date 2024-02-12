import Image from 'next/image'
import React from 'react'
import CardHome from '../Card/CardHome'
import Expertise from '../Expertise/Expertise'

export default function Header() {

  const videoHomeScreen = "/homescreen.mp4"

  return (
    <div className='h-[230vh]'>
      <div className='relative flex justify-center items-center'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full max-h-[50vh] object-cover'>
          <source src={videoHomeScreen} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <div className="absolute left-40">
          <Image
            src="/logo.png"
            alt="logo"
            width={400}
            height={400}
            priority
            className="h-8 w-8 md:w-10 md:h-10 lg:w-[35rem] lg:h-[35rem]"
          />
        </div>
      </div>
      <CardHome />
      <Expertise />
    </div>
  )
}

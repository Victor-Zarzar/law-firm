import React from 'react'

export default function Header() {

  const videoHomeScreen = "/homescreen.mp4"

  return (
    <div className='h-screen'>
    <div className='flex justify-center items-center'>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className='w-full max-h-[45vh] object-cover'>
        <source src={videoHomeScreen} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  </div>
  )
}

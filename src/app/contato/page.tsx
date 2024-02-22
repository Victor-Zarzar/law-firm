'use client'
import React from 'react'
import MapsInfo from '../components/Maps/Maps'

export default function Contact() {
  return (
    <div className='h-screen'>
      <h1 className="font-bold text-3xl md:text-4xl leading-10 mb-10 tracking-tight text-black text-center cursor-default mt-20">Nossa Localização:</h1>
      <div className="flex justify-center items-center mt-0 mb-20">
        <MapsInfo />
      </div>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound404() {
  return (
    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-16 md:px-24 py-8 shadow-2xl rounded-md duration-300 hover:scale-105 hover:shadow-xl">
        <p className="text-6xl md:text-9xl font-bold text-gray-300">404</p>
        <p className="text-2xl md:text-5xl font-bold text-black mt-4 text-center">Página não encontrada</p>
        <p className="text-gray-900 mt-4 pb-4 border-b-2 text-center">Desculpe, a página que você está procurando não foi encontrada.</p>
        <Link href="/">
          <Button className='mt-4 w-28 md:w-40 bg-red-800 hover:bg-red-900 text-sm'>Voltar Para Início</Button>
        </Link>
      </div>
    </div>
  )
}

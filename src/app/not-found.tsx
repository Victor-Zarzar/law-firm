import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound404() {
  return (
    <div>
      <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
        <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-black mt-4">Página não encontrada</p>
          <p className="text-gray-900 mt-4 pb-4 border-b-2 text-center">Desculpe, a página que você está procurando não foi encontrada.</p>
          <Link href="/">
            <Button className='mt-4 w-24 md:w-40 bg-red-800 hover:bg-red-900'>Voltar Para Início</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function PensionLaw() {
  return (
    <div className='div mt-2'>
      <div className="text-center bg-red-800 h-20 md:h-36">
        <h1 className="text-white text-sm md:text-2xl p-7 md:p-14">Direito Previdenciário</h1>
      </div>
      <div className='div container mx-auto mt-14 md:mt-14 mb-14 md:mb-20'>
        <Card className="w-[310px] h-[420px] md:w-[1400px] md:h-[620px] mx-auto mb-4 md:mb-8 duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader>
          </CardHeader>
          <CardContent>
            <Image
              src="/direitoprevidenciario.jpg"
              alt="direitoprevidenciario"
              width={400}
              height={400}
              priority
              className="h-12 w-36 md:w-2/4 md:h-44 mx-auto"
            />
            <div className='text-center mt-4 text-sm md:text-lg'>
              <h2>Nossos serviços na área Previdenciária:</h2>
              <ul>
                <li><h3>✓ Aposentadorias;</h3></li>
                <li><h3>✓ Pensão por morte;</h3></li>
                <li><h3>✓ Auxílio-doença;</h3></li>
                <li><h3>✓ Salário-maternidade;</h3></li>
                <li><h3>✓ Salário-família;</h3></li>
                <li><h3>✓ Auxílio-acidente;</h3></li>
                <li><h3>✓ Auxílio-reclusão;</h3></li>
                <li><h3>✓ BPC/LOAS</h3></li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center mt-4">
            <Link href="/areasdeatuacao">
              <Button className='w-24 md:w-40 bg-red-800 hover:bg-red-900'>Voltar</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

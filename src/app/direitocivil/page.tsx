import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CivilLaw() {
  return (
    <>
      <div className="text-center bg-red-800 h-20 md:h-36 mt-2">
        <h1 className="text-white text-sm md:text-xl p-7 md:p-14">Direito Civil</h1>
      </div>
      <div className='div h-2/3 container mx-auto mt-14 md:mt-14 mb-14 md:mb-20 md:max-w-6xl'>
        <Card className="w-[310px] h-[420px] md:w-[650px] md:h-[580px] lg:w-[950px] lg:h-[620px] mx-auto mb-4 md:mb-8 duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader>
          </CardHeader>
          <CardContent>
            <Image
              src="/direitocivil.jpg"
              alt="direitocivil"
              width={400}
              height={400}
              priority
              className="h-12 w-36 md:w-2/4 md:h-44 mx-auto" />
            <div className='text-center mt-4 text-sm md:text-base'>
              <h2>Nossos serviços na área Civil:</h2>
              <ul>
                <li><h3>✓ Análise de contratos e documentos;</h3></li>
                <li><h3>✓ Planejamento sucessório;</h3></li>
                <li><h3>✓ Direito de família;</h3></li>
                <li><h3>✓ Direito do consumidor;</h3></li>
                <li><h3>✓ Direito imobiliário;</h3></li>
                <li><h3>✓ Responsabilidade civil;</h3></li>
                <li><h3>✓ Representação Judicial e Extrajudicial;</h3></li>
                <li><h3>✓ Ajuizamento de ações;</h3></li>
                <li><h3>✓ Defesa em processos.</h3></li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Link href="/areasdeatuacao">
              <Button className='w-24 md:w-40 bg-red-800 hover:bg-red-900'>Voltar</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

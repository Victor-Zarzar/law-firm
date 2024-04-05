import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function LaborLaw() {
  return (
    <>
      <div className="text-center bg-red-800 h-20 md:h-36 mt-2">
        <h1 className="text-white text-sm md:text-xl p-7 md:p-14">Direito do Trabalho</h1>
      </div>
      <div className='div h-5/6 container mx-auto mt-14 md:mt-14 mb-14 md:mb-20'>
        <Card className="w-[310px] h-[620px] md:w-[650px] md:h-[650px] lg:w-[950px] lg:h-[620px] mx-auto mb-4 md:mb-8 duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader>
          </CardHeader>
          <CardContent>
            <Image
              src="/direitodotrabalho.jpg"
              alt="direitodotrabalho"
              width={400}
              height={400}
              priority
              className="h-12 w-36 md:w-2/4 md:h-44 mx-auto"
            />
            <div className='text-center mt-4 text-sm md:text-base'>
              <h2>Nossos serviços na área trabalhista:</h2>
              <ul>
                <li><h3>✓ Reclamações individuais;</h3></li>
                <li><h3>✓ Reclamações coletivas;</h3></li>
                <li><h3>✓ Reclamações de família;</h3></li>
                <li><h3>✓ Reclamações de emprego;</h3></li>
                <li><h3>✓ Ações coletivas e ações civis públicas propostas por sindicatos e pelo Ministério Público do Trabalho (MPT);</h3></li>
                <li><h3>✓ Processos administrativos decorrentes de fiscalização do Ministério Público do Trabalho e Ministério do Trabalho e Emprego;</h3></li>
                <li><h3>✓ Acompanhamento personalizado em todos os Tribunais;</h3></li>
                <li><h3>✓ Elaboração de relatórios gerenciais com dados processuais e estatísticos para acompanhamento, avaliação e gerenciamento do contencioso trabalhista;</h3></li>
                <li><h3>✓ Gestão estratégica de conflitos e negociações coletivas.</h3></li>
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

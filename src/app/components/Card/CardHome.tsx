import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import CardPopover from '../CardPopover/CardPopover'

export default function CardHome() {
    return (
        <div>
            <div className='container card mt-10'>
                <Card className="w-auto md:w-[150vh] md:h-[75vh] mx-auto mb-20 duration-300 hover:scale-105 hover:shadow-xl">
                    <CardHeader>
                        <CardDescription className='text-center text-xl md:text-2xl font-bold text-black'>Sobre nós:</CardDescription>
                    </CardHeader>
                    <CardContent className="flex">
                        <div className="flex-none w-auto h-auto">
                            <Image
                                src="/advocacy.png"
                                alt="advocacy"
                                width={400}
                                height={400}
                                priority
                                className="h-14 w-11 md:w-10 md:h-10 lg:w-[35rem] lg:h-[35rem] hidden md:flex"
                            />
                        </div>
                        <div className="flex-grow ml-0 md:ml-10">
                            <h1 className='text text-sm md:text-lg text-center md:text-justify line-clamp-6 md:line-clamp-none'>
                                O escritório de advocacia Baptista & Almeida Advogados Associados é uma instituição renomada com ampla experiência no campo jurídico, comprometida em oferecer soluções legais eficazes e personalizadas. Fundado em 2021, por um grupo de advogados especializados em diversas áreas do direito, nosso escritório tem como missão defender os interesses de nossos clientes com integridade, profissionalismo e dedicação.
                                Localizado em Porto Alegre, Rio Grande do Sul, Baptista & Almeida Advogados Associados possui uma equipe altamente qualificada de profissionais, incluindo especialistas em Direito Civil, Empresarial, Trabalhista, Ambiental, entre outros, garantindo um atendimento abrangente e especializado. Nossa prática jurídica é orientada pela ética, transparência e pelo compromisso em buscar as melhores estratégias legais para cada caso.
                                Entendemos que cada cliente é único e enfrenta desafios específicos. Por isso, nosso trabalho é pautado na construção de relacionamentos sólidos e na comunicação eficaz, visando entender profundamente as necessidades e objetivos de quem nos procura. Estamos sempre atualizados com as mudanças legislativas e as tendências jurídicas, o que nos permite oferecer conselhos precisos e inovadores.
                                No escritório Baptista & Almeida Advogados Associados, você encontrará um parceiro confiável e dedicado, pronto para lhe assessorar em questões legais complexas, sempre buscando os melhores resultados. Seja para consultoria, litígios ou negociações, estamos à disposição para garantir a excelência e a segurança jurídica que você precisa.
                            </h1>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className='flex justify-center items-center mx-auto md:hidden'>
                            <CardPopover />
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

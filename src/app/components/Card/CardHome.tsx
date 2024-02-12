import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

export default function CardHome() {
    return (
        <div>
            <div className='container card mt-10'>
                <Card className="w-[150vh] h-[75vh] mx-auto mb-20">
                    <CardHeader>
                        <CardDescription className='text-center text-2xl'>Sobre nós:</CardDescription>
                    </CardHeader>
                    <CardContent className="flex">
                        <div className="flex-none w-auto h-auto">
                            <Image
                                src="/advocacy.png"
                                alt="advocacy"
                                width={400}
                                height={400}
                                priority
                                className="h-8 w-8 md:w-10 md:h-10 lg:w-[35rem] lg:h-[35rem]"
                            />
                        </div>
                        <div className="flex-grow ml-10">
                            <h1 className='text text-xs md:text-lg text-justify'>
                                O escritório de advocacia Baptista & Almeida Advogados Associados é uma instituição renomada com ampla experiência no campo jurídico, comprometida em oferecer soluções legais eficazes e personalizadas. Fundado em 2021, por um grupo de advogados especializados em diversas áreas do direito, nosso escritório tem como missão defender os interesses de nossos clientes com integridade, profissionalismo e dedicação.
                                Localizado em Porto Alegre, Rio Grande do Sul, Baptista & Almeida Advogados Associados possui uma equipe altamente qualificada de profissionais, incluindo especialistas em Direito Civil, Empresarial, Trabalhista, Ambiental, entre outros, garantindo um atendimento abrangente e especializado. Nossa prática jurídica é orientada pela ética, transparência e pelo compromisso em buscar as melhores estratégias legais para cada caso.
                                Entendemos que cada cliente é único e enfrenta desafios específicos. Por isso, nosso trabalho é pautado na construção de relacionamentos sólidos e na comunicação eficaz, visando entender profundamente as necessidades e objetivos de quem nos procura. Estamos sempre atualizados com as mudanças legislativas e as tendências jurídicas, o que nos permite oferecer conselhos precisos e inovadores.
                                No escritório Baptista & Almeida Advogados Associados, você encontrará um parceiro confiável e dedicado, pronto para lhe assessorar em questões legais complexas, sempre buscando os melhores resultados. Seja para consultoria, litígios ou negociações, estamos à disposição para garantir a excelência e a segurança jurídica que você precisa.
                            </h1>
                        </div>
                    </CardContent>
                    <CardFooter className="flex space-x-2 float-right mr-20">
                        <Button variant="outline">Content...</Button>
                        <Button>Content...</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

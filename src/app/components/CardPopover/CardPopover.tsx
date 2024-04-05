import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function CardPopover() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className='w-20 md:w-28 bg-red-800 hover:bg-red-900 text-xs'>Ler Mais...</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[23rem] translate-y-56">
                <h1 className='text text-sm text-center'>
                    O escritório de advocacia Baptista & Almeida Advogados Associados é uma instituição renomada com ampla experiência no campo jurídico, comprometida em oferecer soluções legais eficazes e personalizadas. Fundado em 2021, por um grupo de advogados especializados em diversas áreas do direito, nosso escritório tem como missão defender os interesses de nossos clientes com integridade, profissionalismo e dedicação.
                    Localizado em Porto Alegre, Rio Grande do Sul, Baptista & Almeida Advogados Associados possui uma equipe altamente qualificada de profissionais, incluindo especialistas em Direito Civil, Empresarial, Trabalhista, Ambiental, entre outros, garantindo um atendimento abrangente e especializado. Nossa prática jurídica é orientada pela ética, transparência e pelo compromisso em buscar as melhores estratégias legais para cada caso.
                    Entendemos que cada cliente é único e enfrenta desafios específicos. Por isso, nosso trabalho é pautado na construção de relacionamentos sólidos e na comunicação eficaz, visando entender profundamente as necessidades e objetivos de quem nos procura. Estamos sempre atualizados com as mudanças legislativas e as tendências jurídicas, o que nos permite oferecer conselhos precisos e inovadores.
                    No escritório Baptista & Almeida Advogados Associados, você encontrará um parceiro confiável e dedicado, pronto para lhe assessorar em questões legais complexas, sempre buscando os melhores resultados. Seja para consultoria, litígios ou negociações, estamos à disposição para garantir a excelência e a segurança jurídica que você precisa.
                </h1>
            </PopoverContent>
        </Popover>
    )
}

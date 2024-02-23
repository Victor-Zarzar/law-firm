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
import Link from 'next/link'

export default function Expertise() {
    return (
        <div className="md:container mx-auto mt-10">
            <h1 className="text-center text-sm md:text-2xl mb-16">Nossas áreas de atuação:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-wrap justify-content-space-between">
                <div className="md:col-span-1">
                    <Card className="mx-auto w-5/6 md:w-full md:h-[26vh] mb-10 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardDescription className="text-center text-sm md:text-lg text-black">Direito do Trabalho</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/direitodotrabalho.jpg"
                                alt="direitodotrabalho"
                                width={400}
                                height={400}
                                priority
                                className="h-16 w-48 md:w-72 md:h-20 mx-auto"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Link href="/direitodotrabalho">
                                <Button className='w-20 md:w-28 bg-red-800 hover:bg-red-900'>Mais info</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="mx-auto w-5/6 md:w-full md:h-[26vh] mb-10 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardDescription className="text-center text-sm md:text-lg text-black">Direito Civil</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/direitocivil.jpg"
                                alt="direitocivil"
                                width={400}
                                height={400}
                                priority
                                className="h-16 w-48 md:w-72 md:h-20 mx-auto"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Link href="/direitocivil">
                                <Button className='w-20 md:w-28 bg-red-800 hover:bg-red-900'>Mais info</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="mx-auto w-5/6 md:w-full md:h-[26vh] mb-10 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardDescription className="text-center text-sm md:text-lg text-black">Direito Tributário</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/direitotributario.jpg"
                                alt="direitotributario"
                                width={400}
                                height={400}
                                priority
                                className="h-16 w-48 md:w-72 md:h-20 mx-auto"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Link href="/direitotributario">
                                <Button className='w-20 md:w-28 bg-red-800 hover:bg-red-900'>Mais info</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="mx-auto w-5/6 md:w-full md:h-[26vh] mb-10 md:mb-16 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardDescription className="text-center text-sm md:text-lg text-black">Direito Previdenciário</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/direitoprevidenciario.jpg"
                                alt="direitoprevidenciario"
                                width={400}
                                height={400}
                                priority
                                className="h-16 w-48 md:w-72 md:h-20 mx-auto"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Link href="/direitoprevidenciario">
                                <Button className='w-20 md:w-28 bg-red-800 hover:bg-red-900'>Mais info</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="md:col-span-1 text-center md:text-justify flex text-sm md:text-lg items-center ml-0 md:ml-20 mb-10">
                    <h1>
                        Priorizamos o atendimento humanizado e personalizado, esse é o nosso diferencial, que apesar do Escritório ser Digital, optamos sempre que possível, dentro das possibilidades dos nossos clientes, pelo atendimento presencial ou por videoconferência.
                        Oferecemos suporte via WhatsApp todos os dias da semana para sanar eventuais dúvidas e esclarecer andamentos processuais relevantes.
                    </h1>
                </div>
            </div>
        </div>
    )
}
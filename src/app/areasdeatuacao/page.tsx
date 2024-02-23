import React from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';

export default function Areasofexpertise() {
    return (
        <div className='div mt-2'>
            <div className="text-center bg-red-800 h-36">
                <h1 className="p-6 text-white text-sm md:text-lg">Áreas de Atuação
                </h1>
                <p className="text-white text-sm md:text-lg">Dentre os serviços prestados pelo Escritório Baptista & Associados destacamos:</p>
            </div>
            <div className='grid-cols-1 sm:grid md:grid-cols-2 md:container justify-center mt-8 md:mt-16'>
                <div>
                    <Card className="w-[350px] h-[200px] md:w-[600px] md:h-[320px] mx-auto mb-4 md:mb-8 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle className='text-center text-sm md:text-xl'>Direito do Trabalho</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/direitodotrabalho.jpg"
                                alt="direitodotrabalho"
                                width={400}
                                height={400}
                                priority
                                className="h-12 w-28 md:w-96 md:h-36 mx-auto"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Link href="/direitodotrabalho">
                                <Button className='w-20 md:w-28 bg-red-800 hover:bg-red-900'>Mais info</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px] h-[200px] md:w-[600px] md:h-[320px] mx-auto mb-4 md:mb-8 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle className='text-center text-sm md:text-xl'>Direito Cível</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/direitocivil.jpg"
                                alt="direitocivil"
                                width={400}
                                height={400}
                                priority
                                className="h-12 w-28 md:w-96 md:h-36 mx-auto"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Link href="/direitocivil">
                                <Button className='w-20 md:w-28 bg-red-800 hover:bg-red-900'>Mais info</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px] h-[200px] md:w-[600px] md:h-[320px] mx-auto mb-4 md:mb-16 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle className='text-center text-sm md:text-xl'>Direito Tributário</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/direitotributario.jpg"
                                alt="direitotributario"
                                width={400}
                                height={400}
                                priority
                                className="h-12 w-28 md:w-96 md:h-36 mx-auto"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Link href="/direitotributario">
                                <Button className='w-20 md:w-28 bg-red-800 hover:bg-red-900'>Mais info</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px] h-[200px] md:w-[600px] md:h-[320px] mx-auto mb-4 md:mb-16 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle className='text-center text-sm md:text-xl'>Direito Previdenciário</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/direitoprevidenciario.jpg"
                                alt="direitoprevidenciario"
                                width={400}
                                height={400}
                                priority
                                className="h-12 w-28 md:w-96 md:h-36 mx-auto"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Link href="/direitoprevidenciario">
                                <Button className='w-20 md:w-28 bg-red-800 hover:bg-red-900'>Mais info</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

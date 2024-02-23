import React from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
                    <Card className="w-[350px] h-[200px] md:w-[600px] md:h-[300px] mx-auto mb-4 md:mb-8 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle>Direito do Trabalho</CardTitle>
                            <CardDescription>Deploy your new project in one-click.</CardDescription>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Button>Mais info</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px] h-[200px] md:w-[600px] md:h-[300px] mx-auto mb-4 md:mb-8 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle>Direito do Trabalho</CardTitle>
                            <CardDescription>Deploy your new project in one-click.</CardDescription>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Button>Mais info</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px] h-[200px] md:w-[600px] md:h-[300px] mx-auto mb-4 md:mb-8 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle>Direito do Trabalho</CardTitle>
                            <CardDescription>Deploy your new project in one-click.</CardDescription>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Button>Mais info</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px] h-[200px] md:w-[600px] md:h-[300px] mx-auto mb-4 md:mb-8 duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle>Direito do Trabalho</CardTitle>
                            <CardDescription>Deploy your new project in one-click.</CardDescription>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Button>Mais info</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

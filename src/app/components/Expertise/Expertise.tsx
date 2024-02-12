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

export default function Expertise() {
    return (
        <div className='container card mt-10 mx-auto md:float-left'>
            <h1 className='mt-10 text-center text-lg md:text-2xl mb-6'>Nossas áreas de atuação:</h1>
            <Card className="w-[30vh] md:w-[60vh] h-[20vh] md:h-[20vh] mx-auto mb-10">
                <CardHeader>
                    <CardDescription className='text-center text-xl'>Direito Trabalhista</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image
                        src="/direitodotrabalho.jpg"
                        alt="direitodotrabalho"
                        width={400}
                        height={400}
                        priority
                        className="h-8 w-8 md:w-28 md:h-28"
                    />
                </CardContent>
                <CardFooter className="flex float-right">
                    <Button variant="outline">Content...</Button>
                </CardFooter>
            </Card>
            <div>
                <Card className="w-[30vh] md:w-[60vh] h-[20vh] md:h-[20h] mx-auto mb-10">
                    <CardHeader>
                        <CardDescription className='text-center text-xl'>Direito Cível</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src="/direitocivil.jpg"
                            alt="direitocivil"
                            width={400}
                            height={400}
                            priority
                            className="h-8 w-8 md:w-28 md:h-28"
                        />
                    </CardContent>
                    <CardFooter className="flex float-right">
                        <Button variant="outline">Content...</Button>
                    </CardFooter>
                </Card>
            </div>
            <div>
                <Card className="w-[30vh] md:w-[60vh] h-[20vh] md:h-[20vh] mx-auto mb-10">
                    <CardHeader>
                        <CardDescription className='text-center text-xl'>Direito Tributário</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src="/direitotributario.jpg"
                            alt="direitotributario"
                            width={400}
                            height={400}
                            priority
                            className="h-8 w-8 md:w-28 md:h-28"
                        />
                    </CardContent>
                    <CardFooter className="flex float-right">
                        <Button variant="outline">Content...</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

import Image from 'next/image';
import React from 'react';

export default function ButtonWhatsapp() {
    return (
        <button
            aria-label="Botão para chamada no whatsapp"
            className="flex px-6 py-3 gap-3
 items-center mx-auto justify-center text-[10px] md:text-sm lg:text-base w-60 md:w-1/3 bg-green-600 hover:bg-green-700 text-slate-50 rounded-md">
            <a
                href="https://api.whatsapp.com/send?phone=5551996180483"
                target="_blank"
                rel="noreferrer">
                Quero ajuda especializada
            </a>
            <Image
                 src="/iconWhatsapp.svg"
                alt="icone whatsapp"
                width={20}
                height={20}
                className="text-white "
            />
        </button>
    )
}

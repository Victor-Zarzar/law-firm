import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Início", link: "/" },
    { name: "Sobre", link: "sobre" },
    { name: "Contato", link: "contato" },
  ];

  return (
    <div className="w-full max-w-[95rem] h-16 md:h-20">
      <div className="md:flex items-center justify-between py-4 md:py-0 md:px-10 px-6">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 ml-10 md:ml-40">
          <Image
            src="/law.png"
            alt="law"
            width={300}
            height={300}
            priority
            className="h-8 w-8 md:w-10 md:h-10 lg:w-20 lg:h-20"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-5 cursor-pointer md:hidden w-7 h-7 text-gray-400">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-0 transition-all duration-500 ease-in text-center ${open ? "top-10" : "top-[-490px]"} ${open ? "h-screen flex flex-col justify-center items-center bg-red-800" : ""} $"bg-black"`}>
          {Links.map((link) => (
            <li className="md:ml-8 text-center md:my-0 my-5 font-semibold" key={link.name}>
              <Link href={`/${link.link}`} passHref>
                <div className="text-lg md:text-lg lg:text-xl hover:text-gray-600 focus:outline-none duration-500">{link.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


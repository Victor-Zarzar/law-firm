'use client'
import React, { useRef } from "react";
import MapsInfo from '../components/Maps/Maps';
import emailjs from '@emailjs/browser';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface IProps {
  form: React.MutableRefObject<HTMLInputElement | null>
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs.sendForm('service_c6sj2kt', 'template_og52wc6', form.current, 'yeusvRmqeLwWt2Z2T')
      .then((result) => {
        console.log(result.text);
        alert("Mensagem enviada com sucesso!");
        window.location.reload();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='div mt-2'>
      <div className="text-center bg-red-800 h-36">
        <h1 className="p-6 text-white text-sm md:text-lg">Vamos conversar?
        </h1>
        <p className="text-white text-sm md:text-lg">Entre em contato com nosso escritório de advocacia e descubra como nossos advogados podem te ajudar!</p>
      </div>
      <div className="form container text-center mt-20">
        <h1 className="h1-form text-black font-bold text-xl md:text-2xl">Preencha o Formulário</h1>
        <form ref={form} onSubmit={sendEmail} className="w-80 md:w-7/12 mx-auto mt-10">
          <Input type="email" placeholder="Email" id="email" autoComplete="on" name="email" className="mt-2 border-2 border-black" />
          <Input type="telephone" placeholder="Celular" autoComplete="on" id="telephone" name="telephone" className="mt-2 border-2 border-black" />
          <Input type="message" placeholder="Mensagem" autoComplete="on" id="message" name="message" className="mt-2 border-2 border-black h-20 md:h-40" />
          <Button type="submit" className="mt-3 w-80 md:w-full bg-red-800 hover:bg-red-900">Enviar</Button>
        </form>
      </div>
      <h2 className="font-bold text-xl md:text-2xl leading-10 mb-10 tracking-tight text-black text-center cursor-default mt-20 md:mt-36">Nossa Localização</h2>
      <div className="flex justify-center items-center mt-0 mb-20">
        <MapsInfo />
      </div>
    </div>
  )
}

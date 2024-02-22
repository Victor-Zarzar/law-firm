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
    <div className='h-screen'>
      <div className="text-center mt-2 bg-red-800 h-36">
        <h1 className="p-6 text-white text-lg">Vamos conversar?
        </h1>
        <p className="text-white text-lg">Entre em contato com nosso escritório de advocacia e descubra como nossos advogados podem te ajudar!</p>
      </div>
      <div className="form text-center mt-20">
        <h1 className="h1-form text-black font-bold text-2xl md:text-3xl">Preencha o Formulário</h1>
        <form ref={form} onSubmit={sendEmail}>
          <Input type="email" placeholder="Email" />
          <Input type="telephone" placeholder="Celular" />
          <Input type="message" placeholder="Mensagem" />
          <Button type="submit">Enviar</Button>
        </form>
      </div>
      <h2 className="font-bold text-2xl md:text-3xl leading-10 mb-10 tracking-tight text-black text-center cursor-default mt-20">Nossa Localização:</h2>
      <div className="flex justify-center items-center mt-0 mb-20">
        <MapsInfo />
      </div>
    </div>
  )
}

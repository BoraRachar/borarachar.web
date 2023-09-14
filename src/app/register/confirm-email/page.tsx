"use client";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { AxiosError } from "axios";
import Image from "next/image";

export const metadata = {
  title: "Bora Rachar | Confirme seu e-mail",
  description: "...",
};

export default function Register() {
  const email = localStorage.getItem("userEmail");
  const url = localStorage.getItem("url");

  const resendEmail = async () => {
    try {
      const response = await fetch(`/api/auth/register/confirmEmail/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 202) {
        window.alert("Email enviado");
      }
    } catch (err) {
      const error = err as AxiosError;
      // @ts-ignore
      setHasErrorMessage(error.response?.data!.message);
    }
  };
  return (
    <section className="flex flex-col lg:flex-row-reverse lg:items-center lg:max-h-screen lg:overflow-y-hidden">
      <figure className="w-full h-[475px] bg-[#FFFFFF] hidden overflow-hidden lg:overflow-visible md:flex md:items-center md:justify-center relative lg:h-[100vh] lg:flex-1">
        <Image
          src="/assets/register-image.png"
          alt="Uma mulher sorrindo, com óculos e um fone de ouvido laranja, mexendo no computador."
          width={3000}
          height={3000}
          className="object-cover"
        />
        <div className="absolute bottom-0 w-full h-1 bg-secondary lg:top-0 lg:left-0 lg:h-full lg:w-1"></div>
      </figure>
      <section className="mx-4 sm:w-[80%] sm:mx-auto sm:pb-10 md:flex md:items-center md:justify-center md:min-w-[full] md:pb-0 md:flex-1 lg:items-start lg:min-h-[90vh]">
        <div className="md:flex md:flex-col md:items-start lg:items-start">
          <figure className="flex items-center justify-center w-full mt-8 lg:mt-0 lg:justify-start md:items-start md:justify-start">
            <Image
              src="/assets/bora-rachar-logo.svg"
              alt="Imagem da logomarca do Bora Rachar"
              width={280}
              height={100}
              className="mx-auto md:mx-0 md:w-[100px] md:h-[40px]"
            />
          </figure>
          <SectionTitle
            title="Complete seu cadastro!"
            customClassesNames={{
              title: "text-[32px] font-black sm:text-[32px] ",
              header: "mt-8 sm:mt-4",
            }}
          />
          <p className="text-md text-[#637381] lg:max-w-[50ch]">
            Por favor, confirme seu cadastro através do link enviado para o seu
            e-mail.
          </p>
          <button
            onClick={resendEmail}
            className="text-lg font-medium w-full text-white bg-[#724FD8] py-[10px] rounded-md cursor-pointer mt-6"
          >
            Enviar novo e-mail
          </button>

          <p className="text-md text-[#2349f7] mt-4"> {url}</p>
        </div>
      </section>
    </section>
  );
}

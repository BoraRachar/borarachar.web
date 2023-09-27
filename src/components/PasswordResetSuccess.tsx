"use client";
import Image from "next/image";
import Link from "next/link";

import { useRouter, redirect } from "next/navigation";

import { useEffect } from "react";
const PasswordResetSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("/login");
    }, 5000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [router]);
  return (
    <section className="flex  min-h-screen  items-center  flex-col">
      <figure className="pt-12">
        <Image
          src="/assets/bora-rachar-logo.svg"
          alt="Imagem da logomarca do Bora Rachar"
          width={180}
          height={71}
        />
      </figure>

      <div className="flex  px-12  items-center  flex-col">
        <h1
          className="text-center pt-7 md:text-3xl text-[24px]  font-bold 
       text-[#4D4A4F] "
        >
          Senha redefinida com sucesso!
        </h1>
        <figure className="py-16">
          <Image
            src="/assets/check.svg"
            alt="Uma mulher pensando na sua nova senha."
            width={155}
            height={155}
          />
        </figure>
        <p className="text-center md:text-xl  text-[#563BA2]  md:font-bold pb-16 sm:font-normal ">
          Sua senha foi redefinida com sucesso! Em instantes,
          <br /> você será redirecionado a página para efetuar o login.
        </p>
        {redirect.name === "login" && (
          <p className=" md:text-base text-[14px] text-center text-[#4D4A4F]">
            Ainda está aqui?
            <Link
              className="text-[#F27405] md:text-base text-[14px] font-normal cursor-pointer text-center px-1"
              href={"/login"}
            >
              Voltar
            </Link>
            a página inicial
          </p>
        )}
      </div>
    </section>
  );
};

export default PasswordResetSuccess;

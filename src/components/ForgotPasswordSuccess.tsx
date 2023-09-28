"use client";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

const ForgotPasswordSuccess = () => {
  const router = useRouter();

  const handleBackToHomePage = () => {
    router.push("/");
  }

  return (
    <section className="flex  min-h-screen  items-center  flex-col">
      <figure className="pt-12">
        <Image
          src="/assets/bora-rachar-logo.svg"
          alt="Bora rachar"
          width={180}
          height={71}
        />
      </figure>

      <div className="flex  px-12  items-center  flex-col">
        <h1
          className="text-center pt-7 md:text-3xl text-[24px]  font-bold 
       text-[#4D4A4F] "
        >
          Email de recuperação enviado!
        </h1>
        <figure className="py-16">
          <Image
            src="/assets/mail-set.svg"
            alt="Uma mulher pensando na sua nova senha."
            width={155}
            height={155}
          />
        </figure>
        <p className="text-center md:text-xl  text-[#563BA2]  md:font-bold pb-16 sm:font-normal ">
          Enviamos uma mensagem para o seu email cadastrado 
          <br />com o link para redefinição de senha!
        </p>
        <input
          type="submit"
          value="Fechar Janela"
          className="text-lg font-medium w-full text-white bg-[#724FD8] py-[10px] rounded-md cursor-pointer mt-6"
          onClick={handleBackToHomePage}
        />
        <p className="font-normal mt-[24px] text-[#4D4A4F] text-center">
          Não recebeu o email?{" "}
          <Link href={"/forgot-password"} className="font-medium text-[#F27405]">
            Reenviar
          </Link>
          {" "}
          email.  
        </p>
      </div>
    </section>
  );
};

export default ForgotPasswordSuccess;
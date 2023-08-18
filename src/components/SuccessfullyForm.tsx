"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle/SectionTitle";
import { useRouter } from "next/navigation";

const SuccessfullyForm = () => {
   const router = useRouter();
   return (
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
               title="Cadastro realizado com sucesso!"
               customClassesNames={{
                  title: "text-[32px] font-black sm:text-[32px] ",
                  header: "mt-8 sm:mt-4",
               }}
            />
            <p className="text-md text-[#637381] lg:max-w-[50ch]">
               Seu email foi verificado e está tudo certo com a sua conta!
            </p>
            <button
               onClick={() => router.push("/login")}
               className="text-lg font-medium w-full text-white bg-[#724FD8] py-[10px] rounded-md cursor-pointer mt-6"
            >
               Entrar na minha conta
            </button>
         </div>
      </section>
   );
};

export default SuccessfullyForm;

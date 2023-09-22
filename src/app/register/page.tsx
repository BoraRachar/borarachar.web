import BasicRegisterForm from "@/components/BasicRegisterForm";
import MessageSlider from "@/components/MessageSlider";
import Image from "next/image";

export const metadata = {
  title: "Bora Rachar | Página de Cadastro",
  description: "...",
};

export default function Register() {
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
        <div className="absolute z-50 -left-8 bottom-8 min-w-[736px] hidden lg:block">
          <MessageSlider
            messages={[
              {
                title: "Uma nova forma de rachar as contas",
                description:
                  "Com o Bora Rachar, você poderá gastar menos e disfrutar mais dos diversos serviços de assinatura presentes em nossa plataforma.",
              },
              {
                title: "Uma nova forma de rachar as contas",
                description:
                  "Com o Bora Rachar, você poderá gastar menos e disfrutar mais dos diversos serviços de assinatura presentes em nossa plataforma.",
              },
              {
                title: "Uma nova forma de rachar as contas 03",
                description:
                  "Com o Bora Rachar, você poderá gastar menos e disfrutar mais dos diversos serviços de assinatura presentes em nossa plataforma.",
              },
            ]}
          />
        </div>
        <div className="absolute bottom-0 w-full h-1 bg-secondary lg:top-0 lg:left-0 lg:h-full lg:w-1"></div>
      </figure>
      <section className="mx-4 sm:w-[80%] sm:mx-auto sm:pb-10 md:flex md:items-center md:justify-center md:min-w-[full] md:pb-0 md:flex-1">
        <BasicRegisterForm />
      </section>
    </section>
  );
}

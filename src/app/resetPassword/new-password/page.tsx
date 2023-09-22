import NewPasswordForm from "@/components/NewPassword";
import Image from "next/image";

export const metadata = {
  title: "Bora Rachar | Página de Recuperação de Senha",
  description: "...",
};

export default function ResetPassword() {
  return (
    <section className=" flex lg:flex-row lg:flex-row-reverse justify-center items-center lg:overflow-y-hidden min-h-screen md:flex-col ">
      <figure className=" hidden overflow-hidden lg:overflow-visible md:flex md:items-center md:justify-center  lg:flex-1 ">
        <div className="md:h-[575px] lg:min-h-screen  ">
          <Image
            src="/assets/reset-password.svg"
            alt="Uma mulher pensando na sua nova senha."
            width={3000}
            height={1000}
            className=" h-full object-cover  "
          />
        </div>
      </figure>
      <section className="mx-4 sm:w-[80%] sm:mx-auto sm:pb-10 md:flex md:items-center md:justify-center md:min-w-[full] md:pb-0 md:flex-1">
        <NewPasswordForm />
      </section>
    </section>
  );
}

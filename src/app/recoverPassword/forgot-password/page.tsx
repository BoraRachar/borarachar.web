import LoginForm from "@/components/LoginForm";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import Image from "next/image";

export const metadata = {
  title: "Bora Rachar | Esqueceu a Senha",
  description: "...",
};

export default function ForgotPassword() {
  return (
    <section className="flex flex-col lg:flex-row-reverse lg:items-center lg:max-h-screen lg:overflow-y-hidden">
    <figure className="w-full h-[475px] bg-[#FFFFFF] hidden overflow-hidden lg:overflow-visible md:flex md:items-center md:justify-center relative lg:h-[100vh] lg:flex-1">
       <Image
          src="/assets/reset-password.svg"
          alt="Uma mulher pensando."
          width={3000}
          height={3000}
          className="object-cover"
       />
    </figure>
    <section className="mx-4 sm:w-[80%] sm:mx-auto sm:pb-10 md:flex md:items-center md:justify-center md:min-w-[full] md:pb-0 md:flex-1">
      <ForgotPasswordForm />
    </section>
 </section>
  );
}
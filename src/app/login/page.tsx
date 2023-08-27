import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export const metadata = {
  title: "Bora Rachar | Página de Login",
  description: "...",
};

export default function Login() {
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
         <section className="mx-4 sm:w-[80%] sm:mx-auto sm:pb-10 md:flex md:items-center md:justify-center md:min-w-[full] md:pb-0 md:flex-1">
            <LoginForm />
         </section>
      </section>
  );
}
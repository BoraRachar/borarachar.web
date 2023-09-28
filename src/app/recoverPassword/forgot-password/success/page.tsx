import ForgotPasswordSuccess from "@/components/ForgotPasswordSuccess";

export const metadata = {
  title: "Bora Rachar | Emai Enviado",
  description: "...",
};

export default function ForgotPasswordSucess() {
  return (
    <section className="flex min-h-screen items-center flex-col">
      <div className="mx-4 sm:w-[80%] sm:mx-auto sm:pb-10 md:flex md:items-center md:justify-center md:min-w-[full] md:pb-0 md:flex-1">
        <ForgotPasswordSuccess />
      </div>
    </section>
  );
}
import PasswordResetSuccess from "@/components/PasswordResetSuccess";

export const metadata = {
  title: "Bora Rachar | Página de Recuperação de Senha",
  description: "...",
};

export default function RecoverPassword() {
  return (
    <section className="flex  min-h-screen  items-center  flex-col">
      <PasswordResetSuccess />
    </section>
  );
}

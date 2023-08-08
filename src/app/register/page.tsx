import MessageSlider from "@/components/MessageSlider";

export const metadata = {
   title: "Bora Rachar | Página de Cadastro",
   description: "...",
};

export default function Register() {
   return (
      <MessageSlider
         messages={[
            { description: "teste" },
            { description: "teste2" },
            { description: "teste3" },
         ]}
      />
   );
}

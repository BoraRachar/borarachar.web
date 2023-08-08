"use client";
import { useEffect, useRef, useState } from "react";

type MessageSliderType = {
   title?: string;
   description: string;
};

interface MessageSliderProps {
   messages: MessageSliderType[];
}

// Componente MessageSlider - Slider de mensagens com navegação automática e manual
const MessageSlider: React.FC<MessageSliderProps> = ({ messages }) => {
   const [activeMessage, setActiveMessage] = useState<number>(0);
   const sliderTitle = useRef<HTMLHeadingElement>(null);
   const sliderDescription = useRef<HTMLParagraphElement>(null);
   const intervalRef = useRef<any | null>(null);

   // Função para tratar a navegação manual do slider
   const handleSlider = (index: number) => {
      // Remove as classes de animação para a mensagem atual
      if (messages[index].title) {
         sliderTitle.current?.classList.remove("animate-fade-in-ltr");
         sliderTitle.current?.classList.remove("animate-fade-in-rtl");
      }
      sliderDescription.current?.classList.remove("animate-fade-in-ltr");
      sliderDescription.current?.classList.remove("animate-fade-in-rtl");

      // Aguarda um pequeno intervalo para que as classes de animação sejam removidas
      // e adiciona novamente as classes para a próxima mensagem
      setTimeout(() => {
         if (index < activeMessage) {
            sliderTitle.current?.classList.add("animate-fade-in-ltr");
            sliderDescription.current?.classList.add("animate-fade-in-ltr");
         } else {
            sliderTitle.current?.classList.add("animate-fade-in-rtl");
            sliderDescription.current?.classList.add("animate-fade-in-rtl");
         }
         // Atualiza o índice da mensagem ativa
         setActiveMessage(index);
      }, 50);
   };

   // Efeito para alternar automaticamente as mensagens a cada 5 segundos
   useEffect(() => {
      // Função para tratar a navegação automática do slider
      const handleSliderInterval = () => {
         const nextMessageIndex =
            activeMessage === messages.length - 1 ? 0 : activeMessage + 1;
         handleSlider(nextMessageIndex);
      };

      // Inicia o intervalo para navegação automática
      intervalRef.current = setInterval(handleSliderInterval, 5000);

      // Retorna uma função de limpeza para desmontar o intervalo quando o componente for desmontado
      return () => {
         if (intervalRef.current) {
            clearInterval(intervalRef.current);
         }
      };
   }, [activeMessage, messages.length]);

   // Renderização do componente
   return (
      <section className="p-10 rounded-lg bg-[#563BA2] shadow-card-custom-sm flex flex-col items-center">
         {/* Título da mensagem */}
         <h2
            ref={sliderTitle}
            className="text-2xl font-medium text-center text-neutral-white animate-fade-in-ltr"
            id={`message-slider-title`}
            data-testid={`message-slider-title`}
         >
            {`${
               messages[activeMessage].title ??
               "Um novo jeito de rachar as contas"
            }`}
         </h2>
         {/* Descrição da mensagem */}
         <p
            ref={sliderDescription}
            id={`message-slider-description`}
            data-testid={`message-slider-description`}
            className="text-sm font-light text-neutral-white max-w-[45ch] text-center mt-2 mx-auto animate-fade-in-ltr"
         >
            {messages[activeMessage].description}
         </p>
         {/* Navegação manual - botões */}
         <nav className="flex flex-row gap-1 mt-8">
            {messages.map((message, index) => (
               <button
                  onClick={() => handleSlider(index)}
                  key={`${message.description}-${index}`}
                  aria-label={`Botão de mensagem número: ${index + 1}`}
                  id={`message-slider-button-${index}`}
                  data-testid={`message-slider-button-${index}`}
                  className={`block h-2 transition ease-in-out rounded-full cursor-pointer ${
                     activeMessage === index
                        ? "bg-secondary w-5"
                        : "bg-secondary/50 w-2 hover:bg-secondary"
                  }`}
               ></button>
            ))}
         </nav>
      </section>
   );
};

export default MessageSlider;

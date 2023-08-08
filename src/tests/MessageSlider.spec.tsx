import MessageSlider from "@/components/MessageSlider";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";

describe("MessageSlider component", () => {
   jest.setTimeout(10000);
   it("Should be render correctly the component", () => {
      render(
         <MessageSlider
            messages={[
               { description: "teste" },
               { description: "teste2" },
               { description: "teste3" },
            ]}
         />
      );
      expect(screen.getByText("teste")).toBeInTheDocument();
   });

   it("Should be render a three buttons to navigate", () => {
      render(
         <MessageSlider
            messages={[
               { description: "teste" },
               { description: "teste2" },
               { description: "teste3" },
            ]}
         />
      );
      expect(screen.getByTestId("message-slider-button-0")).toBeInTheDocument();
      expect(screen.getByTestId("message-slider-button-1")).toBeInTheDocument();
      expect(screen.getByTestId("message-slider-button-2")).toBeInTheDocument();
   });
   it("Should be can navigate in messages manually", async () => {
      render(
         <MessageSlider
            messages={[
               {
                  description: "teste",
               },
               {
                  description: "teste2",
               },
               {
                  description: "teste3",
               },
            ]}
         />
      );

      // Verifica se a primeira mensagem é exibida corretamente
      expect(screen.getByText("teste")).toBeInTheDocument();

      // Clica no botão para navegar para a segunda mensagem
      const botaoMensagem2 = screen.getByTestId(`message-slider-button-1`);
      botaoMensagem2.click();

      // Espera por um pequeno intervalo para a renderização da próxima mensagem
      await act(async () => {
         await new Promise((resolve) => setTimeout(resolve, 100));
      });

      // Verifica se a segunda mensagem é exibida corretamente após a navegação manual
      expect(screen.getByText("teste2")).toBeInTheDocument();

      // Clica no botão para voltar para a primeira mensagem
      const botaoMensagem1 = screen.getByTestId(`message-slider-button-0`);
      botaoMensagem1.click();

      // Espera por um pequeno intervalo para a renderização da primeira mensagem novamente
      await act(async () => {
         await new Promise((resolve) => setTimeout(resolve, 100));
      });

      // Verifica se a primeira mensagem é exibida corretamente novamente após a navegação manual
      expect(screen.getByText("teste")).toBeInTheDocument();
   });
   it("Should be can navigate to next message automatically", async () => {
      render(
         <MessageSlider
            messages={[
               { description: "teste" },
               { description: "teste2" },
               { description: "teste3" },
            ]}
         />
      );
      // Verifica se a primeira mensagem é exibida corretamente
      expect(screen.getByText("teste")).toBeInTheDocument();

      // Espera por 5 segundos (5000ms) para que a navegação automática altere as mensagens
      await act(async () => {
         await new Promise((resolve) => setTimeout(resolve, 5100));
      });

      // Verifica se a segunda mensagem é exibida corretamente após a navegação automática
      expect(screen.getByText("teste2")).toBeInTheDocument();
   });
});

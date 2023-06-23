"use client";

import { useEffect, useRef, useState } from "react";
// import ArrowLeftEnabled from "@/assets/carousel-arrow-left-enabled.svg";
// import ArrowLeftDisabled from "@/assets/carousel-arrow-left-disabled.svg";
// import ArrowRightEnabled from "@/assets/carousel-arrow-right-enabled.svg";
// import ArrowRightDisabled from "@/assets/carousel-arrow-right-disabled.svg";
import Image from "next/image";

/**
 * Props do Carousel.
 */
interface CarouselProps {
   children: React.ReactNode;
}

/**
 * Componente Carousel.
 * @param {CarouselProps} props - Props do Carousel.
 * @returns {JSX.Element} Componente Carousel.
 */
export default function Carousel({ children }: CarouselProps): JSX.Element {
   // Estado do índice do item do meio atual.
   const [currentMiddleItemIndex, setCurrentMiddleItemIndex] =
      useState<number>(1);
   // Estado que indica se o carousel está em movimento.
   const [isMoving, setIsMoving] = useState<boolean>(false);
   // Referência para o elemento do carousel.
   const carouselItemsRef = useRef<HTMLDivElement>(null);
   // Número de filhos do carousel.
   const numberOfChildrens = carouselItemsRef.current?.children.length ?? 0;

   /**
    * Obtém a posição X do slide atual.
    * @returns {number} Posição X do slide atual.
    */
   const getCurrentSlidePosX = (): number => {
      return carouselItemsRef.current?.scrollLeft ?? 0;
   };

   /**
    * Controla as classes CSS dos itens do carousel.
    * @param {string} action - Ação a ser executada: "decrease" (diminuir) ou "increase" (aumentar).
    */
   const classNamesController = (action: "decrease" | "increase"): void => {
      const currentIndex =
         currentMiddleItemIndex + (action === "decrease" ? -1 : 1);
      carouselItemsRef.current?.children[
         currentMiddleItemIndex
      ].classList.remove("-translate-y-10");
      carouselItemsRef.current?.children[currentIndex].classList.add(
         "-translate-y-10"
      );
      setCurrentMiddleItemIndex(currentIndex);
   };

   /**
    * Manipula o movimento do carousel.
    * @param {string} move - Direção do movimento: "prev" (anterior) ou "next" (próximo).
    */
   const handleMoveCarousel = (move: "prev" | "next"): void => {
      if (!isMoving) {
         const widthOfCard =
            carouselItemsRef.current?.children[currentMiddleItemIndex]
               ?.clientWidth ?? 0;
         setIsMoving(true);

         if (move === "prev" && currentMiddleItemIndex > 1) {
            classNamesController("decrease");
            carouselItemsRef.current?.scrollTo({
               left: getCurrentSlidePosX() - widthOfCard - 40,
               behavior: "smooth",
            });
         } else if (
            move === "next" &&
            currentMiddleItemIndex < numberOfChildrens - 2
         ) {
            classNamesController("increase");
            carouselItemsRef.current?.scrollTo({
               left: getCurrentSlidePosX() + widthOfCard + 40,
               behavior: "smooth",
            });
         }

         setTimeout(() => {
            setIsMoving(false);
         }, 500);
      }
   };

   useEffect(() => {
      // Adiciona a classe CSS ao item do meio atual quando o componente é montado.
      if (
         carouselItemsRef.current &&
         carouselItemsRef.current.children.length > 0
      ) {
         carouselItemsRef.current.children[
            currentMiddleItemIndex
         ].classList.add("-translate-y-10");
      }
   }, []);

   return (
      <div className="relative w-full mx-auto py-11">
         <section className="w-10/12 mx-auto">
            <div
               className="flex items-start gap-10 py-20 mx-auto overflow-x-hidden"
               ref={carouselItemsRef}
            >
               {children}
            </div>
         </section>
         <div className="absolute flex items-center justify-between w-full -translate-y-1/2 top-1/2">
            <button
               className="rounded-full"
               onClick={() => handleMoveCarousel("prev")}
               disabled={currentMiddleItemIndex <= 1}
            >
               <Image
                  src={
                     currentMiddleItemIndex <= 1
                        ? "/assets/carousel-arrow-left-disabled.svg"
                        : "/assets/carousel-arrow-left-enabled.svg"
                  }
                  width={70}
                  height={70}
                  alt="Carousel prev navigations icons"
               />
            </button>
            <button
               className="rounded-full"
               onClick={() => handleMoveCarousel("next")}
               disabled={currentMiddleItemIndex === numberOfChildrens - 2}
            >
               <Image
                  src={
                     currentMiddleItemIndex === numberOfChildrens - 2
                        ? "/assets/carousel-arrow-right-disabled.svg"
                        : "/assets/carousel-arrow-right-enabled.svg"
                  }
                  width={70}
                  height={70}
                  alt="Carousel next navigations icons"
               />
            </button>
         </div>
      </div>
   );
}

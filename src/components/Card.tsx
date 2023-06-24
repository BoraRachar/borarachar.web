import { ReactNode } from "react";
import classNames from "classnames";

interface CardsCustomClassesNames {
   primary?: string;
   secondary?: string;
}

interface CardProps {
   children: ReactNode;
   type: "primary" | "secondary";
   id: string;
   customClassesNames?: CardsCustomClassesNames;
}

export default function Card({
   children,
   type,
   id,
   customClassesNames,
}: CardProps) {
   const cardClasses = classNames(
      type === "primary" ? "bg-[#724fd8]" : "",
      "rounded-lg",
      "py-14",
      "px-7",
      "flex",
      "flex-col",
      "items-start",
      "shadow-card-custom",
      "transition-all",
      "ease-out",
      "last:mr-10",
      customClassesNames?.primary
   );

   const secondaryCardClasses = classNames(
      "flex",
      "flex-col",
      "items-center",
      "gap-7",
      customClassesNames?.secondary
   );

   if (type === "primary") {
      return (
         <section className={cardClasses} id={id}>
            {children}
         </section>
      );
   } else if (type === "secondary") {
      return (
         <section className={secondaryCardClasses} id={id}>
            {children}
         </section>
      );
   } else {
      return null;
   }
}

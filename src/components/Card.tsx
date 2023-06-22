interface CardsCustomClassesNames {
   primary?: string;
   secondary?: string;
}
interface CardProps {
   children: React.ReactNode;
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
   if (type === "primary")
      return (
         <section
            className={`bg-[#724fd8] rounded-lg py-14 px-7 flex flex-col items-start shadow-card-custom transition-all ease-out last:mr-10 duration-75 ${
               customClassesNames?.primary ?? ""
            }`}
            id={id}
         >
            {children}
         </section>
      );
   else if (type === "secondary")
      return (
         <section
            className={`flex flex-col items-center gap-7 ${
               customClassesNames?.secondary ?? ""
            }`}
            id={id}
         >
            {children}
         </section>
      );
   else return null;
}

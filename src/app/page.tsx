import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";

export const metadata = {
   title: "Bora Rachar | Página inicial",
   description: "...",
};

const secondaryCardsList = [
   {
      icon: <div className="h-28 w-28 rounded-full bg-[#724FD8]"></div>,
      title: "Cursos",
      description:
         "Our software allows you to create graphics instantly. It's free and easy to use.",
   },
   {
      icon: <div className="h-28 w-28 rounded-full bg-[#FFC548]"></div>,
      title: "Cursos",
      description:
         "Our software allows you to create graphics instantly. It's free and easy to use.",
   },
   {
      icon: <div className="h-28 w-28 rounded-full bg-[#F27405]"></div>,
      title: "Cursos",
      description:
         "Our software allows you to create graphics instantly. It's free and easy to use.",
   },
   {
      icon: <div className="h-28 w-28 rounded-full bg-[#A586FF]"></div>,
      title: "Cursos",
      description:
         "Our software allows you to create graphics instantly. It's free and easy to use.",
   },
];

export default function Home() {
   return (
      <main>
         <Header />
         <HeroSection />
         <ServicesSection />
      </main>
   );
}

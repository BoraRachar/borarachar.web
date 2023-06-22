"use client";
import Buttons from "@/components/Button";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";

export const metadata = {
   title: "Bora Rachar | Home",
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

const primaryCardsList = [
   {
      title: "Cursos",
      description: "Netflix, Spotify, HBO Max, Disney+ e muito mais!",
      url: "#",
   },
   {
      title: "Cursos",
      description: "Netflix, Spotify, HBO Max, Disney+ e muito mais!",
      url: "#",
   },
   {
      title: "Cursos",
      description: "Netflix, Spotify, HBO Max, Disney+ e muito mais!",
      url: "#",
   },
   {
      title: "Cursos",
      description: "Netflix, Spotify, HBO Max, Disney+ e muito mais!",
      url: "#",
   },
   {
      title: "Cursos",
      description: "Netflix, Spotify, HBO Max, Disney+ e muito mais!",
      url: "#",
   },
   {
      title: "Cursos",
      description: "Netflix, Spotify, HBO Max, Disney+ e muito mais!",
      url: "#",
   },
];

export default function Home() {
   return (
      <main>
         <Header />
       <HeroSection />
         <Carousel>
            {primaryCardsList.map((card, index) => (
               <Card
                  key={`${card.title}-${index}`}
                  type="primary"
                  id={`card-${card.title}-${index}`}
               >
                  <div
                     className={`flex flex-col justify-between min-h-[472px]`}
                     style={{ width: "calc(100vw / 4 - 85px)" }}
                  >
                     <div className="flex flex-col gap-8">
                        <h3 className="text-3xl font-medium text-white">
                           {card.title}
                        </h3>
                        <p className="mb-32 text-xl font-normal text-white">
                           {card.description}
                        </p>
                     </div>
                     <Buttons type="secondary" title="Ver grupos" />
                  </div>
               </Card>
            ))}
         </Carousel>
      </main>
   );
}

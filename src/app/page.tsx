import Buttons from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";
import FAQSection from "@/sections/FAQSection";

export const metadata = {
   title: "Bora Rachar | Home",
   description: "...",
};

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
];

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
          <section className="grid w-11/12 grid-cols-3 gap-10 py-32 mx-auto">
            {primaryCardsList.map((card) => (
               <Card key={card.title} type="primary" id={`card-${card.title}`}>
                  <div className="flex flex-col gap-8">
                     <h3 className="text-3xl font-medium text-white">
                        {card.title}
                     </h3>
                     <p className="mb-32 text-xl font-normal text-white">
                        {card.description}
                     </p>
                     <Buttons type="secondary" title="Ver grupos" />
                  </div>
               </Card>
            ))}
         </section>
         <section className="grid w-11/12 grid-cols-4 gap-10 mx-auto">
            {secondaryCardsList.map((card) => (
               <Card key={card.title} type="secondary" id={`card-${card.title}`}>
                  {card.icon}
                  <h3 className="text-xl font-medium text-[#5A5A5A]">
                     {card.title}
                  </h3>
                  <p className="mb-32 text-base font-light text-[#5A5A5A]">
                     {card.description}
                  </p>
               </Card>
            ))}
         </section>
         <FAQSection />
      </main>
   );
}

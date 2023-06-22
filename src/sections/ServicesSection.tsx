"use client";
import Buttons from "@/components/Button";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const servicesCardsList = [
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

export default function ServicesSection() {
   return (
      <section className="w-11/12 mx-auto py-36">
        <SectionTitle title="Stylish and lightweight down jacket" customClassesNames={{title: 'text-center'}} />
         <Carousel>
            {servicesCardsList.map((card, index) => (
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
      </section>
   );
}

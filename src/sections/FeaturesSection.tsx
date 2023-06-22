import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const featuresCardsList = [
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

export default function FeaturesSection() {
   return (
      <div className="w-full bg-[#F9F7FF]" id="features-section-wrapper">
         <section className="flex flex-col items-center w-10/12 gap-16 py-8 mx-auto">
            <SectionTitle title="Features" />
            <ol className="flex items-start gap-16 min-h-[750px] py-16">
               {featuresCardsList.map((card, index) => (
                  <Card
                     key={`card-${card.title}-${index}`}
                     type="secondary"
                     id={`card-${card.title}-${index}`}
                     customClassesNames={{secondary: 'even:self-end'}}
                  >
                     {card.icon}
                     <h3 className="text-xl font-medium text-[#5A5A5A]">
                        {card.title}
                     </h3>
                     <p className="mb-32 text-base font-normal text-[#5A5A5A] max-w-[28ch]">
                        {card.description}
                     </p>
                  </Card>
               ))}
            </ol>
         </section>
      </div>
   );
}

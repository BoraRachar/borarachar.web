import Buttons from "@/components/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function HeroSection() {
   return (
      <main
         className="grid items-start w-10/12 grid-cols-2 mx-auto gap-11 py-28"
         id="hero-section-main"
      >
         <section id="hero-section-left">
            <SectionTitle
               title="Light and flowing, shows off your tenderness and romantic vibe "
               description="Easy to wear and versatile, keeps you warm and fashionable in autumn and winter"
               customClassesNames={{
                  header: "pb-10 ",
                  title: "text-6xl max-w-[20ch] leading-[72px]",
                  description: "max-w-[30ch] leading-7",
               }}
            />
            <Buttons
               title="Comece a economizar"
               type="primary"
               customClassesNames="max-w-[300px]"
            />
         </section>
         <section id="hero-section-right">
            {/* Placeholder */}
            <div className="w-full bg-gray-200 rounded-2xl h-[420px]"></div>
         </section>
      </main>
   );
}

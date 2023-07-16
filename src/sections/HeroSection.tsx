import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { ButtonCustomizer } from "@/components/ButtonCustomizer";

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
                  title: "text-6xl max-w-[20ch] leading-[72px] font-bold",
                  description: "max-w-[30ch] leading-7 font-normal",
               }}
            />
            <ButtonCustomizer.Root type="primary" customClassesNames="max-w-[395px] h-14">
               <ButtonCustomizer.Title title="Comece a economizar" customClassesNames="text-xl font-bold text-neutral-white"/>
            </ButtonCustomizer.Root>
         </section>
         <figure id="hero-section-right">
            {/* Placeholder */}
            {/* This will be replaced by other content, probably one image or video source. */}
            <div className="w-full bg-gray-200 rounded-2xl h-[420px]"></div>
            <figcaption className="invisible">
               This will be replaced by one legend of the content above.
            </figcaption>
         </figure>
      </main>
   );
}

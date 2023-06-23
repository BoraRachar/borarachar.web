import Buttons from "@/components/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";
import bigcircle from "@/assets/BigCircle.svg";
import smallcircle from "@/assets/SmallCircle.svg";

export default function CTASection() {
  return (
    <section id="cta-section" className="h-[442px] bg-[#724FD8] flex relative">
      <div
        id="cta-content-wrapper"
        className="w-full h-full flex flex-col items-center z-10 justify-center gap-24"
      >
        <SectionTitle
          customClassesNames={{ header: "text-white" }}
          title="E ai, bora rachar?"
        />
        <Buttons customClassesNames="w-40" type="secondary" title="Comece já" />
      </div>
      <div
        id="cta-circles-wrapper"
        className="w-full h-full flex overflow-hidden absolute"
      >
        <div
          id="cta-leftcircles-wrapper"
          className="w-2/4 flex flex-col h-full justify-between"
        >
          <Image
            id="cta-leftcircle"
            className="self-end mr-48 -translate-y-10"
            src={smallcircle}
            alt="pequeno circulo"
          />
          <Image
            className="translate-y-32"
            src={bigcircle}
            alt="grande circulo"
          />
        </div>
        <div
          id="cta-rightcircles-wrapper"
          className="w-2/4 flex flex-col h-full justify-between"
        >
          <Image
            id="cta-rightcircle"
            className="self-end transform rotate-180 -translate-y-32"
            src={bigcircle}
            alt="grande circulo"
          />
          <Image
            className="ml-48 translate-y-10"
            src={smallcircle}
            alt="pequeno circulo"
          />
        </div>
      </div>
    </section>
  );
}

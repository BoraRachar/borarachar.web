import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";

export default function CTASection() {
  return (
    <section id="cta-section" className="h-[442px] bg-[#724FD8] flex relative">
      <div
        id="cta-content-wrapper"
        className="z-10 flex flex-col items-center justify-center w-full h-full gap-8"
      >
        <Image 
          id="cta-logo"
          src="/assets/logo-white.svg"
          width={330}
          height={138}
          alt="Logo do Bora Rachar"
        />
        <div id="cta-button-wrapper" className="w-[162px]">
          <Button type="secondary" title="Comece já" />
        </div>
      </div>
      <div
        id="cta-circles-wrapper"
        className="absolute flex w-full h-full overflow-hidden"
      >
        <div
          id="cta-leftcircles-wrapper"
          className="flex flex-col justify-between w-2/4 h-full"
        >
          <Image
            id="cta-leftcircle"
            className="self-end mr-48 -translate-y-10"
            src="/assets/small-circle.svg"
            width={90}
            height={90}
            alt="pequeno circulo"
          />
          <Image
            className="translate-y-32"
            src="/assets/big-circle-image.svg"
            width={298}
            height={298}
            alt="grande circulo"
          />
        </div>
        <div
          id="cta-rightcircles-wrapper"
          className="flex flex-col justify-between w-2/4 h-full"
        >
          <Image
            id="cta-rightcircle"
            className="self-end transform rotate-180 -translate-y-32"
            src="/assets/big-circle-image.svg"
            width={298}
            height={298}
            alt="grande circulo"
          />
          <Image
            className="ml-48 translate-y-10"
            src="/assets/small-circle.svg"
            width={90}
            height={90}
            alt="pequeno circulo"
          />
        </div>
      </div>
    </section>
  );
}

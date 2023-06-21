import Email from "@/assets/Email.svg";
import Image from "next/image";

interface NewsletterProps {
  title: string;
  description: string;
  placeholder: string;
  bottom_text: string;
}

export default function Newsletter({
  title,
  description,
  placeholder,
  bottom_text,
}: NewsletterProps) {
  return (
    <section>
      <h1 className="font-semibold text-lg" id={`newsletter-title-${title}`}>
        {title}
      </h1>
      <p
        className="text-[#637381] text-[15px] mt-7 w-[270px] h-12"
        id={`newsletter-description-${description}`}
      >
        {description}
      </p>
      <fieldset className="mt-6 flex" id={`newsletter-input-wrapper-${title}`}>
        <input
          className="placeholder-[#637381] w-[222px] text-sm flex pl-5 outline-none border-[#EEEEEE] border-[1px] rounded-l-[5px]"
          id={`newsletter-input-${title}`}
          placeholder={placeholder}
        />
        <figure
          className="bg-primary w-12 h-12 flex items-center justify-center rounded-r-[5px]"
          id={`newsletter-icon-wrapper-${title}`}
        >
          <Image
            className=""
            id={`newsletter-icon-${title}`}
            src={Email}
            alt="Icone de email"
          />
        </figure>
      </fieldset>
      <p className="mt-[25px] text-[#637381] text-[15px]">{bottom_text}</p>
    </section>
  );
}

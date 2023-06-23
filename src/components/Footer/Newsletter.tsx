// import email from "@/assets/email-icon.svg";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section>
      <h1 className="text-lg font-semibold" id={`newsletter-title`}>
        Subscribe to Newsletter
      </h1>
      <p
        className="text-[#637381] text-[15px] mt-7 w-[270px] h-12"
        id={`newsletter-description`}
      >
        Enter your email address for recieving valuable newsletters.
      </p>
      <fieldset className="flex mt-6" id={`newsletter-input-wrapper`}>
        <input
          className="placeholder-[#637381] w-[222px] text-sm flex pl-5 outline-none border-[#EEEEEE] border-[1px] rounded-l-[5px]"
          id={`newsletter-input`}
          placeholder="Enter your email address"
        />
        <figure
          className="bg-primary w-12 h-12 flex items-center justify-center rounded-r-[5px]"
          id={`newsletter-icon-wrapper`}
        >
          <Image
            className=""
            id={`newsletter-icon`}
            src='/assets/email-icon.svg'
            alt="Icone de email"
            width={18}
            height={13}
          />
        </figure>
      </fieldset>
      <p className="mt-[25px] text-[#637381] text-[15px]">
        © Copyright 2023 - TailGrids
      </p>
    </section>
  );
}

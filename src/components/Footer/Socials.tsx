import Image from "next/image";
import Link from "next/link";
// import logo from "@/assets/logo.svg";
// import facebookSVG from "@/assets/facebook-icon.svg";
// import twitterSVG from "@/assets/twitter-icon.svg";
// import instagramSVG from "@/assets/instagram-icon.svg";
// import linkedinSVG from "@/assets/linkedin-icon.svg";

export default function Socials() {
   return (
      <section id="socials-wrapper" className="w-[270px]">
         <Link id="socials-logo" href="#">
            <Image src='/assets/logo.svg' alt="Logo do Bora Rachar" width={132} height={53} />
         </Link>
         <p id="socials-text" className="text-[#637381] text-[15px] mt-[22px]">
            Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor
            incididunt ut labore et dolore.
         </p>
         <nav id="socials-nav" className="flex gap-[27px] mt-[69px]">
            <Link id="socials-icon-facebook" href="#">
               <Image src='/assets/facebook-icon.svg' alt="Logo do facebook" width={10} height={18}/>
            </Link>
            <Link id="socials-icon-twitter" href="#">
               <Image src='/assets/twitter-icon.svg' alt="Logo do twitter" width={18} height={18}/>
            </Link>
            <Link id="socials-icon-instagram" href="#">
               <Image src='/assets/instagram-icon.svg' alt="Logo do instagram" width={18} height={18}/>
            </Link>
            <Link id="socials-icon-linkedin" href="#">
               <Image src='/assets/linkedin-icon.svg' alt="Logo do linkedin" width={18} height={18}/>
            </Link>
         </nav>
      </section>
   );
}

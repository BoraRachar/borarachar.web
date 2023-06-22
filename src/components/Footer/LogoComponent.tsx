import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Logo.svg";
import facebook from "@/assets/Facebook.svg";
import twitter from "@/assets/Twitter.svg";
import instagram from "@/assets/Instagram.svg";
import linkedin from "@/assets/Linkedin.svg";

export default function LogoComponent() {
  return (
    <section className="w-[270px]">
      <Link href="#">
        <Image src={logo} alt="Logo do Bora Rachar" />
      </Link>
      <p className="text-[#637381] text-[15px] mt-[22px]">
        Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor
        incididunt ut labore et dolore.
      </p>
      <nav className="flex gap-[27px] mt-[69px]">
        <Link href="#">
          <Image src={facebook} alt="Logo do facebook" />
        </Link>
        <Link href="#">
          <Image src={twitter} alt="Logo do twitter" />
        </Link>
        <Link href="#">
          <Image src={instagram} alt="Logo do instagram" />
        </Link>
        <Link href="#">
          <Image src={linkedin} alt="Logo do linkedin" />
        </Link>
      </nav>
    </section>
  );
}

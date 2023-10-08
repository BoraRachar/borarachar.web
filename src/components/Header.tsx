import Image from "next/image";
import Link from "next/link";
import { ButtonCustomizer } from "@/components/ButtonCustomizer";

export default function Header() {
    return (
        <header id="nav-header">
            <nav className="flex items-center justify-center w-full h-28" id="menu">
                <div className="flex justify-between w-10/12 h-14">
                    <Link href="#" id="logo">
                        <Image src='/assets/logo.svg' alt="Logo do Bora Rachar" width={132} height={53}  />
                    </Link>
                    <div className="flex w-11/12">
                        <div className="flex items-center w-2/4 ml-16 space-x-4 text-base text-neutral-black font-bold">
                            <Link href="#" id="link-como-funciona">Como funciona?</Link>
                            <Link href="#" id="link-features">Features</Link>
                            <Link href="#" id="link-duvidas">Dúvidas</Link>
                            <Link href="#" id="link-contato">Contato</Link>
                        </div>
                        <div className="flex items-center justify-end w-2/4">
                            <Link href="/login" className="mr-8 text-base font-bold text-neutral-black" id="link-login">Login</Link>
                            <div className="w-[181px]">
                                <Link href="register">
                                    <ButtonCustomizer.Root type="primary" customClassesNames="flex items-center justify-center h-12">
                                        <ButtonCustomizer.Title title="Criar Conta" customClassesNames="font-semibold text-base text-neutral-white "/>
                                    </ButtonCustomizer.Root> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
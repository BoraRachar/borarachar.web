import Image from "next/image";
import Link from "next/link";
import logo from '../assets/Logo.svg';

export default function Header() {
    return (
        <header id="nav-header">
            <nav className="flex w-full h-28 items-center justify-center" id="menu">
                <div className="flex w-11/12 h-14 justify-between">
                    <Link href="#" id="logo">
                        <Image src={logo} alt="Logo do Bora Rachar" />
                    </Link>
                    <div className="flex w-11/12">
                        <div className="flex w-2/4 items-center space-x-4 text-lg ml-16">
                            <Link href="#" id="link-como-funciona">Como funciona?</Link>
                            <Link href="#" id="link-features">Features</Link>
                            <Link href="#" id="link-duvidas">Dúvidas</Link>
                            <Link href="#" id="link-contato">Contato</Link>
                        </div>
                        <div className="flex w-2/4 items-center justify-end text-lg">
                            <Link href="#" className="mr-8" id="link-login">Login</Link>
                            <Link href=".#">
                                <button
                                    className="bg-dark-button w-48 h-14 rounded-md text-white font-semibold"
                                    id="button-criar-conta"
                                >
                                    Criar Conta
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
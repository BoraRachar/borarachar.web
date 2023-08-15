import Image from "next/image";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-white lg:flex lg:flex-row lg:items-center lg:justify-center">
        <div className="flex items-center justify-center">
          {children}
        </div>
        <div className="hidden lg:block">
          <Image src="/assets/hero-img.svg" alt="Hero Image" width={604} height={659}/>
        </div>
      </body>
    </html>
  );
}
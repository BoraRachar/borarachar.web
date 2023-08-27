import Image from "next/image";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-[#FEFEFE]">
        {children}
      </body>
    </html>
  );
}
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-neutral-white">
        {children}
      </body>
    </html>
  );
}
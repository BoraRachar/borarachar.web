export default function ForgotPasswordLayout({ 
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
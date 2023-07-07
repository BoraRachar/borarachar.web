'use client';
import { QueryClient, QueryClientProvider } from "react-query";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Header from "@/components/Header";

const roboto = Roboto({ 
   weight: ["400", "500", "700"],
   subsets: ["latin"], 
});

const queryClient = new QueryClient();

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-br">
         <Provider store={store}>
            <QueryClientProvider client={queryClient}>
               <body className={roboto.className}>
                  <Header />
                  {children}
               </body>
            </QueryClientProvider>
         </Provider>
      </html>
   );
}

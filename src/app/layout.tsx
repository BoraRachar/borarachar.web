'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { store } from '@/store'

const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient()

// export const metadata = {
//   title: 'Bora Rachar',
//   description: '...',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <body className={inter.className}>{children}</body>
        </QueryClientProvider>
      </Provider>
    </html>
  )
}

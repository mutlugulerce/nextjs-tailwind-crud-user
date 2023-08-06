import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "../providers/index";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'User Crud Center ',
  description: 'User Create,Update,Read,Delete..',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Providers>
     <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}

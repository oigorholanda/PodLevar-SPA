import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'PodLevar',
   description: 'Não to usando, pode levar...',
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
         </body>
      </html>
   )
}

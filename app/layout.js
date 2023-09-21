import './globals.css'
import { SiteFooter } from '@/components/site-footer'
import Nav from './_components/Nav'



export const metadata = {
  title: 'Servicios Saltillo',
  description: 'Servicios del Hogar recomendados por tus vecinos.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Nav/>
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
        <SiteFooter />
      </body>
    </html>
  )
}

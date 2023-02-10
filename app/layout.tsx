import { useLocale } from 'next-intl'
import './tailwind-global.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const locale = useLocale()
  return (
    <html lang={locale}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}

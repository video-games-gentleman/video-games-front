import './tailwind-global.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      {children}
    </html>
  )
}

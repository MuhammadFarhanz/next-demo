import '../styles/globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <nav className='bg-black mx-auto h-20 flex items-center'>
          <Link href="/" className='bg-blue-400 m-2 p-2 rounded h-8 flex items-center'>Home</Link>
          <Link href="/post" className='bg-blue-400 m-2 p-2 rounded h-8 flex items-center'>Post</Link>
        </nav>
        {children}
        </body>
    </html>
  )
}

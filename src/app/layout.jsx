'use client'
import { usePathname } from 'next/navigation';

import '../output.css'

function routing(children) {
  const pathname = usePathname();

  if(!pathname.startsWith('/projects')) {
    return (
      <>
        <header>
          <p>hej</p>
        </header>
        <main
          className='
            flex
            flex-col
            grow
            max-w-7xl
            pt-16
            px-8
            mx-auto
          '
        >
          {children}
        </main>
        <footer>
          <p>hej</p>
        </footer>
      </>
    )
  } else {
    return children
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='
          overflow-x-hidden
          flex
          flex-col
          min-h-screen
        '
      >
        {routing(children)}
      </body>
    </html>
  )
}

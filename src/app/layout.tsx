import './globals.css'

import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'Users App',
  description: 'Generated by Next.js'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className='dark'>
        <div className='w-screen h-screen'>
          <div className='flex flex-no-wrap w-full h-full'>
            <Sidebar />
            <main className='container mx-auto py-10 md:w-4/5 w-11/12 px-6 h-full'>
              <div className='w-full h-full rounded border-dashed border-2 border-gray-300'>
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

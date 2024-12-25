import './globals.css'
import { Inter } from 'next/font/google'
import ShareButton from './components/ShareButton'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Hrushi's UI",
  description: 'Generate web designs using AI',
}



import React from 'react'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Header from './components/Header'

const layout = ({children}) => {
  return (
    <html lang="en">
    <head>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      ></link>
    </head>
    <body className={inter.className}>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <div><Toaster /></div>
        {children}
        
        
        <Footer />
      </main>
        {/* Share Button with fixed positioning */}
        {/* <ShareButton  /> */}
    </body>
  </html>
  
  )
}

export default layout
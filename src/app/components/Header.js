'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router=usePathname();
  console.log(router=="/");
  
  const [path, setpath] = useState(router)

  useEffect(() => {
    setpath(router)
  }, [router])
  

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        
        <Link href="/">
        <h1 className="justify-center items-center font-[1000] text-2xl md:text-4xl  mb-3 h-full"><span className="font-[1300] text-red-500"> &lt;/&gt; </span> Hrux<span className="font-[1300] text-red-500"> UI</span></h1>
        </Link>

         {/* <h1 className="flex justify-center items-center font-[1000] text-2xl md:text-4xl  mb-3 h-full">Welcome to<span className="font-[800] text-red-500"> Hrux UI</span></h1> */}
        

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" ><Button path={path=="/"} name="Home"/></Link>
          <Link href="/about" ><Button path={path=="/about"} name="About Us"/></Link>
          <Link href="/services" ><Button path={path=="/services"} name="Services"/></Link>
          <Link href="/portfolio" ><Button path={path=="/portfolio"} name="Portfolio"/></Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 flex justify-center items-center flex-col">
          <span className="block py-2 px-4 text-sm "  >
           <Link onClick={() => setIsMenuOpen(false)} href="/" ><Button name="Home"/></Link>
          </span>
          <span className="block py-2 px-4 text-sm "  >
           <Link onClick={() => setIsMenuOpen(false)} href="/about" ><Button name="About Us"/></Link>
          </span>
          <span className="block py-2 px-4 text-sm "  >
           <Link onClick={() => setIsMenuOpen(false)} href="/services" ><Button name="Services"/></Link>
          </span><span className="block py-2 px-4 text-sm "  >
           <Link onClick={() => setIsMenuOpen(false)} href="/portfolio" ><Button name="Portfolio"/></Link>
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;

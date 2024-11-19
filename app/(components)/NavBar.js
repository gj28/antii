// import Link from "next/link";
// import React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Image from "next/image";

// function NavBar() {
//   return (
//     <div className="p-6 flex w-screen  ">
//     <Image
//       src="/static/logo.png"
//       alt="logo"
//       width={50}
//       height={50}
//       className="mr-4"
//     />
//       <div className=" flex items-center ml-auto mr-4">
//         <p className="mx-4">Home</p>
//         <Link href="/about" className="mx-4">
//           About
//         </Link>
//         <DropdownMenu>
//           <DropdownMenuTrigger className="mx-4">
//             Service
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>
//               {" "}
//               <Link href="/service#ai">AI</Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               {" "}
//               <Link href="/service#web">website</Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               {" "}
//               <Link href="/service#app">Mobile application</Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               {" "}
//               <Link href="/service#cloud">cloud</Link>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//         <Link href="/career" className="mx-4">career</Link>
//         <Link href="/contact" className="mx-4">contact</Link>
//       </div>
//     </div>
//   );
// }

// export default NavBar;


 "use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-6 flex w-screen">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/static/anti_ai_logo.png"
          alt="logo"
          width={50}
          height={50}
          className="mr-4 rounded-full"
        />
      </Link>

      {/* Hamburger Icon (Visible only on small screens) */}
      <div className="lg:hidden flex items-center ml-auto">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Nav Links (Visible on medium and larger screens) */}
      <div className="hidden lg:flex items-center ml-auto mr-4">
        <Link href="/" className="mx-4 text-white">Home</Link>
        <Link href="/about" className="mx-4 text-white">About</Link>
        <Link href="/service" className="mx-4 text-white">Services</Link>
        <Link href="/career" className="mx-4 text-white">Career</Link>
        <Link href="/contact" className="mx-4 text-white">Contact</Link>
      </div>

      {/* Mobile Menu (Visible on small screens when hamburger icon is clicked) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={toggleMenu}
      >
    <div
  className={`bg-tranparant/50 backdrop-blur-sm text-white w-3/4 h-[30vh] p-6 transform transition-transform rounded-[10px] shadow-lg shadow-gray-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
  onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside the menu
>

  <Link href="/" className="block py-2 text-white hover:text-gray-500" onClick={toggleMenu}>Home</Link>
  <Link href="/about" className="block py-2 text-white hover:text-gray-500" onClick={toggleMenu}>About</Link>
  <Link href="/service" className="block py-2 text-white hover:text-gray-500" onClick={toggleMenu}>Services</Link>
  <Link href="/career" className="block py-2 text-white hover:text-gray-500" onClick={toggleMenu}>Career</Link>
  <Link href="/contact" className="block py-2 text-white hover:text-gray-500" onClick={toggleMenu}>Contact</Link>
</div>

      </div>
    </div>
  );
}

export default NavBar;

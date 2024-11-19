"use client"
import React, { useRef } from "react"
import Overlay from "./components/Overlays"
import dynamic from 'next/dynamic'
import NavBar from "../(components)/NavBar"

const DynamicCanvas = dynamic(() => import('./components/DynamicCanvas'), { ssr: false })

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)


  return (
    <>
      <div   className = "absolute top-0 left-0 w-full z-20 bg-transparent">  <NavBar /></div>

    <div id="service" className="h-screen">
      <DynamicCanvas scroll={scroll} />
       <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </div>
    </>
  )
}
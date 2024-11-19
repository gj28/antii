"use client"
import { Button } from "@/components/ui/button"
import React, { forwardRef } from "react"
import AiDialog from "./AiDialog"
import AppDialog from "./AppDialog"
import CloudDialog from "./CloudDialog"
import WebDialog from "./WebDialog"


const Overlay = forwardRef(({ caption, scroll }, ref) => {


  return (
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        caption.current.innerText = Math.ceil(scroll.current.toFixed(2) * 100)+"%"  
      }}
      className="scroll">
      <div id="ai" style={{ height: "400vh" }}>
        <div className="text-white dot">
          <h1 className="text-white ">AI Development</h1>
          <p className="text-white ">AI services including AI chat bots, AI voice assistant, AI sales bot,
          ⁠leverage AI to automate your business and increase efficiency with hasslefree conduction of sales services.
          </p>
           <AiDialog />
        </div>
      </div>
      <div id="app" style={{ height: "400vh" }}>
        <div className="text-white dot">
          <h1>App Development</h1>
          <p className="text-white"> Transforming ideas into powerful mobile solutions. Custom app development tailored to your business needs. Expert team delivering seamless iOS and Android experiences
          </p>
          <AppDialog/>
        </div>
      </div>
      <div id="cloud" style={{ height: "400vh" }}>
        <div className="text-white dot">
          <h1>Cloud Services</h1>
          <p className="text-white">
          By leveraging cloud services, organizations can enhance their operations,drive growth, and foster innovation.These technologies are doing revolutions in businesses and improving quality of life worldwide.
          </p>
          <CloudDialog/>
        </div>
      </div>
      <div id="web" style={{ height: "400vh" }}>
        <div className="text-white dot">
          <h1>Web Services</h1>
          <p className="text-white"> Our Web Development services provide end-to-end solutions for building robust, scalable,and user-friendly websites and applications, customized to your business needs.</p>
          <WebDialog/>
        </div>
      </div>
      <span className="caption" ref={caption}>
        0%
      </span>
    </div>
  )
})

export default Overlay

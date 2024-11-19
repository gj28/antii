import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

function SocialIcons() {

  return (
    <div className="flex space-x-6">
    <Link href="https://www.linkedin.com/company/anti-ai/posts/?feedView=all"> <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-400" /></Link> 
    <Link href="https://www.instagram.com/antiai.ltd?igsh=MTZiMzIwbTJ4NWM=">  
    <Instagram className="w-6 h-6 text-gray-600 hover:text-blue-400" /></Link>
      {/* <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-400" /> */}
    </div>
  )
}

export default SocialIcons
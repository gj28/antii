import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// import ProjectRequirementsForm from '../pages/ProjectRequirementsForm'


function AppDialog() {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  return (
    <>
    <Dialog open={isAppModalOpen} onOpenChange={setIsAppModalOpen}>
      <DialogTrigger asChild>
        <Button className="mt-4 bg-tranparant">READ MORE</Button>

      </DialogTrigger>
    
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl font-bold mb-4">Transform Your Business with ANTI.Ai's Next-Generation App Development Services</DialogTitle>
        </DialogHeader>
        <div className="text-white space-y-4 overflow-y-auto max-h-[70vh]">
          <p>
            Welcome to ANTI.Ai, where we specialize in crafting bespoke, high-performance mobile and
            web applications to elevate your business. Our team of expert developers leverages
            cutting-edge technology and AI integration to build powerful, user-friendly applications that
            drive growth and efficiency. Whether you're a startup or an established enterprise,
            ANTI-Ai provides tailored app development solutions to meet your unique business needs
            and ensure long-term success.
          </p>
          
          <h3 className="text-white text-xl font-semibold">Why Choose ANTI.Ai for Your App Development Services?</h3>
          <p>
            At ANTI-Ai, we don't just build apps; we create dynamic digital experiences that accelerate
            your business transformation. Our app development services are powered by the latest in
            AI technology, enabling you to deliver smarter, more responsive applications to your users.
            With a focus on innovation, security, and scalability, ANTI-Ai is committed to delivering app
            solutions that help you stay ahead of the competition while ensuring seamless user
            experiences.
          </p>
          
          <h3 className="text-white text-xl font-semibold">Our Comprehensive App Development Services</h3>
          <ul className="text-white list-disc pl-6">
            <li>Custom Mobile App Development: From concept to launch, we design and develop feature-rich iOS and Android apps tailored to your business requirements.</li>
            <li>Web Application Development: Deliver high-performance, responsive web apps that provide a seamless user experience across all devices.</li>
            <li>AI-Integrated Applications: Enhance app functionality with AI-powered features like chatbots, voice recognition, and predictive analytics.</li>
            <li>Cross-Platform App Development: Build versatile apps that work flawlessly on multiple platforms, reducing development time and costs.</li>
          </ul>
          
          <h3 className="text-white text-xl font-semibold">Boost Your Business with Our Industry-Specific App Solutions</h3>
          <p>Our app development services cater to a wide range of industries, ensuring that your app is built to meet the unique challenges of your sector:</p>
          <ul className="text-white list-disc pl-6">
            <li>Fintech App Development: Drive innovation in the financial industry with secure and scalable fintech apps tailored to your business model.</li>
            <li>Healthcare App Development: Empower patient care and streamline operations with HIPAA-compliant healthcare apps.</li>
            <li>Retail & E-commerce Apps: Enhance customer engagement and drive sales with custom e-commerce solutions designed for mobile and web platforms.</li>
            <li>Real Estate App Development: Simplify property management and real estate transactions with robust, AI-powered apps tailored for the real estate sector.</li>
          </ul>
          
          <h3 className="text-white text-xl font-semibold">Why ANTI.Ai Stands Out</h3>
          <p>
            With a team of highly skilled developers, AI experts, and industry specialists, ANTI-Ai is at
            the forefront of innovative app development. We ensure that our apps are not only
            functional and secure but also SEO-optimized to enhance visibility and drive organic traffic
            to your business. Our focus on user-centric design, seamless performance, and advanced
            AI integration positions your business for success in today's digital landscape.
          </p>
          
          <div className="text-white mt-6">
            <h3 className="text-white text-xl font-semibold">Partner with ANTI.Ai Today for Revolutionary App Development Solutions</h3>
            <p>
              Unlock the full potential of your business with our tailored app development services.
              Whether you're looking to enhance customer engagement, optimize operations, or
              innovate within your industry, ANTI-Ai is your trusted partner for delivering results-driven
              mobile and web applications.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>


    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe5IjPB3xM5RSaqrEw5gxC4FBaVM4xz5BISJ0cZxX-UP8fO0w/viewform"> <Button className="mt-4 bg-tranparant" >BUY NOW </Button></Link>
    {/* <Dialog open={isFormModalOpen} onOpenChange={setIsFormModalOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setIsFormModalOpen(true)}
            className="mt-4 bg-transparent"
          >
            BUY NOW
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-3xl p-6">
        
        
          <ProjectRequirementsForm />
        </DialogContent>
      </Dialog>  */}
      </>
  )
}

export default AppDialog

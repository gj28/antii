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


function WebDialog() {
  const [isWebModalOpen, setIsWebModalOpen] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)


  return (
    <>
    <Dialog open={isWebModalOpen} onOpenChange={setIsWebModalOpen}>
      <DialogTrigger asChild>
        <Button className="text-white mt-4 bg-transparant">READ MORE</Button>
     

      </DialogTrigger>
      
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl font-bold mb-4">Revolutionize Your Business with ANTI.Ai's Advanced Web Development Services</DialogTitle>
        </DialogHeader>
        <div className="text-white space-y-4 overflow-y-auto max-h-[70vh]">
          <p>
            At ANTI-Ai, we specialize in creating high-performance, secure, and scalable web solutions
            that leverage the latest technologies to empower your business. From dynamic websites to
            enterprise-grade web applications, our development services are designed to meet the
            demands of modern businesses.
          </p>
          
          <h3 className="text-white text-xl font-semibold">Why Choose ANTI.Ai for Your Web Development Services?</h3>
          <p>
            Our web development solutions are crafted to deliver superior performance and security,
            ensuring your website or web application is future-proof and capable of handling
            increasing traffic and business needs.
          </p>
          
          <h3 className="text-white text-xl font-semibold">Our Comprehensive Web Development Services</h3>
          <ul className="text-white list-disc pl-6">
            <li>Custom Web Application Development: Develop powerful, feature-rich web applications tailored to your business objectives using frameworks like Django, Laravel, and Node.js.</li>
            <li>Front-End Development: We build responsive and interactive front-ends using React, Angular, and Vue.js to provide seamless user experiences across devices.</li>
            <li>Back-End Development: Ensure your web applications are scalable and secure with our expertise in Python, Ruby on Rails, PHP, and Java-based back-end systems.</li>
            <li>Full-Stack Development: Our full-stack developers create end-to-end solutions that integrate seamlessly with your front-end and back-end infrastructure.</li>
            <li>API Development & Integration: We develop and integrate RESTful and GraphQL APIs to connect your web app with third-party systems, enabling seamless data flow.</li>
            <li>Cloud-Based Web Solutions: Leverage the power of AWS, Microsoft Azure, and Google Cloud for secure, scalable, and high-performance cloud-based web platforms.</li>
            <li>Progressive Web Apps (PWAs): Build fast, reliable, and engaging web applications that offer an app-like experience on the web, driving user retention and engagement.</li>
          </ul>
          
          <h3 className="text-white text-xl font-semibold">Leveraging Cutting-Edge Technologies</h3>
          <ul className="text-white list-disc pl-6">
            <li>Microservices Architecture: Break down complex applications into smaller, manageable components for better scalability and maintainability.</li>
            <li>Serverless Architecture: Build and deploy web applications without managing servers, improving scalability and reducing infrastructure costs.</li>
            <li>DevOps & Continuous Integration: Ensure rapid deployment and reliability with our CI/CD pipelines, using tools like Jenkins, Docker, and Kubernetes for seamless development.</li>
            <li>Artificial Intelligence & Machine Learning: Integrate AI and machine learning models into your web applications for automation and personalization.</li>
            <li>Blockchain Development: Secure your web platform with distributed ledger technologies for enhanced security, transparency, and traceability.</li>
            <li>Headless CMS Solutions: Decouple your front-end from the back-end content management system for faster content delivery and flexibility in design.</li>
          </ul>
          
          <h3 className="text-white text-xl font-semibold">Industry-Specific Web Solutions</h3>
          <ul className="text-white list-disc pl-6">
            <li>E-commerce Web Development: Build powerful, AI-driven e-commerce platforms with advanced features.</li>
            <li>Healthcare Web Solutions: Create HIPAA-compliant healthcare platforms with telemedicine and secure data management.</li>
            <li>Fintech Web Platforms: Develop secure, scalable fintech web applications that comply with industry regulations.</li>
            <li>Education & e-Learning Platforms: Build interactive, engaging, and secure e-learning platforms with AI-powered features.</li>
          </ul>
          
          <h3 className="text-white text-xl font-semibold">Why ANTI.Ai is Your Ideal Web Development Partner</h3>
          <p>
            At ANTI.Ai, we combine our expertise in advanced web technologies with a deep
            commitment to creating secure, high-performance, and scalable web solutions. Our
            development process includes a focus on SEO optimization, ensuring that your web
            platform not only performs well but also attracts and retains traffic.
          </p>
          
          <div className="text-white mt-6">
            <h3 className="text-white text-xl font-semibold">Take Your Business to the Next Level with ANTI.Ai's Web Development Services</h3>
            <p>
              Unlock the potential of your online presence with ANTI.Ai's tailored web development
              solutions. Whether you're looking to launch a new web platform, revamp your existing site,
              or create a complex web application, ANTI.Ai has the expertise to deliver exceptional
              results. Partner with us today for cutting-edge web development services that drive
              performance, security, and growth.
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
            className="text-white mt-4 bg-transparent"
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

export default WebDialog

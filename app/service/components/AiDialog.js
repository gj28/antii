

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import ProjectRequirementsForm from "../pages/ProjectRequirementsForm"; 
import Link from "next/link";

function AiDialog() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  return (
    <div>
      <Dialog open={isAIModalOpen} onOpenChange={setIsAIModalOpen}>
        <DialogTrigger asChild>
          <Button className="text-white mt-4 bg-transparent">READ MORE</Button>
        </DialogTrigger>

        <DialogContent className="bg-tranparant/50 backdrop-blur-sm  max-w-3xl max-h-[80vh] overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl font-bold mb-4">
              Transform Your Business with ANTI.Ai's Cutting-Edge AI Solutions
            </DialogTitle>
          </DialogHeader>
          <div className="text-white space-y-4 overflow-y-auto max-h-[70vh]"></div>
          <p className="text-white">
            Welcome to ANTI.Ai, where we leverage the power of AI to automate
            your business and boost efficiency. Our suite of AI solutions
            includes advanced AI chatbots, intuitive AI voice assistants, and
            dynamic AI sales bots, all designed to streamline your operations
            and enhance customer interactions.
          </p>
          <h3 className="text-white text-xl font-semibold">
            Why Choose ANTI.Ai for Your AI Solutions?
          </h3>
          <p className="text-white ">
            At ANTI.Ai, we understand the critical role that generative AI
            solutions and edge AI solutions play in modern businesses. Our
            mission is to build safe AI solutions, contributing to a world where
            AI is both secure and accessible.
          </p>
          <h3 className="text-white text-xl font-semibold">Our Range of AI Services</h3>
          <ul className="text-white list-disc pl-6">
            <li>
              AI Chatbots: Enhance customer service with our sophisticated AI
              chatbots.
            </li>
            <li>
              AI Voice Assistants: Automate and optimize communication channels.
            </li>
            <li>AI Sales Bots: Drive your sales and marketing efforts.</li>
          </ul>
          <h3 className="text-white text-xl font-semibold">
            Leveraging AI for Your Business Success
          </h3>
          <p className="text-white ">
            Our AI solutions are crafted to address various industries and
            applications:
          </p>
          <ul className="text-white list-disc pl-6">
            <li>AI Banking Solutions: Streamline banking operations.</li>
            <li>AI Beauty Solutions: Revolutionize the beauty industry.</li>
            <li>
              AI Building Solutions: Optimize construction and real estate.
            </li>
          </ul>
          <h3 className="text-white text-xl font-semibold">
            Our Commitment to AI Excellence
          </h3>
          <p className="text-white ">
            Our commitment goes beyond delivering AI solutions; we aim to make
            AI safe for everyone. Our motto, अन्ते सत्यं विजयते (Truth Prevails
            in the End), reflects our dedication to ethical AI practices.
          </p>
          <h3 className="text-white text-xl font-semibold">Explore Our AI Solutions</h3>
          <p className="text-white ">
            Whether you're seeking Microsoft AI solutions, Azure AI solutions,
            or AWS AI solutions, ANTI.Ai offers comprehensive services and
            expertise.
          </p>

          <div className="mt-6">
            <h3 className="text-white text-xl font-semibold">Contact Us Today</h3>
            <p className="text-white ">
              Join the growing number of businesses transforming their
              operations with ANTI.Ai's advanced AI solutions. Discover how our
              AI solutions company can help you achieve greater efficiency and
              success.
            </p>
            <p className="text-white font-semibold mt-2">
              ANTI.Ai – Building the Future of AI, Safely and Effectively.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe5IjPB3xM5RSaqrEw5gxC4FBaVM4xz5BISJ0cZxX-UP8fO0w/viewform"> <Button className="mt-4 bg-tranparant" >BUY NOW </Button></Link>
      {/* "BUY NOW" Button to open the form modal */}
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
    </div>
  );
}

export default AiDialog;

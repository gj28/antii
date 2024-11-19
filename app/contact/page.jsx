import React from 'react';
import ContactForm from './Component/ContactForm';
import SocialIcons from "./Component/SocialIcons";
import NavBar from '../(components)/NavBar';



function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row justify-between p-8 lg:p-16 items-center min-h-screen text-white">
        <div className="w-full lg:w-1/3 pr-8 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="mb-8 text-pretty">
            We're dedicated to safeguarding the future of humanity through ethical and responsible AI
            development. If you share our vision or have any inquiries, we'd love to hear from you.
          </p>
          <SocialIcons />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactPage;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Scroll } from "@react-three/drei";
import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ExpandText from "./ExpandText";
import { CheckCircle, FileSearch, Radar } from "lucide-react";
import Link from "next/link";



function Content() {
  const [expandedCard, setExpandedCard] = useState(null);


  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index); 
  };
  
  const cardData = [
    { id: 1, icon: <Radar size={48} className="text-white mb-2" />, title: "AI Detectors", content: "AI Detectors are tools designed to identify the presence of artificial intelligence in generated content." },
    { id: 2, icon: <CheckCircle size={48} className="text-white mb-2" />, title: "AI Checkers", content: "AI Checkers ensure the reliability and authenticity of AI-generated data." },
    { id: 3, icon: <FileSearch size={48} className="text-white mb-2" />, title: "AI Content Detectors", content: "AI Content Detectors analyze text to detect AI-generated patterns." },
  ];
  
  return (
    <Scroll html>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className=" about-t h-[100vh] left-[65vw] flex flex-col  justify-center absolute right-10"
      >
        <h1 className="text-white text-5xl"> About </h1>
        <ExpandText
          className="abt text-white  w-[400px] leading-8 mt-4"
          text="Anti AI is an AI research and development company. Our mission
        is to ensure that the threat from artificial general
        intelligence are mitigated even before they arise. We believe
        that humanity should benefit from AI, and we're developing our
        own first-in-class Anti AI software to ensure safe usage. We
        are building safe and smart solutions against AGI, but will
        also consider our mission fulfilled if our work aids others to
        achieve this outcome. We're a small team of passionate people
        working together to make a dream come true, a dream of making
        AI safe and accessible for everyone."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[10vw] w-[40vw] flex flex-col items-start justify-center absolute top-[100vh] right-0"
      >
        <h1 className="abt text-white  text-5xl mb-4">Our Mission and Vision </h1>
        <ExpandText
          className="abt text-white  leading-8"
          text="          At ANTI.Ai, our mission is clear: to mitigate the risks associated
          with AGI and to ensure that AI technologies are developed and used
          safely. We believe that AI should serve as a tool for progress, not a
          threat to our future. Our team is dedicated to creating first-in-class
          anti-AI software designed to detect and neutralize potential threats
          before they become significant issues."
        />

        <ExpandText
          className="abt text-white  leading-8 mt-3"
          text="We are building advanced AI solutions, including AI detectors and AI
          checkers, to address the safety and reliability of AI technologies.
          Our AI content detector and AI detection tools are engineered to
          identify and manage AI-related risks effectively. Through these
          efforts, we aim to not only safeguard our technology but also support
          global initiatives to ensure that AI benefits everyone."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="ociw h-[100vh] left-[55vw] w-[40vw] flex flex-col items-start justify-center absolute top-[200vh] right-0"
      >
        <h1 className="abt text-white  text-5xl mb-4">Our Commitment to India and the World</h1>
        <ExpandText
          className="abt text-white  leading-8"
          text="We are deeply grateful to India, our home and the source of our
          inspiration. This nation's spirit of innovation, unity, and resilience
          fuels our drive to excel in AI research and development. India's rich
          history of scientific achievement and its growing technological
          landscape provide the perfect backdrop for our mission."
        />

        <ExpandText
          className="abt text-white  leading-8 mt-3"
          text="Our gratitude extends to the entire nation as we work together to
          address the challenges of AI. Our vision is global, but our roots are
          firmly planted in Indian soil. We strive to embody the values of unity
          and collaboration that are central to India's culture and apply these
          principles in our work to create safe and beneficial AI solutions."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[10vw] w-[40vw] flex flex-col items-start justify-center absolute top-[300vh] right-0"
      >
        <h1 className="abt text-white  text-5xl mb-4">The Role of AI Detection and Safety</h1>
        <p className="abt text-white leading-8">
          In our quest to build a safer AI environment, ANTI.Ai focuses on
          several critical aspects:
        </p>
        <div className="cards-ab cards flex flex-row gap-3 mt-3">
      {cardData.map((card, index) => (
        <motion.div
          key={card.id}
          onClick={() => handleCardClick(index)}
          className={`flex-1 bg-black border border-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 ${
            expandedCard === index ? "h-[300px] w-[150px]" : "h-[150px] w-[150px]"
          } flex flex-col items-center justify-center`}
          initial={{ scale: 1 }}
          animate={expandedCard === index ? { scale: 1.1 } : { scale: 1 }}
        >
          {card.icon}
          <h3 className="text-white text-lg font-semibold text-center">
            {card.title}
          </h3>
          {expandedCard === index && (
            <p className="text-white text-sm mt-2 text-center">{card.content}</p>
          )}
        </motion.div>
      ))}
    </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className=" ociw h-[100vh] left-[55vw] w-[40vw] flex flex-col items-start justify-center absolute top-[400vh] right-0"
      >
        <h1 className="abt text-white  text-5xl mb-4">
          Building a Team with Passion and Purpose
        </h1>
        <ExpandText
          className="text-white abt leading-8 text-balance"
          text="At ANTI.Ai, we believe that our strength lies in our team. We are
          always on the lookout for talented, dedicated, and passionate
          individuals who share our vision of creating a safer AI future. If you
          are someone with a strong interest in AI and a commitment to our
          mission, we invite you to explore career opportunities with us."
        />

        <span className="abt text-white  leading-8 mt-3">
          Visit our careers page to learn more about how you can become part of
          our journey.
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[10vw] w-[40vw] flex flex-col items-start justify-center absolute top-[500vh] right-0"
      >
        <h1 className="text-white text-5xl mb-4">
          The Path Forward: Unity and Innovation
        </h1>
        <ExpandText
          className="abt text-white  leading-8"
          text="Our work at ANTI.Ai is a testament to the power of unity and
          innovation. We are a small but passionate team, working together to
          achieve a dream that we believe in wholeheartedly. Our efforts are
          aimed at making AI safe and accessible, not just for today but for
          future generations."
        />
        <ExpandText
          className="abt text-white  leading-8 mt-3"
          text="We are optimistic about the future and confident in our ability to
          make a meaningful impact. By developing state-of-the-art anti-AI
          solutions and fostering a collaborative and innovative environment, we
          aim to lead the way in safe AI development."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="ociw w-[30vw] h-[100vh] left-[55vw] flex flex-col items-start justify-center absolute top-[610vh] "
      >
        <h1 className=" text-white text-5xl mb-6">
          Location
        </h1>
      
        <h2 className="lc text-white flex items-center mb-6 leading-8">
          <MapPin size={69} className=" mlogo text-white mr-2" />
          70, Kesar Vihar, near Railway Colony, Vidhyadhar Nagar, Railway Colony,
          Jagatpura, Jaipur, Rajasthan 302017
        </h2>

        <Link  href="https://www.google.com/maps/place/WORKD-+A+Co-Working+Zone/@26.828647,75.8447231,17z/data=!3m1!4b1!4m6!3m5!1s0x396dc94f19a88eff:0xc380c0998cdeea1c!8m2!3d26.828647!4d75.847298!16s%2Fg%2F11flbrn_sx?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D">
        <h3 className="mlink text-white ">  Click Here to Go On Map &rarr;</h3>
        </Link>
        {/* <iframe
        className="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.355374046712!2d75.847298!3d26.828647000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc94f19a88eff%3A0xc380c0998cdeea1c!2sWORKD-%20A%20Co-Working%20Zone!5e0!3m2!1sen!2sin!4v1727938846580!5m2!1sen!2sin"
          width="400"
          height="300"
          border-radius="5px"
          loading="lazy"
        ></iframe> */}
      </motion.div>
    </Scroll>
  );
}

export default Content;

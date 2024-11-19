import React, { useState } from "react";
import { Scroll } from "@react-three/drei";
import { delay, motion } from "framer-motion";
import ProjectTag from "./ProjectTag";
import ProjectDescription from "./ProjectDescription";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ScrollDown from "./ScrollDown";
import NavBar from "./NavBar";
import ExpandText from "../about/(components)/ExpandText";

function HomeContent() {
  const [selectedProject, setSelectedProject] = useState(null);

  const name = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
      },
    },
  };

  const handleProjectClick = (projectId) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  const projects = [
    {
      id: "ANTI-Q",
      title: "ANTI.Q - Music Player",
      image: "/static/radio.jpg",
      description:
       <ExpandText 
       text =  "ANTI.Q—a retro-inspired, handcrafted music player by Anti AI, designed for the modern listener craving vintage nostalgia. This Bluetooth-enabled audio device combines classic design with advanced AI-driven features, offering a unique fusion of old-school style and smart technology. Created for those seeking an immersive, nostalgic listening experience, ANTI.Q is set to launch soon, promising to blend timeless aesthetics with the latest innovations in audio."
       
       />,
       tags: ["Serverless", "Retro", "Nostalgia"]
    },
    {
      id: "ANTI-0",
      title: "ANTI.0",
      image: "/static/Anti 0.jpg",
      description:
       <ExpandText
       text =  "ANTI.0 is a robust, all-inclusive AI security program designed to safeguard user privacy and deliver state-of-the-art defense against AI-driven cyber threats. Leveraging advanced AI models, this innovative solution identifies, evaluates, and stops unauthorized access while preventing potential security breaches. With adaptive defense mechanisms and real-time threat detection, ANTI.0 recognizes unusual behavior patterns and mitigates risks before they escalate—making it an essential tool in today’s dynamic digital landscape ,  Built with a privacy-first architecture, ANTI.0 integrates seamlessly with modern cybersecurity protocols to ensure strong data protection, digital asset security, and user autonomy. Its intuitive interface simplifies management and monitoring, empowering users to actively oversee their cybersecurity. As a next-generation AI cybersecurity solution, ANTI.0 offers a proactive and intelligent approach to combating the complex tactics of evolving cyber threats, positioning itself as the preferred choice for those prioritizing robust, future-ready digital security."
       />,
      tags: ["ANTI.0", "Security", "Future Proof"],
    },
    {
      id: "ANTI-1",
      title: "ANTI.1",
      image: "/static/comingSoon.jpeg",
      description:
       <ExpandText
       text =  "ANTI.1 is a groundbreaking AI project designed to disrupt the artificial intelligence industry with an innovative and cutting-edge approach. Developed by a team of expert AI researchers and developers, ANTI.1 aims to redefine AI capabilities with revolutionary features and functionalities that have never been seen before. As a next-generation AI solution, ANTI.1 is set to lead the way in AI innovation, pushing the limits of what artificial intelligence can achieve. ANTI.1 promises to reshape the future of AI with advanced technology and intelligent solutions."
       />,
      tags: ["ANTI.1", "Innovation", "Ethical AI"],
    },
  ];

  return (
    <Scroll html>
      <ScrollDown />
      <NavBar className="z-20" />
      <div className="name absolute flex flex-row gap-[20%] justify-center items-center top-[40vh] w-full">
  <motion.h1
    initial="hidden"
    animate="visible"
    variants={name}
    className="antiname text-white top-[40vh]   text-8xl font-geist-mono"
  >
    Anti
  </motion.h1>

  <motion.h1
    initial="hidden"
    animate="visible"
    variants={name}
    className="ainame text-white lg:right-[25vw] right-[35vw] text-8xl font-geist-mono"
  >
    Ai
  </motion.h1>
</div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{
          opacity: [1, 0],
          transition: { duration: 1, delay: 0 },
        }}
        className="absolute top-[45vh] right-[44vw] text-4xl"
      >
        Welcome
      </motion.h2>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          transition: { delay: 1, duration: 0.2 },
        }}
        className="absolute top-[45vh] right-[48vw] text-4xl"
      >
        to
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
        className="absolute top-[110vh] left-[10vw] lg:w-1/2 w-4/5"
      >
        <h1 className="text-white text-3xl text-balance">
          We're an Innovative Software Company. Protecting Humanity from the
          uncontrolled rise of Artificial Intelligence, Safeguarding people
          across the globe through our Innovative Software solutions.
        </h1>
      </motion.div>

      <div className="text-white absolute top-[200vh] left-[50%] transform -translate-x-1/2 flex justify-center items-center space-x-4 my-9">
        <ProjectTag />
      </div>

      {/* Projects Section */}
      <div className="absolute flex flex-col justify-center items-center top-[250vh] w-full space-y-[80px] px-1">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            className="flex flex-row bg-tranparant/50 backdrop-blur-sm shadow-md shadow-gray-500 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer w-[90%] lg:w-[80%] max-w-4xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-1/3 object-cover"
            />
            <div className="flex flex-col p-6 w-2/3">
              <h2 className="text-white text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-white mb-4">{project.description}</p>
              <div className="tagmar  flex space-x-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white py-1 text-sm font-medium bg-black-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <form className="p-4 flex flex-col absolute lg:top-[470vh] top-[470vh] right-[10vw] justify-center items-center lg:w-[500px] w-[300px] border-2 border-[#8d8d8d] rounded-md bg-black">
        <h1 className="text-white w-full text-2xl py-3">Contact</h1>
        <div className="flex items-center justify-between my-3 w-full">
          <Input className="mr-4" type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
        </div>
        <Input className="my-3" type="email" placeholder="Email" />
        <Input className="my-3" type="text" placeholder="Phone Number" />
        <Textarea className="my-3" placeholder="Type your message here." />
        <Button variant="secondary" className="w-full mt-4">
          Submit
        </Button>
      </form>
      <motion.div 
      initial={{opacity:0 , y:100}}
      animate={{opacity:1 , y:0}}
      transition={{duration:1 , delay:1}}
      className="cop p-1 flex absolute lg:top-[542vh] top-[542vh] left-[38%] text-gray-500 rounded-md  ">
       All Rights Reserved :&copy; 2024 Anti AI Private Limited.

      </motion.div>
    </Scroll>
  );
}

export default HomeContent;





// import React, { useEffect, useState } from "react";
// import { Scroll } from "@react-three/drei";
// import { motion } from "framer-motion";
// import ProjectTag from "./ProjectTag";
// import ProjectDescription from "./ProjectDescription";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import ScrollDown from "./ScrollDown";
// import NavBar from "./NavBar";

// function HomeContent() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const name = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 2,
//       },
//     },
//   };

//   return (
    
//     <Scroll html>
//       <ScrollDown />
//       <NavBar className = "absolute top-0 left-0 w-full z-20 bg-transparent"/>

//       {isMounted && (
//         <>
//           <motion.h1
//             initial="hidden"
//             animate="visible"
//             variants={name}
//             className="absolute top-[40vh] left-[15vw] text-8xl font-geist-mono"
//           >
//             Anti
//           </motion.h1>
//           <motion.h1
//             initial="hidden"
//             animate="visible"
//             variants={name}
//             className="absolute lg:top-[40vh] top-[50vh] lg:right-[25vw] right-[15vw] text-8xl font-geist-mono"
//           >
//             Ai
//           </motion.h1>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: [1, 0],
//               transition: { duration: 1, delay: 0 },
//             }}
//             className="absolute top-[45vh] right-[44vw] text-4xl"
//           >
//             Welcome
//           </motion.h2>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: [0, 1, 0],
//               transition: { delay: 1, duration: 0.3 },
//             }}
//             className="absolute top-[45vh] right-[48vw] text-4xl"
//           >
//             to
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{
//               opacity: 1,
//               x: 0,
//               transition: { duration: 1, delay: 0.3 },
//             }}
//             className="absolute top-[110vh] left-[10vw] lg:w-1/2 w-4/5"
//           >
//             <h1 className="text-3xl text-balance">
//               We're An Innovative Software Company. Protecting Humanity from the
//               uncontrolled rise of Artificial Intelligence, Safeguarding people
//               across the globe through our Innovative Software solutions.
//             </h1>
//           </motion.div>
//         </>
//       )}

// <div className="absolute top-[200vh] left-[50%] transform -translate-x-1/2 flex justify-center items-center space-x-4 my-9">
//         <ProjectTag />
//       </div>

//       {/* Adjusted flex container for cards */}
//       <div className="absolute top-[250vh] flex justify-center items-center gap-[140px] mx-10 lg:mx-20 flex-wrap">
//         <ProjectDescription
//           image="/static/radio.jpg"
//           title="ANTI.Q- Music Player"
//           description="Introducing ANTI.Q—a retro-inspired, handcrafted music player by Anti AI, designed for the modern listener craving vintage nostalgia. This Bluetooth-enabled audio device combines classic design with advanced AI-driven features, offering a unique fusion of old-school style and smart technology. Created for those seeking an immersive, nostalgic listening experience, ANTI.Q is set to launch soon, promising to blend timeless aesthetics with the latest innovations in audio."
//           tags={["Serverless", "Retro", "Nostalgia"]}
//         />
//         <ProjectDescription
//           image="/static/vercel.jpg"
//           title="ANTI.0"
//           className="flex flex-row-reverse"
//           description="ANTI.0 is an advanced AI protection software designed to combat AI-driven security risks and safeguard your digital privacy. This cutting-edge anti-AI software protects users from AI intrusions and unauthorized access, ensuring robust defense against evolving technological threats. Stay secure with AI cybersecurity solutions that prioritize user autonomy and data protection. ANTI.0 is the future of AI security."
//           tags={["ANTI.0", "Security", "Future Proof"]}
//         />
//         <ProjectDescription
//           image="/static/comingSoon.jpeg"
//           title="ANTI.1"
//           description="ANTI.1 is a groundbreaking AI project designed to disrupt the artificial intelligence industry with an innovative and cutting-edge approach. Developed by a team of expert AI researchers and developers, ANTI.1 aims to redefine AI capabilities with revolutionary features and functionalities that have never been seen before. As a next-generation AI solution, ANTI.1 is set to lead the way in AI innovation, pushing the limits of what artificial intelligence can achieve. ANTI.1 promises to reshape the future of AI with advanced technology and intelligent solutions."
//           tags={["ANTI.1", "Innovation", "Ethical AI"]}
//         />
//       </div>

//       {/* Adjusted Contact Form */}
//       {isMounted && (
//           <form className="contact-form p-4 flex flex-col absolute  right-0 justify-center items-center w-[90vw] lg:w-[380px] border-2 border-[#8d8d8d] rounded-md bg-black ">
//           <h1 className="w-full text-2xl py-3">Contact</h1>
//           <div className="flex items-center justify-between my-3 w-full">
//             <Input className="mr-4" type="text" placeholder="First Name" />
//             <Input type="text" placeholder="Last Name" />
//           </div>
//           <Input className="my-3" type="email" placeholder="Email" />
//           <Input className="my-3" type="text" placeholder="Phone Number" />
//           <Textarea className="my-3" placeholder="Type your message here." />
//           <Button variant="secondary" className="w-full mt-4">
//             Submit
//           </Button>
//         </form>
//         )}
//     </Scroll>
//   );
// }

// export default HomeContent;
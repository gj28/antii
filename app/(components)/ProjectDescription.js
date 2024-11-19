// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// // ProjectDescription component
// function ProjectDescription({ title, description, tags, className, image }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
//       className={`${className} p-6 bg-[#060606c3] flex items-center justify-center w-full lg:w-[350px] border-2 rounded-md border-gray-400`} // Increased width for better display
//     >
//       <div className="w-full flex flex-col items-center justify-center">
//         {/* Image with fixed aspect ratio and same size */}
//         <Image
//           src={image}
//           alt="logo"
//           width={200}
//           height={200} // Ensure all images are of same size (square)
//           className="w-full h-[200px] object-cover rounded-md mb-4" // Ensures all images have the same width and height
//         />
        
//         {/* Title */}
//         <h1 className="card-logo text-xl font-semibold text-center mb-3">{title}</h1>
        
//         {/* Description */}
//         <p className=" distext w-full text-justify text-sm leading-6 mb-4">{description}</p>
        
//         {/* Tags */}
//         <ul className="flex flex-wrap items-center justify-center space-x-3 text-sm">
//           {tags.map((tag, i) => (
//             <li key={i} className="px-3 py-1 border border-gray-500 rounded-full">
//               {tag}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// }

// export default ProjectDescription;





import React, { useState } from "react";
import "./ProjectDescription.css";  // Ensure this is imported for styles

function ProjectDescription({ title, description, tags, image }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);  // Toggle flip on click
  };

  return (
    <div className="project-card-container w-[390px]" onClick={handleClick}>
      <div className={`project-card ${flipped ? "flipped" : ""}`}>
        <div className="project-card-front">
          <img src={image} alt="project" className="project-image" />
          <h2 className="project-title">{title}</h2>
          <ul className="tags">
            {tags.map((tag, index) => (
              <li key={index} className="tag">{tag}</li>
            ))}
          </ul>
        </div>
        <div className="project-card-back">
          <p className="project-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;
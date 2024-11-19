import React from 'react';
// import './Features.css';
import './Chat.css';

function Features({ onFeatureClick }) {
  return (
    <div className="features">
      <button onClick={() => onFeatureClick('AI Services')}>AI Services</button>
      <button onClick={() => onFeatureClick('Web Services')}>Web Services</button>
      <button onClick={() => onFeatureClick('About Anti AI')}>About Anti-AI</button>
      <button onClick={() => onFeatureClick('DevOps Services')}>DevOps Services</button>
      <button onClick={() => onFeatureClick('Other')}>Other</button>
    </div>
  );
}

export default Features;







// // Features.jsx
// import React from 'react';

// function Features({ onFeatureClick }) {
//   const features = [
//     "AI Services",
//     "Web Services",
//     "About Anti-AI",
//     "DevOps Services",
//     "Cloud Services",
//     "Mobile App Services"
//   ];

//   return (
//     <div className="comp">
//       {features.map((feature, index) => (
//         <button key={index} onClick={() => onFeatureClick(feature)}>
//           {feature}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Features;

'use client'
import React, { useState } from 'react';

const ExpandableText = ({ text, maxLength = 150 , className}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const displayText = isExpanded ? text : text.slice(0, maxLength) + '...';

  return (
    <div className={`${className}`}>
      <p>{displayText}</p>
      <button 
        onClick={toggleExpand} 
        className="text-blue-500 hover:text-blue-700 font-semibold"
      >
        {isExpanded ? 'See Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ExpandableText;
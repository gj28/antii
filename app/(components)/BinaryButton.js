"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"

function BinaryDownloadButton ()  {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [binaryNumbers, setBinaryNumbers] = useState([]);

  useEffect(() => {
    if (isDownloading) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setIsDownloading(false);
            setBinaryNumbers([]);
            return 100;
          }
          return prevProgress + 1;
        });

        if (binaryNumbers.length === 0) {
          setBinaryNumbers(generateBinaryNumbers());
        } else {
          setBinaryNumbers(prevNumbers => 
            prevNumbers.map(number => ({
              ...number,
              angle: (number.angle + number.speed) % (Math.PI * 2)
            }))
          );
        }
      }, []);

      return () => clearInterval(interval);
    }
  }, [isDownloading, binaryNumbers.length]);

  const generateBinaryNumbers = () => {
    return Array.from({ length: 50 }, () => ({
      value: Math.random() < 0.5 ? '0' : '1',
      angle: Math.random() * Math.PI * 2,
      initialDistance: Math.random() * 70 + 90,
      speed: (Math.random() * 0.05 + 0.02) * (Math.random() < 0.5 ? 1 : -1)
    }));
  };

  const handleClick = () => {
    setIsDownloading(true);
    setProgress(0);
    setBinaryNumbers(generateBinaryNumbers());
  };

  return (
    <div className="relative inline-block">
      <Button
        onClick={handleClick}
        disabled={isDownloading}
        className="relative z-10 bg-white  mt-4 hover:bg-gray-300 text-black font-bold px-6 py-3 text-lg"
      >
        {isDownloading ? `${progress}%` : 'Download'}
      </Button>
      {isDownloading && (
        <svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          width="400"
          height="400"
          viewBox="-200 -200 400 400"
        >
          {binaryNumbers.map((number, index) => {
            const currentDistance = number.initialDistance * (1 - progress / 100);
            return (
              <text
                key={index}
                x={Math.cos(number.angle) * currentDistance}
                y={Math.sin(number.angle) * currentDistance}
                fill="#22c55e"
                fontSize="14"
                fontFamily="monospace"
                textAnchor="middle"
                dominantBaseline="middle"
                opacity={1 - progress / 100}
              >
                {number.value}
              </text>
            );
          })}
        </svg>
      )}
    </div>
  );
};

export default BinaryDownloadButton;
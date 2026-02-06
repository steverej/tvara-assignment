import React from 'react';

interface BlurHeadingProps {
  title: string;
  className?: string;
}

const BlurHeading: React.FC<BlurHeadingProps> = ({ title, className = "" }) => {
  return (
    <h1 className={`
      cursor-default transition-all duration-800 ease-in-out
      blur-sm opacity-50 hover:blur-none hover:opacity-100
      text-8xl font-bold ${className}
    `}>
      {title}
    </h1>
  );
};

export default BlurHeading;
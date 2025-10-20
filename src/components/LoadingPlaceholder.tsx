import React from 'react';

interface LoadingPlaceholderProps {
  className?: string;
  height?: string;
  width?: string;
}

const LoadingPlaceholder: React.FC<LoadingPlaceholderProps> = ({ 
  className = '', 
  height = '200px',
  width = '100%' 
}) => {
  return (
    <div 
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ height, width }}
    />
  );
};

export default LoadingPlaceholder;
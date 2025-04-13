
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          // Call the completion callback once we reach 100%
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // Short delay after reaching 100%
          return 100;
        }
        
        return newProgress;
      });
    }, 300);

    // Safety timeout - ensure loading completes within 5 seconds
    const safetyTimeout = setTimeout(() => {
      clearInterval(interval);
      onLoadingComplete();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <div className="loading-content flex flex-col items-center">
        <div className="logo-container mb-6">
          <img 
            src="/lovable-uploads/81a85bb7-ad0c-48ce-ad75-b14159c954fb.png" 
            alt="TAKOSWAP Octopus Logo" 
            className="w-24 h-24 animate-pulse-opacity"
          />
        </div>
        
        <div className="loading-text text-center mb-6">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#FF8A00] to-[#FFA940] bg-clip-text text-transparent">
            TAKOSWAP
          </h1>
          <p className="text-gray-600 animate-pulse">Loading Genesis Portal...</p>
        </div>
        
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#FF8A00] to-[#FFA940] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

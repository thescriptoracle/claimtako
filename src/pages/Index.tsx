
import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import EligibilityChecker from '@/components/EligibilityChecker';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  // Set loading to true by default
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Add a class to body to indicate app is loaded
  useEffect(() => {
    if (!loading) {
      document.body.classList.add('app-loaded');
    }
  }, [loading]);

  return (
    <>
      <Toaster />
      {loading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
          <Navbar />
          
          <main className="flex-1 container py-12">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF8A00] to-[#FFA940] bg-clip-text text-transparent">
                Welcome to TAKO Genesis
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Check your eligibility for the TAKO airdrop and claim your tokens.
              </p>
            </div>
            
            <EligibilityChecker />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 text-center transition-transform hover:scale-105">
                <div className="h-12 w-12 bg-[#FF8A00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Step 1: Check Eligibility</h3>
                <p className="text-sm text-gray-600">Enter your wallet address to check if you're eligible for the TAKO airdrop.</p>
              </div>
              
              <div className="glass-card p-6 text-center transition-transform hover:scale-105">
                <div className="h-12 w-12 bg-[#FF8A00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Step 2: Claim Tokens</h3>
                <p className="text-sm text-gray-600">If eligible, claim your TAKO tokens directly to your wallet.</p>
              </div>
              
              <div className="glass-card p-6 text-center transition-transform hover:scale-105">
                <div className="h-12 w-12 bg-[#FF8A00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 5H19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Step 3: Swap & Pool</h3>
                <p className="text-sm text-gray-600">Use your TAKO tokens to swap or provide liquidity in the TAKO ecosystem.</p>
              </div>
            </div>
          </main>
          
          {/* Octopus image positioned at the bottom */}
          <div className="octopus-container">
            <img 
              src="/lovable-uploads/bf90440f-0da8-4e8a-879d-de194a810378.png" 
              alt="TAKOSWAP Octopus" 
              className="octopus-image animate-float"
            />
          </div>
          
          {/* Footer with overlay effect */}
          <footer className="border-t border-border/40 py-6 bg-secondary/80 backdrop-blur-md relative z-10">
            <div className="container text-center text-sm text-gray-500">
              <p>© 2025 TAKOSWAP. All rights reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Index;

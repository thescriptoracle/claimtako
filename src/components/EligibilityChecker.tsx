
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Search } from 'lucide-react';

const EligibilityChecker: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenAmount, setTokenAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!walletAddress) {
      toast.error('Please enter a wallet address');
      return;
    }
    
    // Validate address format (simple check, should be enhanced in production)
    if (!walletAddress.startsWith('0x') || walletAddress.length !== 42) {
      toast.error('Please enter a valid wallet address');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate checking eligibility - in a real app, this would be an API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEligible(true);
      setTokenAmount(12965);
      toast.success('Successfully checked eligibility');
    }, 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Card className="glass-card overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-tako-purple/5 to-tako-blue/5">
          <CardTitle className="text-xl text-center text-tako-dark">TAKO Genesis Portal</CardTitle>
          <CardDescription className="text-center">
            Check if you're eligible for TAKO token airdrop
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6">
          {isEligible === null ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="walletAddress" className="text-sm font-medium">
                  Enter your wallet address
                </label>
                <Input
                  id="walletAddress"
                  placeholder="0x..."
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Checking...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Search className="h-4 w-4 mr-2" />
                    Check Eligibility
                  </span>
                )}
              </Button>
            </form>
          ) : (
            <div className="py-4 text-center animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-1">
                Congratulations!
              </h3>
              
              <p className="text-gray-600 mb-4">
                You're eligible for the TAKO airdrop
              </p>
              
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-1">Your allocation:</p>
                <p className="text-3xl font-bold text-tako-purple">
                  {tokenAmount.toLocaleString()} TAKO
                </p>
              </div>
            </div>
          )}
        </CardContent>
        
        {isEligible && (
          <CardFooter className="bg-gradient-to-r from-tako-purple/5 to-tako-blue/5 p-4">
            <Button className="w-full" variant="outline">
              Claim Your TAKO
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default EligibilityChecker;


import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FF8A00] to-[#FFA940] flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="font-bold text-xl text-[#FF8A00]">TAKOSWAP</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#claim" className="text-sm font-medium transition-colors hover:text-[#FF8A00]">
            Claim
          </a>
          <a href="#swap" className="text-sm font-medium transition-colors hover:text-[#FF8A00]">
            Swap
          </a>
          <a href="#pool" className="text-sm font-medium transition-colors hover:text-[#FF8A00]">
            Pool
          </a>
          <Button className="bg-[#FF8A00] hover:bg-[#FF8A00]/90">Connect Wallet</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 flex flex-col bg-background p-6 md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-4">
          <a 
            href="#claim" 
            className="flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-secondary hover:text-[#FF8A00]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Claim
          </a>
          <a 
            href="#swap" 
            className="flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-secondary hover:text-[#FF8A00]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Swap
          </a>
          <a 
            href="#pool" 
            className="flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-secondary hover:text-[#FF8A00]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pool
          </a>
          <Button className="mt-4 bg-[#FF8A00] hover:bg-[#FF8A00]/90">Connect Wallet</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

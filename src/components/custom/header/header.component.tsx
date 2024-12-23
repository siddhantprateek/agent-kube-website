import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LOGO from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Features', action: () => scrollToSection('features-section') },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Resources', href: '#' },
    { label: 'Pricing', href: '#' },
  ];

  return (
    <header className="relative">
      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6">
        <a href="/" className="flex items-center space-x-2 sm:space-x-4">
          <img src={LOGO} className="h-8 sm:h-12 -mr-3 sm:-mr-5" alt="AgentKube Logo" />
          <span className="text-lg sm:text-xl font-bold">AgentKube</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action || (() => item.href && window.location.assign(item.href))}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://account.agentkube.com" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sign in
          </a>
          <Button>Get demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute rounded-[0.5rem] top-full left-0 right-0 bg-gray-50 shadow-lg md:hidden z-50">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action || (() => item.href && window.location.assign(item.href))}
                className="text-gray-600 hover:text-gray-900 transition-colors py-2 text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-gray-200 pt-4 flex flex-col space-y-4">
              <a 
                href="https://account.agentkube.com"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Sign in
              </a>
              <Button className="w-full">Get demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
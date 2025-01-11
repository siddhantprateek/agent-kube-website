import { useState } from 'react';
import { Menu, X, Users, Book, ChevronDown, BookOpen, Calendar, BarChart, Map, Newspaper, Briefcase, Mail, MessageCircle } from 'lucide-react';
import React from 'react';

const lucideIcons = {
  Users,
  BookOpen,
  Calendar,
  BarChart,
  Map,
  Newspaper,
  Briefcase,
  Mail,
  MessageCircle,
  Book
} as const;

import LOGO from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href?: string;
  action?: () => void;
  items?: SubItem[];
  isDropdown?: boolean;
}

interface SubItem {
  label: string;
  description?: string;
  href: string;
  icon?: keyof typeof lucideIcons;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const resourceItems: SubItem[] = [
    // { 
    //   label: 'Customer Stories',
    //   description: 'See how Agentkube users cut their Kubernetes bills in half.',
    //   href: '/stories',
    //   icon: 'Users'
    // },
    { 
      label: 'Documention',
      description: 'Comprehensive guides and setup instructions for using Agentkube.',
      href: 'https://docs.agentkube.com/',
      icon: 'Book'
    },
    { 
      label: 'Blogs',
      description: 'Guides, tutorials, and tips on Kubernetes cost and security management.',
      href: '/blogs',
      icon: 'BookOpen'
    }
  ];

  const aboutItems: SubItem[] = [
    { 
      label: 'About Us',
      description: 'Learn about the team behind Agentkube.',
      href: '/about',
      icon: 'Users'
    },
    { 
      label: 'Contact Us',
      description: 'Were here to help with any questions you may have',
      href: '/contact',
      icon: 'Mail'
    },
    { 
      label: 'Discord Community',
      description: 'Join our community Discord and remain in the know.',
      href: '/discord',
      icon: 'MessageCircle'
    }
  ];

  const navItems: NavItem[] = [
    { label: 'Features', action: () => scrollToSection('features-section') },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Resources', items: resourceItems, isDropdown: true },
    { label: 'About', items: aboutItems, isDropdown: true },
    { label: 'Pricing', href: '/pricing' }
  ];

  return (
    <header className="relative">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6">
        <a href="/" className="flex items-center space-x-2 sm:space-x-4">
          <img src={LOGO} className="h-8 sm:h-12 -mr-3 sm:-mr-5" alt="Logo" />
          <span className="text-lg sm:text-xl font-bold">Agentkube</span>
        </a>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.isDropdown ? (
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                </button>
              ) : (
                <button
                  onClick={item.action || (() => item.href && window.location.assign(item.href))}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </button>
              )}

              {item.isDropdown && (
                <div className={`absolute top-full left-0 mt-2 w-80 bg-gray-200 rounded-xl shadow-lg py-4 z-50 ${openDropdown === item.label ? 'block' : 'hidden'}`}>
                  <div className="px-3">
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="flex items-start space-x-3 p-3 border-2 hover:border-gray-300 hover:bg-gray-300/60 rounded-xl group"
                      >
                        {subItem.icon && (
                          React.createElement(lucideIcons[subItem.icon], { 
                            className: "w-5 h-5 text-gray-600" 
                          })
                        )}
                        <div>
                          <div className="font-medium text-gray-900">
                            {subItem.label}
                          </div>
                          {subItem.description && (
                            <p className="text-sm text-gray-500 mt-0.5">
                              {subItem.description}
                            </p>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://account.agentkube.com" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sign in
          </a>
          <a href="https://docs.agentkube.com">
            <Button>Get demo</Button>
          </a>
        </div>

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

      {isMobileMenuOpen && (
        <div className="absolute rounded-lg top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 mt-2 mx-4">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.isDropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full px-4 py-2 text-gray-900 hover:bg-gray-50"
                    >
                      <span>{item.label}</span>
                    </button>
                    {openDropdown === item.label && (
                      <div className="px-4 py-2 space-y-2">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block p-2 hover:bg-gray-50 rounded-md"
                            onClick={() => {
                              setOpenDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <div className="flex items-start space-x-3">
                              {subItem.icon && (
                                React.createElement(lucideIcons[subItem.icon], { 
                                  className: "w-5 h-5 text-gray-600" 
                                })
                              )}
                              <div>
                                <div className="font-medium text-gray-900">
                                  {subItem.label}
                                </div>
                                {subItem.description && (
                                  <p className="text-sm text-gray-500 mt-0.5">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={item.action || (() => item.href && window.location.assign(item.href))}
                    className="block w-full px-4 py-2 text-left text-gray-900 hover:bg-gray-50"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2 px-4">
              <a 
                href="/signin"
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                Sign in
              </a>
              <Button className="w-full mt-2">Get demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
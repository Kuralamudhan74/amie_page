import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../utils';
import amieLogo from '../assets/Amie Logo - Colour.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAVIGATION_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Science', href: '#science' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Products', href: '#product-overview' },
    { name: 'Waitlist', href: '#waitlist' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary-500/95 backdrop-blur-sm border-b border-secondary-400"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-gradient">
                <img 
                  src={amieLogo} 
                  alt="AMIE Logo" 
                  className="h-14 lg:h-30 object-contain inline-block" 
                />
              </h1>
              <p className="text-sm text-primary-600 -mt-1">
                Your day, Secured
              </p>
          </div>

          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-primary-700 hover:text-primary-500 transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-primary-700 hover:text-primary-500"
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-secondary-500/95 backdrop-blur-sm border-t border-secondary-400"
          >
            <nav className="container py-4">
              <div className="flex flex-col space-y-4">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-primary-700 hover:text-primary-500 transition-colors duration-300 font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

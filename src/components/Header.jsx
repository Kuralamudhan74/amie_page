import { motion } from 'framer-motion';
import { cn } from '../utils';
import amieLogo from '../assets/Amie Logo - Colour.png';

const Header = () => {
  const NAVIGATION_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Science', href: '#science' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Products', href: '#product-overview' },
    { name: 'Waitlist', href: '#waitlist' },
  ];

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
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

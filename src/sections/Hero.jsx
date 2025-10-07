import { motion } from 'framer-motion';
import { Droplets, Leaf, Shield } from 'lucide-react';
import { useParallax } from '../hooks/useAnimations';
// import water_sheild from '../assets/shield.png';

const Hero = () => {
  const parallaxOffset = useParallax(0.3);
  
  const features = [
    { icon: Droplets, text: 'High Absorbency', color: 'text-blue-400' },
    { icon: Shield, text: 'Leakproof', color: 'text-blue-600' },
    { icon: Leaf, text: 'Sustainable', color: 'text-green-400' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-secondary-500 via-secondary-400 to-accent-purple pt-16 lg:pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* <div className="space-y-4">
              <motion.h1 
                className="text-6xl lg:text-8xl font-bold text-gradient"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                AMIE
              </motion.h1>
              <motion.p 
                className="text-xl text-secondary-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Your day Secured
              </motion.p>
            </div> */}

            <motion.h2 
              className="text-3xl lg:text-5xl font-bold text-primary-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Revolutionizing Leak and Period Care with Next Gen Absorption Technology
            </motion.h2>

            <motion.p 
              className="text-lg text-primary-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              One technology. Infinite possibilities.<br /> Designed to support you confidently, 
              sustainably, and with dignity at every stage of life.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.button
                className="btn-primary text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.button>
            </motion.div>

            <motion.p 
              className="text-sm text-primary-600 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Building next-gen absorbency solutions
            </motion.p>
          </motion.div>

          {/* Right Column - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="flex justify-center lg:justify-end"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <motion.div 
              className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-primary-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              {/* Coming Soon Badge */}
              <motion.div 
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500 text-secondary-500 text-sm font-medium mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
              >
                Coming Soon
              </motion.div>

              {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.text}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.2, duration: 0.5 }}
                >
                  <motion.div
                    className={`p-2 rounded-lg bg-primary-700 ${feature.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {feature.icon.name === 'Shield' ? (
                      <feature.icon className="w-6 h-6 text-blue-500" strokeWidth={2.5} />
                    ) : (
                      <feature.icon className="w-6 h-6" />
                    )}
                  </motion.div>
                  <span className="text-secondary-500 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

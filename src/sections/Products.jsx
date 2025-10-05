import { motion } from 'framer-motion';
import { Baby, Shirt, Heart } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Baby,
      title: 'Baby diapers',
      description: 'Gentle, reusable protection for your little one\'s delicate skin',
      color: 'text-yellow-400'
    },
    {
      icon: Shirt,
      title: 'Adult incontinence wearables',
      description: 'Discreet, comfortable solutions for active adult lifestyles',
      color: 'text-blue-400'
    },
    {
      icon: Heart,
      title: 'Teen and women period panties',
      description: 'Stylish, leak-proof underwear for confident period management',
      color: 'text-pink-400'
    }
  ];

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-secondary-500 via-secondary-400 to-accent-purple">
      {/* Top Benefits Cards */}
      <div className="container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-700">
            <h3 className="text-lg font-bold text-secondary-500 mb-2">Everyday comfort</h3>
            <p className="text-secondary-400 text-sm">sleek, discreet, and made for real life</p>
          </div>
          <div className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-700">
            <h3 className="text-lg font-bold text-secondary-500 mb-2">Future-focused</h3>
            <p className="text-secondary-400 text-sm">protecting people and the planet</p>
          </div>
          <div className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-700">
            <h3 className="text-lg font-bold text-secondary-500 mb-2">One solution for every flow</h3>
            <p className="text-secondary-400 text-sm">adaptable protection for all needs</p>
          </div>
        </motion.div>
      </div>

      {/* Product Overview Section - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full bg-gradient-to-br from-accent-purple to-primary-800 py-16 lg:py-24"
      >
        <div className="container">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-800/50 backdrop-blur-sm text-secondary-500 text-sm font-medium border border-primary-700">
              Coming Soon
            </span>
          </motion.div>

          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-secondary-500 text-center mb-8"
          >
            Product Overview
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-secondary-400 text-center mb-12 max-w-3xl mx-auto"
          >
            We're working on something transformative. Get ready for the next generation of 
            leakproof, sustainable comfort.
          </motion.p>

          {/* Product Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-8 text-center card-hover border border-primary-700"
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-primary-700/50 backdrop-blur-sm mb-6 ${product.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ y: -5 }}
                  transition={{ 
                    type: 'easeInOut', 
                    duration: 1 + index * 0.15, 
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  <product.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-secondary-500 mb-4">
                  {product.title}
                </h3>
                
                <p className="text-secondary-400 leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Products;

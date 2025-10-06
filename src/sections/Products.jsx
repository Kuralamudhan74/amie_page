import { motion } from 'framer-motion';
import { Baby, Shirt, Heart, Users, Leaf, Zap, Award, TrendingUp, Clock, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Baby,
      title: 'Baby diapers',
      description: 'Gentle, reusable protection for your little one\'s delicate skin',
      color: 'text-primary-600'
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

  const stats = [
    { icon: Users, number: '10K+', label: 'Early Adopters', color: 'text-primary-600' },
    { icon: Leaf, number: '95%', label: 'Waste Reduction', color: 'text-green-500' },
    { icon: Zap, number: '3x', label: 'Faster Absorption', color: 'text-primary-500' },
    { icon: Award, number: '24/7', label: 'Comfort Guarantee', color: 'text-primary-700' }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Mother of 2',
      content: 'Finally, a diaper that doesn\'t leak and actually cares for my baby\'s skin!',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      role: 'Active Professional',
      content: 'AMIE gives me confidence to live my life without worry. Game changer!',
      rating: 5
    },
    {
      name: 'Maria R.',
      role: 'Teen Advocate',
      content: 'Stylish, comfortable, and sustainable. Everything I wanted in period care.',
      rating: 5
    }
  ];

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-secondary-500 via-secondary-400 to-accent-purple">
      {/* Top Benefits Cards */}
   
      {/* Interactive Statistics Section
      <div className="container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            See why people are choosing AMIE for their protection needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <motion.div
                className={`inline-flex p-3 rounded-full bg-secondary-100 mb-4 ${stat.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-primary-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <p className="text-primary-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Testimonials 
      <div className="container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Real stories from real people who've experienced the AMIE difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-secondary-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-highlight-yellow text-lg"
                  >
                    ★
                  </motion.div>
                ))}
              </div>
              <p className="text-primary-700 italic mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-secondary-300 pt-4">
                <p className="font-semibold text-primary-900">{testimonial.name}</p>
                <p className="text-sm text-primary-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Technology Showcase */}
      <div className="container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500/5 to-accent-purple/5 rounded-3xl p-8 lg:p-12 border border-primary-500/20"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex p-4 rounded-full bg-primary-500/20 mb-6"
            >
              <Zap className="w-8 h-8 text-primary-600" />
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Next-Gen Technology
            </h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto">
              Our proprietary absorption technology delivers superior performance while being gentle on skin and the environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/80 rounded-2xl p-6 border border-secondary-300">
                <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-2">Instant Absorption</h3>
                {/* <p className="text-primary-700">Advanced micro-fiber technology absorbs 3x faster than traditional materials</p> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/80 rounded-2xl p-6 border border-secondary-300">
                <Shield className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-2">Leakproof Design</h3>
                {/* <p className="text-primary-700">Multi-layer protection system ensures confidence in any situation</p> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/80 rounded-2xl p-6 border border-secondary-300">
                <TrendingUp className="w-12 h-12 text-primary-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-2">Sustainable Future</h3>
                {/* <p className="text-primary-700">Biodegradable materials that break down naturally without harming the environment</p> */}
              </div>
            </motion.div>
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

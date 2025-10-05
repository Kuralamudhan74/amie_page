import { motion } from 'framer-motion';
import { Droplets, Leaf, Shield, Cloud, Sparkles, Waves } from 'lucide-react';

const Benefits = () => {
  const features = [
    {
      icon: Droplets,
      title: 'High absorbency',
      description: 'superior protection you can rely on',
      color: 'text-blue-400'
    },
    {
      icon: Leaf,
      title: 'Sustainable by design',
      description: 'reusable solutions that reduce waste',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      title: 'Leakproof innovation',
      description: 'advanced absorbency you can trust',
      color: 'text-red-400'
    },
    {
      icon: Cloud,
      title: 'Everyday comfort',
      description: 'sleek, discreet, and made for real life',
      color: 'text-gray-300'
    },
    {
      icon: Sparkles,
      title: 'Future-focused',
      description: 'protecting people and the planet',
      color: 'text-purple-400'
    },
    {
      icon: Waves,
      title: 'One solution for every flow',
      description: 'adaptable protection for all needs',
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-primary-500">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-secondary-500 mb-8">
            Why Choose AMIE?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-800 rounded-2xl p-8 text-center card-hover"
            >
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-primary-700 mb-6 ${feature.color}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ y: -5 }}
                transition={{ 
                  type: 'easeInOut', 
                  duration: 1 + index * 0.1, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-secondary-500 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-secondary-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import { motion } from 'framer-motion';
import { Leaf, Lightbulb, Heart, Shield } from 'lucide-react';
import { VALUES } from '../../data/products';

const ValuesSection = () => {
  const icons = {
    Leaf: Leaf,
    Lightbulb: Lightbulb,
    Heart: Heart,
    Shield: Shield
  };

  const colors = [
    'text-green-500',
    'text-highlight-yellow',
    'text-highlight-pink',
    'text-blue-500'
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-500 via-secondary-400 to-accent-purple">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            The principles that guide everything we do at AMIE
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, index) => {
            const IconComponent = icons[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-300 hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-secondary-100 mb-6 ${colors[index]}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </motion.div>

                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {value.title}
                </h3>

                <p className="text-primary-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

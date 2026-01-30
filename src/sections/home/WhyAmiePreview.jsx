import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplets, Shield, Leaf, Feather, ArrowRight } from 'lucide-react';

const WhyAmiePreview = () => {
  const features = [
    {
      icon: Droplets,
      title: 'Superior Absorption',
      description: '4x faster absorption technology',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Leakproof Protection',
      description: 'Multi-layer barrier system',
      color: 'text-blue-600'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable & reusable',
      color: 'text-green-500'
    },
    {
      icon: Feather,
      title: 'All-Day Comfort',
      description: 'Soft, breathable fabrics',
      color: 'text-gray-400'
    }
  ];

  return (
    <section className="section-padding bg-secondary-500">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-6">
              Why Choose AMIE?
            </h2>
            <p className="text-lg text-primary-700 mb-8 leading-relaxed">
              At AMIE, we believe life's little leaks shouldn't get in the way of living fully.
              Our next-gen absorption technology delivers superior performance while being
              gentle on your skin and the planet.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className={`p-2 rounded-lg bg-primary-500/10 ${feature.color}`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">{feature.title}</h3>
                    <p className="text-sm text-primary-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/why-amie">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-purple text-white font-semibold transition-all duration-300 hover:from-accent-purple hover:to-primary-600"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-purple/10 rounded-3xl p-8 lg:p-12">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '4x', label: 'Faster Absorption' },
                  { number: '200+', label: 'Happy Users' },
                  { number: '3 Yrs', label: 'R&D' },
                  { number: '5+', label: 'Pilot Rounds' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-primary-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-primary-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAmiePreview;

import { motion } from 'framer-motion';
import { Droplets, Shield, Zap, Wind, Layers, CheckCircle } from 'lucide-react';

const TechnologySection = () => {
  const layers = [
    {
      name: 'Top Layer',
      description: 'Soft, moisture-wicking fabric that keeps you dry and comfortable',
      icon: Wind,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Absorption Layer',
      description: 'High-capacity absorbent core that locks in moisture instantly',
      icon: Droplets,
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      name: 'Leak Barrier',
      description: 'Waterproof PUL layer that prevents leaks in all directions',
      icon: Shield,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Outer Layer',
      description: 'Breathable, skin-friendly fabric for all-day comfort',
      icon: Layers,
      color: 'bg-green-100 text-green-600'
    }
  ];

  const techFeatures = [
    { title: '4x Faster Absorption', description: 'Advanced micro-fiber technology' },
    { title: 'Odor Neutralizing', description: 'Anti-bacterial properties' },
    { title: 'Breathable Design', description: 'Prevents heat and moisture buildup' },
    { title: 'Hypoallergenic', description: 'Safe for sensitive skin' }
  ];

  return (
    <section className="section-padding bg-secondary-500">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 text-sm font-medium border border-primary-500/20 mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Our Technology
          </motion.span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            Next-Gen Leak Protection
          </h2>
          <p className="text-lg text-primary-700 max-w-3xl mx-auto">
            Our proprietary 4-layer technology delivers superior absorption and leak protection,
            while remaining soft, breathable, and gentle on your skin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Layer Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-secondary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${layer.color}`}>
                      <layer.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-primary-500">Layer {index + 1}</span>
                        <span className="text-primary-300">•</span>
                        <span className="font-bold text-primary-900">{layer.name}</span>
                      </div>
                      <p className="text-primary-700 text-sm">{layer.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-500 to-accent-purple rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-secondary-500 mb-6">
                Why Our Technology Works
              </h3>
              <div className="space-y-4">
                {techFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-secondary-500">{feature.title}</span>
                      <span className="text-secondary-400 ml-2">— {feature.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-primary-400">
                <p className="text-secondary-400 text-sm">
                  All AMIE products are rigorously tested to ensure safety, comfort, and performance.
                  We use only skin-safe, certified materials.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

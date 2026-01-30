import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="section-padding bg-secondary-500">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-500 to-accent-purple rounded-3xl p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-white/20">
                <Target className="w-8 h-8 text-secondary-500" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-500">Our Mission</h3>
            </div>
            <p className="text-secondary-400 text-lg leading-relaxed">
              To revolutionize leak protection by creating innovative, sustainable products
              that empower people at every stage of life to live confidently, comfortably,
              and with dignity—while making a positive impact on the planet.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-secondary-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary-500/10">
                <Eye className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">Our Vision</h3>
            </div>
            <p className="text-primary-700 text-lg leading-relaxed">
              A world where leak protection is no longer a compromise—where superior
              performance meets sustainability, and where everyone can access
              comfortable, eco-friendly solutions that respect both people and the planet.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

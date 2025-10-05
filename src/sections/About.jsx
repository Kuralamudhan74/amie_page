import { motion } from 'framer-motion';
import { AlertTriangle, FlaskConical } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary-900">
      <div className="container">
        {/* About AMIE Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            About AMIE
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-secondary-300 leading-relaxed">
            <p>
              At AMIE, we believe life's little leaks shouldn't get in the way of living fully. 
              From infancy to adulthood, leaks happen—but they don't have to limit your confidence, 
              comfort, or environmental impact.
            </p>
            <p>
              We're revolutionizing absorbency technology to create sustainable, leak-proof solutions 
              that work as hard as you do. Our innovative materials and designs ensure maximum 
              protection with minimal environmental footprint.
            </p>
          </div>
        </motion.div>

        {/* The Science Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-purple to-secondary-800 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-3xl lg:text-5xl font-bold text-white text-center mb-12">
            The Science of Comfort & Confidence
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary-800 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-yellow-500/20 mr-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-2xl font-bold text-white">The Problem</h4>
              </div>
              <p className="text-secondary-300 leading-relaxed">
                Traditional disposable products create massive environmental waste, taking 
                centuries to decompose. Beyond environmental impact, traditional products often 
                cause discomfort, skin irritation, and limited mobility. Many people face 
                accessibility challenges and high ongoing costs.
              </p>
            </motion.div>

            {/* Our Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary-800 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary-500/20 mr-4">
                  <FlaskConical className="w-8 h-8 text-primary-400" />
                </div>
                <h4 className="text-2xl font-bold text-white">Our Solution</h4>
              </div>
              <p className="text-secondary-300 leading-relaxed">
                AMIE combines cutting-edge science with sustainable design, delivering superior 
                performance with sustainability, offering re-usable solutions that protect your 
                health, dignity, and environment —today and for generations to come.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

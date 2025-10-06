import { motion } from 'framer-motion';
import { AlertTriangle, FlaskConical } from 'lucide-react';
import { CheckCircle, XCircle , Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-about">
      <div className="container">
        {/* About AMIE Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-8">
            About AMIE
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-primary-700 leading-relaxed">
            <p>
              At AMIE, we believe life's little <q><b><i>leaks</i></b></q> shouldn't get in the way of living fully. 
              From infancy to adulthood, <q><b><i>leaks</i></b></q> are a universal part of the human journey—yet managing 
              them doesn't need to come at the cost of comfort, confidence, or the planet.
            </p>
            <p>
              That's why we're building next-gen absorbency solutions that are smarter, safer, and 
              kinder to the world around us. With AMIE, you can live each day with confidence—knowing 
              you're supported at every stage of life.
            </p>
          </div>
        </motion.div>

        {/* The Science Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-secondary-500/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-secondary-400"
        >
          <h3 className="text-3xl lg:text-5xl font-bold text-primary-900 text-center mb-12">
            The Science of Comfort & Confidence
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary-400/80 backdrop-blur-sm rounded-3xl p-8 border border-secondary-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-accent-red/20 mr-4">
                  <XCircle  className="w-8 h-8 text-accent-red" />
                </div>
              </div>
              <p className="text-primary-700 leading-relaxed">
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
              className="bg-secondary-400/80 backdrop-blur-sm rounded-3xl p-8 border border-secondary-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary-500/20 mr-4">
                  <Lightbulb className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <p className="text-primary-700 leading-relaxed">
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

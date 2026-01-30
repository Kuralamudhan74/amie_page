import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="section-padding bg-secondary-500">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
              Our Story
            </h2>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-secondary-300"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-primary-700 text-lg leading-relaxed mb-6">
                At AMIE, we believe life's little <em>"leaks"</em> shouldn't get in the way of living fully.
                From infancy to adulthood, leaks are a universal part of the human journey—yet managing
                them doesn't need to come at the cost of comfort, confidence, or the planet.
              </p>

              <p className="text-primary-700 text-lg leading-relaxed mb-6">
                Our journey began with a simple question: <strong>Why do we have to choose between
                effective protection and environmental responsibility?</strong> Traditional disposable
                products create massive environmental waste, taking centuries to decompose, while often
                causing discomfort, skin irritation, and limited mobility.
              </p>

              <p className="text-primary-700 text-lg leading-relaxed mb-6">
                After <strong>3 years of intensive research and development</strong>, and with feedback from
                over <strong>200 early adopters</strong> through <strong>5+ rounds of piloting</strong>, we've created
                something truly different—next-gen absorbency solutions that are smarter, safer, and
                kinder to the world around us.
              </p>

              <p className="text-primary-700 text-lg leading-relaxed">
                AMIE combines cutting-edge science with sustainable design, delivering superior
                performance with sustainability. Our reusable solutions protect your health,
                dignity, and environment—today and for generations to come. With AMIE, you can
                live each day with confidence, knowing you're supported at every stage of life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/products';

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary-500">
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
            What Our Community Says
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Real stories from real people who've experienced the AMIE difference
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-secondary-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
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

              {/* Content */}
              <p className="text-primary-700 italic mb-4 leading-relaxed line-clamp-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-secondary-300 pt-4">
                <p className="font-semibold text-primary-900">{testimonial.name}</p>
                <p className="text-sm text-primary-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

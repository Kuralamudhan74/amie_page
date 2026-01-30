import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = ({
  title,
  subtitle,
  buttonText = 'Shop Now',
  buttonLink = '/products',
  theme = 'dark' // dark or light
}) => {
  const bgClass = theme === 'dark'
    ? 'bg-gradient-to-r from-primary-500 to-accent-purple'
    : 'bg-secondary-500';
  const textColor = theme === 'dark' ? 'text-secondary-500' : 'text-primary-900';
  const subtitleColor = theme === 'dark' ? 'text-secondary-400' : 'text-primary-700';
  const buttonClass = theme === 'dark'
    ? 'bg-secondary-500 text-primary-900 hover:bg-secondary-400'
    : 'bg-gradient-to-r from-primary-500 to-accent-purple text-white hover:from-accent-purple hover:to-primary-600';

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className={`text-3xl lg:text-5xl font-bold ${textColor} mb-6`}>
            {title}
          </h2>

          {subtitle && (
            <p className={`text-lg ${subtitleColor} mb-8`}>
              {subtitle}
            </p>
          )}

          <Link to={buttonLink}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${buttonClass}`}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

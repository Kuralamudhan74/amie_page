import { motion } from 'framer-motion';

const PageHero = ({
  title,
  subtitle,
  badge,
  backgroundClass = "bg-gradient-to-br from-secondary-500 via-secondary-400 to-accent-purple",
  theme = "light" // light or dark
}) => {
  const textColor = theme === 'dark' ? 'text-secondary-500' : 'text-primary-900';
  const subtitleColor = theme === 'dark' ? 'text-secondary-400' : 'text-primary-700';
  const badgeClass = theme === 'dark'
    ? 'bg-primary-800/50 text-secondary-500 border-primary-700'
    : 'bg-primary-500/10 text-primary-600 border-primary-500/20';

  return (
    <section className={`pt-24 lg:pt-32 pb-16 lg:pb-20 ${backgroundClass}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {badge && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border mb-6 ${badgeClass}`}
            >
              {badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl lg:text-6xl font-bold ${textColor} mb-6`}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-lg lg:text-xl ${subtitleColor} max-w-3xl mx-auto leading-relaxed`}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;

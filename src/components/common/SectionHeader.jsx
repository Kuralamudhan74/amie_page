import { motion } from 'framer-motion';

const SectionHeader = ({
  title,
  subtitle,
  badge,
  align = 'center', // center or left
  theme = 'light' // light or dark
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const textColor = theme === 'dark' ? 'text-secondary-500' : 'text-primary-900';
  const subtitleColor = theme === 'dark' ? 'text-secondary-400' : 'text-primary-700';
  const badgeClass = theme === 'dark'
    ? 'bg-primary-800/50 text-secondary-500 border-primary-700'
    : 'bg-primary-500/10 text-primary-600 border-primary-500/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignClass}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border mb-6 ${badgeClass}`}
        >
          {badge}
        </motion.span>
      )}

      <h2 className={`text-3xl lg:text-5xl font-bold ${textColor} mb-4`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-lg ${subtitleColor} ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;

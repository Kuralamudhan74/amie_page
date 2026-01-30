import { motion } from 'framer-motion';

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white shadow-lg'
              : 'bg-white/80 text-primary-700 border border-secondary-300 hover:border-primary-500 hover:bg-primary-50'
          }`}
        >
          {category.name}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;

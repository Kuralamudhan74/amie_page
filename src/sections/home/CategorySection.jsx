import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Baby, Shield } from 'lucide-react';
import { CATEGORIES } from '../../data/products';

const CategorySection = () => {
  const icons = {
    Heart: Heart,
    Baby: Baby,
    Shield: Shield
  };

  // Filter out 'all' category
  const displayCategories = CATEGORIES.filter(cat => cat.id !== 'all');

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
            Shop by Category
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Discover our range of sustainable, leak-proof solutions for every stage of life
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayCategories.map((category, index) => {
            const IconComponent = icons[category.icon];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/products?category=${category.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-secondary-300 hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary-100 to-secondary-200 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {IconComponent && (
                          <div className="p-2 rounded-lg bg-primary-500/10">
                            <IconComponent className="w-5 h-5 text-primary-600" />
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-primary-900">
                          {category.name}
                        </h3>
                      </div>
                      <p className="text-primary-700 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-500 transition-colors">
                        Shop Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

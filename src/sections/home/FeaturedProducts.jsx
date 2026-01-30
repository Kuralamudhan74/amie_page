import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../../components/common/ProductCard';
import { PRODUCTS } from '../../data/products';

const FeaturedProducts = () => {
  // Get featured products (one from each category that is new)
  const featuredProducts = [
    PRODUCTS.find(p => p.category === 'period' && p.isNew),
    PRODUCTS.find(p => p.category === 'baby' && p.isNew),
    PRODUCTS.find(p => p.category === 'incontinence' && p.isNew)
  ].filter(Boolean);

  // If not enough new products, fill with first product of each category
  if (featuredProducts.length < 3) {
    const categories = ['period', 'baby', 'incontinence'];
    categories.forEach(cat => {
      if (!featuredProducts.find(p => p.category === cat)) {
        const product = PRODUCTS.find(p => p.category === cat);
        if (product) featuredProducts.push(product);
      }
    });
  }

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-500 via-secondary-400 to-accent-purple">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 text-sm font-medium border border-primary-500/20 mb-6"
          >
            Featured Collection
          </motion.span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            Our Best Sellers
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Discover our most loved products, designed for comfort, protection, and sustainability
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.slice(0, 3).map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary-500 to-accent-purple text-white font-semibold text-lg transition-all duration-300 hover:from-accent-purple hover:to-primary-600 hover:shadow-lg"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

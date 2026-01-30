import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import CategoryFilter from '../components/common/CategoryFilter';
import ProductCard from '../components/common/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');

  // Get category from URL on mount
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && CATEGORIES.some(cat => cat.id === categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return PRODUCTS;
    }
    return PRODUCTS.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  // Handle product view (placeholder for now)
  const handleViewDetails = (product) => {
    // For now, just show an alert - later this will navigate to product detail page
    alert(`Product: ${product.name}\nCategory: ${product.category}\nPrice: Rs. ${product.price}\n\nFull product details page coming soon!`);
  };

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Discover our complete range of sustainable, leak-proof solutions designed for every stage of life. Quality, comfort, and sustainability in every product."
        badge="Shop Collection"
      />

      <section className="section-padding bg-secondary-500">
        <div className="container">
          {/* Category Filter */}
          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <p className="text-primary-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span> products
              {activeCategory !== 'all' && (
                <span> in <span className="font-semibold capitalize">
                  {CATEGORIES.find(cat => cat.id === activeCategory)?.name}
                </span></span>
              )}
            </p>
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-xl text-primary-600 mb-4">
                No products found in this category.
              </p>
              <button
                onClick={() => handleCategoryChange('all')}
                className="text-primary-500 font-semibold hover:underline"
              >
                View all products
              </button>
            </motion.div>
          )}

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-purple/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                Can't find what you're looking for?
              </h3>
              <p className="text-primary-700 mb-4">
                More products are coming soon! Join our waitlist to be notified when new products launch.
              </p>
              <a href="/#waitlist">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-purple text-white font-semibold transition-all duration-300 hover:from-accent-purple hover:to-primary-600"
                >
                  Join Waitlist
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;

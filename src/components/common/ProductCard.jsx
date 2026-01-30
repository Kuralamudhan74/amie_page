import { motion } from 'framer-motion';
import { Droplet } from 'lucide-react';

const ProductCard = ({
  product,
  index = 0,
  onViewDetails
}) => {
  const { name, category, description, price, absorbency, image, isNew, isComingSoon } = product;

  // Absorbency level labels
  const absorbencyLabels = ['Light', 'Moderate', 'Heavy', 'Super Heavy'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-secondary-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="px-3 py-1 rounded-full bg-highlight-pink text-white text-xs font-semibold">
              New
            </span>
          )}
          {isComingSoon && (
            <span className="px-3 py-1 rounded-full bg-primary-500 text-secondary-500 text-xs font-semibold">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span className="text-sm text-primary-600 font-medium capitalize">
          {category === 'incontinence' ? 'Adult Incontinence' : category === 'period' ? 'Period Underwear' : 'Baby Diapers'}
        </span>

        {/* Name */}
        <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">
          {name}
        </h3>

        {/* Description */}
        <p className="text-primary-700 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Absorbency Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-primary-600">Absorbency:</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((level) => (
              <Droplet
                key={level}
                className={`w-4 h-4 ${level <= absorbency ? 'text-blue-500 fill-blue-500' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-primary-600">
            ({absorbencyLabels[absorbency - 1]})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xs text-primary-600">Starting from</span>
          <span className="text-2xl font-bold text-primary-900">
            Rs. {price.toLocaleString('en-IN')}
          </span>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onViewDetails?.(product)}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-purple text-white font-semibold transition-all duration-300 hover:from-accent-purple hover:to-primary-600"
        >
          {isComingSoon ? 'Notify Me' : 'View Details'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;

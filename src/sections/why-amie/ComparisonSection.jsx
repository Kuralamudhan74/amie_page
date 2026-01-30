import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const ComparisonSection = () => {
  const features = [
    { name: 'Reusable', amie: true, disposable: false },
    { name: 'Eco-Friendly', amie: true, disposable: false },
    { name: 'Cost-Effective (Long-term)', amie: true, disposable: false },
    { name: 'Leak Protection', amie: true, disposable: 'partial' },
    { name: 'Breathable Fabric', amie: true, disposable: 'partial' },
    { name: 'No Chemicals/Fragrances', amie: true, disposable: false },
    { name: 'Comfortable All-Day Wear', amie: true, disposable: false },
    { name: 'Reduces Landfill Waste', amie: true, disposable: false },
    { name: 'Skin-Friendly', amie: true, disposable: 'partial' },
    { name: 'Easy to Use', amie: true, disposable: true }
  ];

  const renderIcon = (value) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-red-500" />;
    } else {
      return <Minus className="w-5 h-5 text-yellow-500" />;
    }
  };

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
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            AMIE vs Disposables
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            See why AMIE reusable products are the smarter choice for you and the planet
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-secondary-300 shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-3 bg-primary-500 text-secondary-500">
              <div className="p-4 lg:p-6 font-semibold">Feature</div>
              <div className="p-4 lg:p-6 font-semibold text-center border-l border-primary-400">
                AMIE
              </div>
              <div className="p-4 lg:p-6 font-semibold text-center border-l border-primary-400">
                Disposables
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? 'bg-secondary-50' : 'bg-white'
                } hover:bg-secondary-100 transition-colors`}
              >
                <div className="p-4 lg:p-5 text-primary-800 font-medium">
                  {feature.name}
                </div>
                <div className="p-4 lg:p-5 flex justify-center items-center border-l border-secondary-200">
                  {renderIcon(feature.amie)}
                </div>
                <div className="p-4 lg:p-5 flex justify-center items-center border-l border-secondary-200">
                  {renderIcon(feature.disposable)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-primary-600">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Yes</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-500" />
              <span>No</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-4 h-4 text-yellow-500" />
              <span>Partial/Limited</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;

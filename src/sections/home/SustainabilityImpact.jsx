import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Recycle, Globe, ArrowRight } from 'lucide-react';

const SustainabilityImpact = () => {
  const impacts = [
    {
      icon: Droplets,
      number: '500+',
      label: 'Disposables Saved',
      description: 'Per person, per year',
      color: 'text-blue-400'
    },
    {
      icon: Leaf,
      number: '200kg',
      label: 'Waste Reduced',
      description: 'Over product lifetime',
      color: 'text-green-400'
    },
    {
      icon: Recycle,
      number: '3+ Years',
      label: 'Product Lifespan',
      description: 'With proper care',
      color: 'text-highlight-orange'
    },
    {
      icon: Globe,
      number: '70%',
      label: 'Carbon Reduction',
      description: 'Compared to disposables',
      color: 'text-primary-400'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-secondary-500">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium border border-green-500/20 mb-6"
            >
              <Leaf className="w-4 h-4 mr-2" />
              Sustainability
            </motion.span>

            <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-6">
              Better for You,<br />
              <span className="text-green-600">Better for the Planet</span>
            </h2>

            <p className="text-lg text-primary-700 mb-6 leading-relaxed">
              Every AMIE product you use contributes to a more sustainable future.
              Traditional disposables take 500+ years to decompose. Our reusable
              solutions last for years, saving thousands of single-use products from landfills.
            </p>

            <ul className="space-y-3 mb-8">
              {['100% reusable and washable', 'Made from eco-friendly materials', 'Reduces plastic waste significantly', 'Saves money in the long run'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-primary-700"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link to="/why-amie">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold transition-all duration-300 hover:bg-green-700"
              >
                Learn About Our Impact
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-300 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  className={`inline-flex p-3 rounded-full bg-secondary-100 mb-4 ${impact.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <impact.icon className="w-6 h-6" />
                </motion.div>
                <div className="text-3xl font-bold text-primary-900 mb-1">
                  {impact.number}
                </div>
                <div className="text-primary-700 font-medium mb-1">
                  {impact.label}
                </div>
                <div className="text-sm text-primary-600">
                  {impact.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityImpact;

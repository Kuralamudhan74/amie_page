import { motion } from 'framer-motion';
import { Leaf, Trash2, DollarSign, Clock, Globe, Recycle } from 'lucide-react';

const SustainabilitySection = () => {
  const impacts = [
    {
      icon: Trash2,
      number: '500+',
      label: 'Disposables Saved Annually',
      description: 'Each AMIE product replaces 500+ single-use items per year',
      color: 'text-red-500'
    },
    {
      icon: Globe,
      number: '200kg',
      label: 'Waste Prevented',
      description: 'Over the lifetime of one AMIE product',
      color: 'text-blue-500'
    },
    {
      icon: DollarSign,
      number: '70%',
      label: 'Cost Savings',
      description: 'Compared to buying disposables over 3 years',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      number: '500+',
      label: 'Years to Decompose',
      description: 'Time for a single disposable pad to break down',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="section-padding bg-primary-500">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium border border-green-500/30 mb-6"
          >
            <Leaf className="w-4 h-4 mr-2" />
            Sustainability
          </motion.span>
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-500 mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-lg text-secondary-400 max-w-3xl mx-auto">
            Every AMIE product you use makes a real difference. Traditional disposables
            create massive environmental harm—we're here to change that.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-800 rounded-2xl p-6 text-center"
            >
              <motion.div
                className={`inline-flex p-3 rounded-full bg-primary-700 mb-4 ${impact.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <impact.icon className="w-6 h-6" />
              </motion.div>
              <div className="text-3xl font-bold text-secondary-500 mb-2">
                {impact.number}
              </div>
              <div className="text-secondary-400 font-medium mb-2">
                {impact.label}
              </div>
              <div className="text-sm text-secondary-500/70">
                {impact.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reusable Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600/20 to-green-500/10 rounded-3xl p-8 lg:p-12 border border-green-500/30"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Recycle className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-secondary-500">
                  The Reusable Advantage
                </h3>
              </div>
              <p className="text-secondary-400 mb-6 leading-relaxed">
                One AMIE product can last 3+ years with proper care, replacing thousands
                of disposables. That's not just good for your wallet—it's essential for our planet.
              </p>
              <ul className="space-y-3">
                {[
                  'Machine washable up to 200+ times',
                  'Made from durable, long-lasting materials',
                  'Maintains performance wash after wash',
                  'Reduces your carbon footprint significantly'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-secondary-400"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-primary-800 rounded-2xl p-8">
                <div className="text-6xl font-bold text-green-400 mb-2">3+</div>
                <div className="text-secondary-500 font-semibold text-xl mb-2">Years Lifespan</div>
                <div className="text-secondary-400 text-sm">
                  vs. single-use disposables that end up in landfills
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;

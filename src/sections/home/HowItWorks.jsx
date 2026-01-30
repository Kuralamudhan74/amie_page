import { motion } from 'framer-motion';
import { ShoppingBag, Ruler, Heart, Recycle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingBag,
      title: 'Choose Your Product',
      description: 'Browse our range of period underwear, baby diapers, and adult incontinence solutions.',
      color: 'text-highlight-pink'
    },
    {
      icon: Ruler,
      title: 'Find Your Perfect Fit',
      description: 'Use our size guide to find the perfect fit for maximum comfort and protection.',
      color: 'text-highlight-orange'
    },
    {
      icon: Heart,
      title: 'Wear with Confidence',
      description: 'Enjoy all-day comfort and leak-proof protection, whether at work, gym, or rest.',
      color: 'text-highlight-pink'
    },
    {
      icon: Recycle,
      title: 'Wash & Reuse',
      description: 'Simply wash, dry, and reuse. Good for you, great for the planet.',
      color: 'text-green-500'
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
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-500 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-secondary-400 max-w-2xl mx-auto">
            Making the switch to sustainable protection is easier than you think
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Connector Line (hidden on mobile and after last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary-700" />
              )}

              {/* Step Number */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-800 mb-6">
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-highlight-pink text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary-500 mb-3">
                {step.title}
              </h3>
              <p className="text-secondary-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

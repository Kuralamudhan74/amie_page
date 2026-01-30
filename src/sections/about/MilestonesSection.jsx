import { motion } from 'framer-motion';
import { Rocket, FlaskConical, Users, Trophy } from 'lucide-react';
import { MILESTONES } from '../../data/products';

const MilestonesSection = () => {
  const icons = [Rocket, FlaskConical, Users, Trophy];

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
            Our Journey
          </h2>
          <p className="text-lg text-secondary-400 max-w-2xl mx-auto">
            Key milestones in our mission to revolutionize leak protection
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-700" />

          {/* Milestones */}
          <div className="space-y-12 lg:space-y-0">
            {MILESTONES.map((milestone, index) => {
              const IconComponent = icons[index % icons.length];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 relative ${
                    index !== MILESTONES.length - 1 ? 'lg:mb-12' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className={`bg-primary-800 rounded-2xl p-6 ${isEven ? 'lg:ml-auto' : ''} max-w-md`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="p-2 rounded-lg bg-highlight-pink/20">
                          <IconComponent className="w-6 h-6 text-highlight-pink" />
                        </div>
                        <span className="text-3xl font-bold text-highlight-yellow">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-500 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-secondary-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-highlight-pink border-4 border-primary-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;

import { motion } from 'framer-motion';
import { Dumbbell, Moon, Briefcase, Plane, Baby, Heart } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Dumbbell,
      title: 'Workouts & Sports',
      description: 'Train hard without worrying about leaks. Our products stay in place during intense movements, squats, and lifts.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Moon,
      title: 'Overnight Protection',
      description: 'Sleep worry-free with up to 12 hours of protection. Move freely and wake up confident.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Briefcase,
      title: 'Long Work Days',
      description: 'From morning meetings to evening commutes, stay comfortable and protected all day long.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Plane,
      title: 'Travel',
      description: 'Long flights, road trips, or adventures—AMIE keeps you confident wherever life takes you.',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: Baby,
      title: 'Postpartum',
      description: 'Gentle, reliable protection during recovery. Soft on sensitive skin when you need it most.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Heart,
      title: 'Everyday Life',
      description: 'Sneeze, laugh, play—live your life fully without second thoughts about leaks.',
      color: 'bg-red-100 text-red-600'
    }
  ];

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
            Fit for Every Moment
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            AMIE products are designed to support you through all of life's activities—big and small
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-secondary-300 hover:shadow-lg transition-all duration-300 group"
            >
              <motion.div
                className={`inline-flex p-4 rounded-2xl ${useCase.color} mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <useCase.icon className="w-8 h-8" />
              </motion.div>

              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {useCase.title}
              </h3>

              <p className="text-primary-700 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl text-primary-700 italic max-w-2xl mx-auto">
            "Life's little leaks shouldn't get in the way of living fully. With AMIE, they don't have to."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;

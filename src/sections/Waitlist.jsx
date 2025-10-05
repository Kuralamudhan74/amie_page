import { motion } from 'framer-motion';
import { useState } from 'react';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="waitlist" className="section-padding bg-secondary-500">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6">
              Stay in the loop
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Be the first to know when we launch — and unlock exclusive early bird offers
            </p>
          </motion.div>

          {/* Waitlist Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Input Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg bg-white text-primary-900 placeholder-primary-500 border-0 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Category Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg bg-white text-primary-900 border-0 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Select Category</option>
                  <option value="parent">Parent</option>
                  <option value="adult">Adult</option>
                  <option value="teen">Teen</option>
                  <option value="caregiver">Caregiver</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg bg-white text-primary-900 placeholder-primary-500 border-0 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg bg-white text-primary-900 placeholder-primary-500 border-0 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300"
                />
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-primary-500 to-accent-purple text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-accent-purple hover:to-primary-600 hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.button>
            </motion.div>

            {/* Privacy Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-sm text-primary-600"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;

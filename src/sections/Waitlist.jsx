import { motion } from 'framer-motion';
import { useState } from 'react';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    age: '',
    gender: ''
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
                className="relative"
              >
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-6 pt-6 pb-2 rounded-lg bg-white text-primary-900 border-2 border-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 peer"
                  required
                />
                <label className="absolute left-6 top-2 text-primary-500 text-sm transition-all duration-300 peer-focus:text-primary-300 peer-focus:text-xs peer-focus:-translate-y-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-500 peer-placeholder-shown:translate-y-0">
                  Full Name
                </label>
              </motion.div>

              {/* Category Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-6 pt-6 pb-2 rounded-lg bg-white text-primary-900 border-2 border-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 appearance-none cursor-pointer peer"
                  required
                >
                  <option value="" disabled> </option>
                  <option value="baby_diapers">Baby Diapers</option>
                  <option value="women incontinence ">Women Incontinence </option>
                  <option value="period wear">Period Wear</option>
                  <option value="adult_diapers">Adult Diapers</option>
                  <option value="All the above">Other</option>
                </select>
                <label className="absolute left-6 top-2 text-primary-500 text-sm transition-all duration-300 peer-focus:text-primary-300 peer-focus:text-xs peer-focus:-translate-y-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-500 peer-placeholder-shown:translate-y-0">
                  Interested Product
                </label>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 pt-6 pb-2 rounded-lg bg-white text-primary-900 border-2 border-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 peer"
                  required
                />
                <label className="absolute left-6 top-2 text-primary-500 text-sm transition-all duration-300 peer-focus:text-primary-300 peer-focus:text-xs peer-focus:-translate-y-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-500 peer-placeholder-shown:translate-y-0">
                  Email Address
                </label>
              </motion.div>

              {/* Age */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-6 pt-6 pb-2 rounded-lg bg-white text-primary-900 border-2 border-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 appearance-none cursor-pointer peer"
                  required
                >
                  <option value="" disabled> </option>
                  <option value="10-20">10-20</option>
                  <option value="21-30">21-30</option>
                  <option value="31-40">31-40</option>
                  <option value="41-50">41-50</option>
                  <option value="above_50">Above 50</option>
                </select>
                <label className="absolute left-6 top-2 text-primary-500 text-sm transition-all duration-300 peer-focus:text-primary-300 peer-focus:text-xs peer-focus:-translate-y-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-500 peer-placeholder-shown:translate-y-0">
                  Select Age Range
                </label>
              </motion.div>

             {/* Gender Dropdown */}
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-6 pt-6 pb-2 rounded-lg bg-white text-primary-900 border-2 border-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 appearance-none cursor-pointer peer"
                  required
                >
                  <option value="" disabled> </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="not_to_say">Other</option>
                </select>
                <label className="absolute left-6 top-2 text-primary-500 text-sm transition-all duration-300 peer-focus:text-primary-300 peer-focus:text-xs peer-focus:-translate-y-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-500 peer-placeholder-shown:translate-y-0">
                  Select Gender
                </label>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-6 pt-6 pb-2 rounded-lg bg-white text-primary-900 border-2 border-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 peer"
                />
                <label className="absolute left-6 top-2 text-primary-500 text-sm transition-all duration-300 peer-focus:text-primary-300 peer-focus:text-xs peer-focus:-translate-y-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-500 peer-placeholder-shown:translate-y-0">
                  Phone Number
                </label>
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

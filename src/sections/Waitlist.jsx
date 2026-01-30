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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // 🔹 Change this to your deployed Google Apps Script URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw0MNpVLe2kcNVxaVSG196_phNSFrNZBCU-0fFttjsrxWlNWFuDIxpvsgys5Q4WqTu1/exec";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    // Prepare data (make sure keys match what your Apps Script expects)
    const payload = {
      name: formData.fullName,
      email: formData.email,
      phoneumber: formData.phone,  // keep same spelling as in your script
      category: formData.category,
      age: formData.age,
      gender: formData.gender,
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important: bypasses CORS restrictions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Since no-cors mode doesn't allow reading response, we assume success
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        category: '',
        age: '',
        gender: ''
      });
      
      // Show success alert
      //alert("🎉 You've been added to the waitlist successfully!");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
      
      // Show error alert with contact information
      alert(`⚠️ There was an issue submitting your details. Please contact us at:\n\nPhone: +91 8072590967\nEmail: premalatha@novcor.in`);
    } finally {
      setIsSubmitting(false);
    }
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
                <label className="absolute left-6 top-2 text-primary-500 text-sm">
                  Full Name
                </label>
              </motion.div>

              {/* Category */}
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
                  className="w-full px-6 pt-6 pb-2 rounded-lg bg-white text-primary-900 border-2 border-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 cursor-pointer"
                  required
                >
                  <option value="" disabled> </option>
                  <option value="baby_diapers">Baby Diapers</option>
                  <option value="women_incontinence">Women Incontinence</option>
                  <option value="period_wear">Period Wear</option>
                  <option value="adult_diapers">Adult Diapers</option>
                  <option value="all">All the above</option>
                </select>
                <label className="absolute left-6 top-2 text-primary-500 text-sm">
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
                <label className="absolute left-6 top-2 text-primary-500 text-sm">
                  Email Address
                </label>
              </motion.div>

              {/* Age */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-6 pt-6 pb-2 rounded-lg bg-white text-primary-900 border-2 border-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 cursor-pointer"
                  required
                >
                  <option value="" disabled> </option>
                  <option value="10-20">10-20</option>
                  <option value="21-30">21-30</option>
                  <option value="31-40">31-40</option>
                  <option value="41-50">41-50</option>
                  <option value="50+">Above 50</option>
                </select>
                <label className="absolute left-6 top-2 text-primary-500 text-sm">
                  Age Range
                </label>
              </motion.div>

              {/* Gender */}
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
                  className="w-full px-6 pt-6 pb-2 rounded-lg bg-white text-primary-900 border-2 border-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all duration-300 cursor-pointer"
                  required
                >
                  <option value="" disabled> </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label className="absolute left-6 top-2 text-primary-500 text-sm">
                  Gender
                </label>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
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
                <label className="absolute left-6 top-2 text-primary-500 text-sm">
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
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-primary-500 to-accent-purple text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:from-accent-purple hover:to-primary-600 hover:scale-105 hover:shadow-lg"
                }`}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </motion.button>
            </motion.div>

            {/* Success Message */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-6"
              >
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">Successfully added to waitlist!</span>
                  </div>
                  <p className="mt-2 text-sm">Thank you for joining us. We'll be in touch soon!</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {isError && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-6"
              >
                <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Submission failed</span>
                  </div>
                  <p className="mt-2 text-sm">
                    Please contact us directly:<br />
                    <strong>Phone:</strong> +91 8072590967<br />
                    <strong>Email:</strong> premalatha@novcor.in
                  </p>
                </div>
              </motion.div>
            )}

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

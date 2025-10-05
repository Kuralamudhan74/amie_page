import { motion } from 'framer-motion';
import { Camera, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Camera, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-primary-500 border-t border-primary-400">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gradient mb-2">
                  AMIE
                </h3>
                <p className="text-secondary-400 text-sm">
                  Your day Secured
                </p>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="text-secondary-500 font-semibold mb-4">Follow Our Journey</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-secondary-400 hover:text-secondary-500 hover:bg-primary-700 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <h4 className="text-secondary-500 font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-secondary-400 text-sm">
                  hello@amie.com
                </p>
                <p className="text-secondary-500 text-sm">
                  Coming Soon
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 border-t border-primary-400 text-center"
        >
          <p className="text-secondary-500 text-sm">
            © 2025 AMIE | Your day, secured.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="font-serif text-3xl mb-8 text-cafe-500">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <FaPhone className="text-cafe-400 w-6 h-6 mr-4" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-cafe-400">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="text-cafe-400 w-6 h-6 mr-4" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-cafe-400">hello@cafeserenity.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-cafe-400 w-6 h-6 mr-4" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-cafe-400">123 Coffee Street, Cityville, ST 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-2">Hours</h3>
              <p className="text-cafe-400">Monday - Friday: 7am - 7pm</p>
              <p className="text-cafe-400">Saturday - Sunday: 8am - 6pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="font-serif text-3xl mb-8 text-cafe-500">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cafe-400 focus:border-cafe-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cafe-400 focus:border-cafe-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cafe-400 focus:border-cafe-400"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-cafe-400 text-white py-2 px-4 rounded-md hover:bg-cafe-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156744775!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647891702753!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
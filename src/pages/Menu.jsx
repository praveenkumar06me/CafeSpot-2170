import { motion } from 'framer-motion';

const menuItems = {
  Coffee: [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam' },
    { name: 'Latte', price: '$4.75', description: 'Espresso with steamed milk' },
  ],
  Tea: [
    { name: 'Earl Grey', price: '$3.50', description: 'Classic black tea with bergamot' },
    { name: 'Green Tea', price: '$3.50', description: 'Light and refreshing' },
    { name: 'Chamomile', price: '$3.50', description: 'Caffeine-free herbal tea' },
  ],
  Pastries: [
    { name: 'Croissant', price: '$3.75', description: 'Buttery and flaky' },
    { name: 'Muffin', price: '$3.50', description: 'Daily baked selection' },
    { name: 'Danish', price: '$4.00', description: 'Fruit-filled pastry' },
  ],
};

const testimonials = [
  { name: 'Sarah M.', rating: 5, text: 'Best coffee in town! The atmosphere is perfect for work or casual meetings.' },
  { name: 'John D.', rating: 5, text: 'Love their pastries and the staff is always friendly.' },
  { name: 'Emily R.', rating: 4, text: 'Great place to start your morning. Their cappuccino is amazing!' },
];

const Menu = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Menu Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl text-center mb-12 text-cafe-500">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(menuItems).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="font-serif text-xl mb-4 text-cafe-400">{category}</h3>
                <div className="space-y-4">
                  {items.map((item, i) => (
                    <div key={i} className="border-b border-cafe-200 pb-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-cafe-400">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <h2 className="font-serif text-3xl text-center mb-12 text-cafe-500">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-medium text-cafe-400">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
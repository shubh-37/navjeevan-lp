import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import logo from './assets/logo.png';
import rice from './assets/rice.webp';
import tea from './assets/tea.jpg';
import atta from './assets/atta.webp';
import oil from './assets/oil.jpg';
const App = () => {
  const offers = [
    {
      id: 1,
      title: 'Weekend Special',
      description: 'Get 20% off on all groceries',
      discount: '20% OFF',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Festive Offer',
      description: 'Buy 1 Get 1 Free on selected items',
      discount: 'Buy 1 Get 1',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Bulk Purchase',
      description: 'Extra 10% off on purchases above ₹5000',
      discount: '10% OFF',
      image: '/api/placeholder/300/200'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Rice',
      price: 199,
      image: rice
    },
    {
      id: 2,
      name: 'Premium Tea',
      price: 149,
      image: tea
    },
    {
      id: 3,
      name: 'Cooking Oil',
      price: 299,
      image: oil
    },
    {
      id: 4,
      name: 'Wheat Flour',
      price: 249,
      image: atta
    }
  ];

  const stores = [
    {
      id: 1,
      location: 'Bahinbai Garden Chowk',
      address: 'RING ROAD, Pratap Nagar, Jalgaon. Pincode: 425001',
      phone: '+91 7249767089',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 2,
      location: 'Dongargaon Road, Shahada',
      address: 'Dongargaon Road, Shahada City, Shahada - 425409',
      phone: '+91 7891978920',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 3,
      location: 'Kalinkamata Mandir Chowk',
      address: 'NH No.6, Near Kalinkamata Mandir Chowk, Jalgaon - 425001',
      phone: '+91 8857058800',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 4,
      location: 'Karvand Naka Chowk, Shirpur',
      address: 'K.G.Compound, Plot No.4, Karvand Naka Chowk, Shirpur - 425405',
      phone: '+91 8989977171',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 5,
      location: 'Mahabal Chowk',
      address: 'Near Mahabal Chowk, Jalgaon - 425001',
      phone: '+91 7249677089',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 6,
      location: 'Near Global School, Amalner',
      address: 'Near Global School, Amalner - 425401',
      phone: '+91 7666869467',
      storeTimings: '9AM - 9PM'
    }
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.img
            src={logo}
            alt="Navjeevan Supershop"
            className="h-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="flex items-center justify-center md:justify-end">
              <FaPhone className="mr-2" /> +91 8766860657
            </p>
            <p className="flex items-center justify-center md:justify-end">
              <FaEnvelope className="mr-2" /> contact@navjeevan.com
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Offers Section */}
        <motion.section
          className="mb-12"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Special Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <motion.div
                key={offer.id}
                className="p-4 bg-white shadow rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <img src={offer.image} alt={offer.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <span className="inline-block bg-yellow-500 text-white py-1 px-3 rounded-full">{offer.discount}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Products Section */}
        <motion.section
          className="mb-12"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="p-4 bg-white shadow rounded-lg text-center"
                whileHover={{ y: -10 }}
              >
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded-md mb-4" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-900 font-bold text-lg mb-4">₹{product.price}</p>
                {/* <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Add to Cart
                </button> */}
              </motion.div>
            ))}
          </div>
          <p className="text-l font-bold text-center text-blue-900 mt-5">And many more such products... Visit store!</p>
        </motion.section>

        {/* Stores Section */}
        <motion.section
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Our Stores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <motion.div
                key={store.id}
                className="p-4 bg-blue-100 shadow rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  <FaMapMarkerAlt className="inline-block mr-2 text-blue-700" />
                  {store.location}
                </h3>
                <p className="text-gray-700 mb-1">{store.address}</p>
                <p className="text-gray-700 mb-1">
                  <FaPhone className="inline-block mr-2 text-blue-700" />
                  {store.phone}
                </p>
                <p className="text-gray-500 text-sm flex items-center justify-center">
                  <FaClock className="inline-block mr-2 text-blue-700" />
                  {store.storeTimings}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </div>
          </div>
          <p className="mt-4 md:mt-0">© 2025 Navjeevan Plus Supershop</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

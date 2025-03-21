import { motion } from 'framer-motion';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import logo from './assets/logo.png';
import offer1 from './assets/offer-1.jpeg';
import banner from './assets/banner.jpeg';
import offer4 from './assets/offer-4.jpeg';
import offer2 from './assets/offer-2.jpeg';
import whatsapp from './assets/WhatsApp.svg';
const App = () => {
  const offers = [
    {
      id: 1,
      title: 'Minimum 5% off on MRP*',
      discount: '5% OFF',
      image: offer1
    },
    {
      id: 2,
      title: 'Purchase on 12 Months + Get 1 Month Purchase Free',
      image: offer2
    },
    {
      id: 4,
      title: 'Super Saver Sunday',
      discount: 'upto 20% OFF',
      image: offer4
    }
  ];
  const stores = [
    {
      id: 1,
      location: 'Bahinbai Garden Chowk',
      address: 'RING ROAD, Pratap Nagar, Jalgaon. Pincode: 425001',
      phone: '7249767089',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 2,
      location: 'Dongargaon Road, Shahada',
      address: 'Dongargaon Road, Shahada City, Shahada - 425409',
      phone: '7891978920',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 3,
      location: 'Kalinkamata Mandir Chowk',
      address: 'NH No.6, Near Kalinkamata Mandir Chowk, Jalgaon - 425001',
      phone: '8857058800',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 4,
      location: 'Karvand Naka Chowk, Shirpur',
      address: 'K.G.Compound, Plot No.4, Karvand Naka Chowk, Shirpur - 425405',
      phone: '8989977171',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 5,
      location: 'Mahabal Chowk',
      address: 'Near Mahabal Chowk, Jalgaon - 425001',
      phone: '7249677089',
      storeTimings: '9AM - 9PM'
    },
    {
      id: 6,
      location: 'Near Global School, Amalner',
      address: 'Near Global School, Amalner - 425401',
      phone: '7666869467',
      storeTimings: '9AM - 9PM'
    }
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  function openWhatsapp(number) {
    window.open(`https://wa.me/${number}`, '_blank');
  }

  return (
    <div className="font-sans text-gray-800">
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <motion.img
            src={logo}
            alt="Navjeevan Supershop"
            className="h-16 md:h-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </header>
      {/* Banner Section */}
      <motion.section
        className="container mx-auto my-6 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={banner}
          alt="Navjeevan Banner"
          className="w-full max-w-[1200px] mx-auto rounded-lg shadow-md object-cover"
        />
      </motion.section>

      <main className="container mx-auto px-4">
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
                <img src={offer.image} alt={offer.title} className="w-full object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                {offer.discount && (
                  <span className="inline-block bg-yellow-500 text-white py-1 px-3 rounded-full">{offer.discount}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stores Section */}
        <motion.section
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-5"
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
                <p className="flex items-center justify-center w-full text-gray-700 mb-1 cursor-pointer">
                  {/* <FaPhone className="inline-block mr-2 text-blue-700" /> */}
                  <FaPhone className=" mr-1 text-blue-500" />
                  {`+91-${store.phone}`}
                </p>
                <div className="flex gap-4">
                  <button
                    className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-2 rounded-lg shadow-md transition duration-300 my-2"
                    onClick={() => openWhatsapp(store.phone)}
                  >
                    <img src={whatsapp} alt="" className="mr-2 ml-1 w-5" />
                    Order on Whatsapp
                  </button>
                  <button className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-2 rounded-lg shadow-md transition duration-300 my-2">
                    <a href={`tel:${store.phone}`} className="flex items-center gap-2">
                      <FaPhone className="text-white" />
                      Order on Phone
                    </a>
                  </button>
                </div>

                <p className="text-gray-500 text-md flex items-center justify-center">
                  <FaClock className="inline-block mr-2 text-blue-700" />
                  {store.storeTimings}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-5">
        <div className="flex items-center justify-between gap-5">
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/NavjeevanPlus/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/navjeevanplus/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
          <p className="text-center mt-4 md:mt-0">© 1964-{new Date().getFullYear()}. Navjeevan Plus Supershop.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

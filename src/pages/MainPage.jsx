import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import { 
  FiLayout, 
  FiShield, 
  FiBox, 
  FiUsers, 
  FiMessageSquare, 
  FiMail,
  FiZap,
  FiGrid
} from 'react-icons/fi';

const categories = [
  { id: 1, title: 'Header', icon: FiLayout, count: 12, path: '/headers' },
  { id: 2, title: 'Hero Section', icon: FiShield, count: 15, path: '/hero-sections' },
  { id: 3, title: 'Cards', icon: FiGrid, count: 12, path: '/cards' },
  { id: 4, title: 'CTA', icon: FiZap, count: 10, path: '/cta' },
  { id: 5, title: 'Footer', icon: FiBox, count: 8, path: '/footers' },
  { id: 6, title: 'About', icon: FiUsers, count: 5, path: '/about' },
  { id: 7, title: 'Testimonials', icon: FiMessageSquare, count: 10, path: '/testimonials' },
  { id: 8, title: 'Contact', icon: FiMail, count: 6, path: '/contact' },
];

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center items-center gap-2 mb-4">
          <FiShield className="text-primary text-4xl" />
          <h1 className="text-3xl font-bold gradient-text">Copy Blocks</h1>
        </div>
        <div className="bg-white/50 px-4 py-1 rounded-full inline-block">
          <span className="text-sm text-primary">In Progress</span>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-5xl font-bold mb-6 gradient-text">
          Boost Your Workflow with Tailored UI Blocks
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover a curated collection of pre-designed UI blocks to enhance your projects quickly and efficiently.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/our-story')}
          className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:shadow-lg transition-shadow"
        >
          Our Story
          <FiExternalLink />
        </motion.button>
      </motion.div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={category.path}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-xl card-gradient border border-white/20 hover:border-primary/30 group"
              >
                <div className="absolute top-4 right-4 text-gray-400 group-hover:text-primary transition-colors">
                  <FiExternalLink />
                </div>
                <category.icon className="text-primary text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-500">{category.count} blocks</p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
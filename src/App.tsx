import { About, Blogs, BlogViewer, Contact, Landing, Partner, Pricing, PrivacyPolicy, Solution, Waitlist } from '@/pages';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/custom';
import TermsAndConditions from './pages/company/terms-of-services.pages';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};



function App() {

  return (
    <div className='bg-gray-200'>
      {/* Header */}
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variants={fadeInUp}>
        <Header />
      </motion.div>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/waitlist' element={<Waitlist />} />
        <Route path='/solutions' element={<Solution />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsAndConditions />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:slug' element={<BlogViewer />} />
      </Routes>

      {/* Footer */}
      <motion.footer variants={fadeInUp}>
        <Footer />
      </motion.footer>
    </div>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'

// Page imports
import Home from './pages/Home'
import Listings from './pages/Listings'
import About from './pages/About'
import Contact from './pages/Contact'
import PropertyDetails from './pages/PropertyDetails'
import Services from './pages/Services' // Main services hub

// New service pages
import BuyingSelling from './pages/services/BuyingSelling'
import RentShortlet from './pages/services/RentShortlet'
import PropertyManagement from './pages/services/PropertyManagement'
import Investment from './pages/services/Investment'

// Blog pages
import BlogMain from './pages/Blog/BlogMain' // Blog listing page
import BlogSingle from './pages/Blog/BlogSingle' // Single blog post page
import BlogCategory from './pages/Blog/BlogCategory' // Blog posts by category

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            
            {/* Property Listings */}
            <Route path="/listings" element={<Listings />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            
            {/* Services - New Structure */}
            <Route path="/services" element={<Services />} /> {/* Main services hub */}
            <Route path="/services/buying-selling" element={<BuyingSelling />} />
            <Route path="/services/rent-shortlet" element={<RentShortlet />} />
            <Route path="/services/property-management" element={<PropertyManagement />} />
            <Route path="/services/investment" element={<Investment />} />
            
            {/* Blog */}
            <Route path="/blog" element={<BlogMain />} /> {/* Blog listing */}
            <Route path="/blog/:slug" element={<BlogSingle />} /> {/* Single post */}
            <Route path="/blog/category/:category" element={<BlogCategory />} /> {/* Category archive */}
            <Route path="/blog/tag/:tag" element={<BlogCategory />} /> {/* Tag archive */}
            
            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Temporary pages */}
            <Route path="/test" element={<Home />} /> {/* Redirect test to home for now */}
            
            {/* 404 Page */}
            <Route path="*" element={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Go Back Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
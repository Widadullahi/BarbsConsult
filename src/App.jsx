import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { BarbsProvider } from './contexts/barbs/BarbsProvider';
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

// Blog pages - IMPORTANT: Check which path is correct
import BlogMain from './pages/Blog/BlogMain' // Changed from pages/Blog/BlogMain to components/Blog/BlogMain
import BlogSingle from './pages/Blog/BlogSingle' // Single blog post page
import BlogCategory from './pages/Blog/BlogCategory' // Blog posts by category

// Admin pages
import AdminLogin from './admin/pages/Login'
import AdminLayout from './admin/layouts/AdminLayout'
import AdminDashboard from './admin/pages/Dashboard'
import AdminProperties from './admin/pages/Properties'
import AdminBlog from './admin/pages/Blog'
import AdminUsers from './admin/pages/Users'
import AdminMessages from './admin/pages/Messages'
import AdminAnalytics from './admin/pages/Analytics'
import AdminSettings from './admin/pages/Settings'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('admin_token');
  
  if (!token) {
    // Redirect to login instead of showing login component directly
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <BarbsProvider> {/* Wrap entire app with BarbsProvider */}
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Conditionally render Header and Footer only for public routes */}
          <Routes>
            {/* All public routes */}
            <Route path="/*" element={
              <>
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
              </>
            } />
            
            {/* Admin login page - standalone (no header/footer) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            
            {/* Admin protected routes - standalone layout */}
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="properties" element={<AdminProperties />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="messages" element={<AdminMessages />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </BarbsProvider>
  )
}

export default App
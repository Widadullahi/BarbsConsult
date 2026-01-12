// components/Blog/BlogMain.jsx
import { useState, useEffect } from 'react';
import { 
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaPlus
} from 'react-icons/fa';
import BlogCard from './BlogCard';
import BlogFeatured from './BlogFeatured';
import BlogSidebar from './BlogSidebar';
import BlogAdmin from './BlogAdmin';
import { BarbsProvider, useBarbs } from '../../contexts/barbs';


const BlogMain = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ 
    email: 'admin@barbsconsult.com', 
    password: 'admin123' 
  });
  const [loginError, setLoginError] = useState('');
  
  // Get authentication from Barbs context
  const { user, isAdmin, login, logout } = useBarbs();
  
  const postsPerPage = 6;

  // Fetch blog data
  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      const mockData = {
        posts: [
          {
            id: 1,
            title: '2024 Lagos Real Estate Market Outlook',
            excerpt: 'Analysis of emerging trends in the Lagos property market and investment opportunities for 2024.',
            content: '<h2>Market Overview</h2><p>The Lagos real estate market continues to show resilience with steady growth...</p>',
            category: 'market',
            date: '2023-12-15',
            readTime: '5 min read',
            author: 'Michael Johnson',
            authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            tags: ['Market Analysis', 'Lagos', 'Trends'],
            featured: true,
            slug: '2024-lagos-real-estate-market-outlook',
            views: 1245,
            comments: 23
          },
          {
            id: 2,
            title: 'Smart Investment Strategies for Beginners',
            excerpt: 'Learn how to make your first real estate investment with confidence and minimal risk.',
            content: '<h2>Getting Started</h2><p>Real estate investment can seem daunting, but with the right approach...</p>',
            category: 'investment',
            date: '2023-11-28',
            readTime: '7 min read',
            author: 'Sarah Williams',
            authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            image: 'https://plus.unsplash.com/premium_photo-1682309748075-75c6641862b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGUlMjBTbWFydCUyMEludmVzdG1lbnQlMjBTdHJhdGVnaWVzJTIwZm9yJTIwQmVnaW5uZXJzfGVufDB8fDB8fHww', 
            tags: ['Investment', 'Beginners', 'Strategy'],
            featured: false,
            slug: 'smart-investment-strategies-for-beginners',
            views: 892,
            comments: 15
          },
          {
            id: 3,
            title: 'Understanding Property Taxes in Nigeria',
            excerpt: 'A comprehensive guide to property taxes, rates, and payment procedures.',
            content: '<h2>Tax Basics</h2><p>Property taxation in Nigeria varies by state and local government...</p>',
            category: 'legal',
            date: '2023-11-10',
            readTime: '8 min read',
            author: 'David Okonkwo',
            authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            image: 'https://images.unsplash.com/photo-1758519291421-156a306e95c4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZSUyMGd1aWRlcyUyMGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww', 
            tags: ['Legal', 'Taxes', 'Nigeria'],
            featured: false,
            slug: 'understanding-property-taxes-in-nigeria',
            views: 1103,
            comments: 42
          },
          {
            id: 4,
            title: 'Home Maintenance Checklist for New Owners',
            excerpt: 'Essential maintenance tasks to keep your property in top condition year-round.',
            content: '<h2>Monthly Tasks</h2><p>Regular maintenance prevents costly repairs down the line...</p>',
            category: 'property',
            date: '2023-10-22',
            readTime: '6 min read',
            author: 'Maria Garcia',
            authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
           image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            tags: ['Maintenance', 'Homeowners', 'Checklist'],
            featured: false,
            slug: 'home-maintenance-checklist-for-new-owners',
            views: 756,
            comments: 18
          },
          {
            id: 5,
            title: 'Commercial Real Estate Trends 2024',
            excerpt: 'What to expect in the commercial property market in the coming year.',
            content: '<h2>Office Space Evolution</h2><p>The post-pandemic workplace continues to evolve...</p>',
            category: 'market',
            date: '2023-10-05',
            readTime: '9 min read',
            author: 'Robert Chen',
            authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            image: 'https://images.unsplash.com/photo-1761679296778-7f245d39148d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFJlYWwlMjBFc3RhdGUlMjBUcmVuZHN8ZW58MHx8MHx8fDA%3D',
            tags: ['Commercial', 'Trends', 'Business'],
            featured: false,
            slug: 'commercial-real-estate-trends-2024',
            views: 1342,
            comments: 29
          },
          {
            id: 6,
            title: 'Mortgage Guide for First-Time Buyers',
            excerpt: 'Everything you need to know about getting a mortgage in Nigeria.',
            content: '<h2>Mortgage Options</h2><p>Nigerian banks offer various mortgage products...</p>',
            category: 'guides',
            date: '2023-09-18',
            readTime: '10 min read',
            author: 'Amina Bello',
            authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            image: 'https://images.unsplash.com/photo-1559067096-d109b66fd5af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9ydGdhZ2UlMjBHdWlkZSUyMGZvciUyMEZpcnN0LVRpbWUlMjBCdXllcnN8ZW58MHx8MHx8fDA%3D',
            tags: ['Mortgage', 'First-Time Buyers', 'Finance'],
            featured: false,
            slug: 'mortgage-guide-for-first-time-buyers',
            views: 985,
            comments: 31
          },
          {
            id: 7,
            title: 'Lekki Property Boom: What You Need to Know',
            excerpt: 'Understanding the rapid growth in Lekki real estate values.',
            content: '<h2>Growth Factors</h2><p>Infrastructure development and population growth are driving Lekki prices...</p>',
            category: 'market',
            date: '2023-09-01',
            readTime: '6 min read',
            author: 'Chinedu Okoro',
            authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
            tags: ['Lekki', 'Growth', 'Property'],
            featured: false,
            slug: 'lekki-property-boom',
            views: 1542,
            comments: 45
          },
          {
            id: 8,
            title: 'Real Estate Investment Trusts (REITs) Explained',
            excerpt: 'How to invest in real estate without buying physical property.',
            content: '<h2>REIT Basics</h2><p>Real Estate Investment Trusts offer accessible property investment...</p>',
            category: 'investment',
            date: '2023-08-15',
            readTime: '8 min read',
            author: 'James Adekunle',
            authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
           image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
            tags: ['REITs', 'Investment', 'Finance'],
            featured: false,
            slug: 'real-estate-investment-trusts-explained',
            views: 1120,
            comments: 32
          }
        ],
        categories: [
          { id: 'market', name: 'Market Trends', count: 5 },
          { id: 'investment', name: 'Investment Tips', count: 8 },
          { id: 'guides', name: 'Buyer Guides', count: 4 },
          { id: 'legal', name: 'Legal Updates', count: 3 },
          { id: 'property', name: 'Property Management', count: 6 }
        ]
      };

      setPosts(mockData.posts);
      setCategories(mockData.categories);
      setFeaturedPost(mockData.posts.find(post => post.featured) || mockData.posts[0]);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  // Filter posts based on category and search
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch && !post.featured;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle post actions (admin only)
  const handleDeletePost = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== postId));
      alert('Post deleted successfully!');
    }
  };

  const toggleFeatured = async (postId) => {
    const updatedPosts = posts.map(post => ({
      ...post,
      featured: post.id === postId
    }));
    setPosts(updatedPosts);
    setFeaturedPost(updatedPosts.find(post => post.id === postId));
    alert('Featured post updated!');
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    const result = login(loginData.email, loginData.password);
    
    if (result.success) {
      setShowLoginModal(false);
      setLoginData({ email: '', password: '' });
    } else {
      setLoginError(result.message || 'Login failed. Please check your credentials.');
    }
  };

  // Admin mode check - only show if user is admin
  if (isAdminMode && isAdmin) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Blog Admin Panel</h1>
            <button
              onClick={() => setIsAdminMode(false)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Back to Blog View
            </button>
          </div>
          <BlogAdmin posts={posts} setPosts={setPosts} categories={categories} />
        </div>
      </div>
    );
  }

  return (
    <section id="blog" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Admin Controls Bar (Only shows when logged in as admin) */}
        {isAdmin && user && (
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaUser className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Admin Mode</p>
                  <p className="text-sm text-gray-600">Logged in as {user.name}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setIsAdminMode(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaPlus /> Admin Panel
                </button>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">Insights & Analysis</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Estate <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert analysis, market trends, and actionable advice for your real estate journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
            <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Articles
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <BlogFeatured post={featuredPost} />
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {currentPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentPosts.map((post) => (
                    <BlogCard 
                      key={post.id} 
                      post={post}
                      // Only show admin actions if user is admin
                      onDelete={isAdmin ? () => handleDeletePost(post.id) : null}
                      onToggleFeatured={isAdmin ? () => toggleFeatured(post.id) : null}
                      isAdmin={isAdmin}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaChevronLeft />
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-lg font-medium ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <FaSearch className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">
                  {searchQuery 
                    ? `No results for "${searchQuery}". Try a different search term.`
                    : 'No articles available in this category.'
                  }
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <BlogSidebar 
            recentPosts={posts.slice(0, 4)}
            categories={categories}
            popularPosts={posts.sort((a, b) => b.views - a.views).slice(0, 3)}
          />
        </div>

        {/* Login Modal (Only for admin login) */}
        {showLoginModal && !isAdmin && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              {loginError && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                  {loginError}
                </div>
              )}
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="admin@barbsconsult.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                  >
                    Login
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500 pt-4">
                  <p>Demo Credentials:</p>
                  <p>Email: admin@barbsconsult.com</p>
                  <p>Password: admin123</p>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Small Admin Login Button (Only shows when not logged in) */}
        {!isAdmin && (
          <div className="fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setShowLoginModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-colors"
              title="Admin Login"
            >
              <FaSignInAlt />
              <span className="hidden sm:inline">Admin</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogMain;
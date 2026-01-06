// components/Blog/BlogMain.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaTag,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaShareAlt,
  FaBookmark,
  FaClock,
  FaEdit,
  FaTrash,
  FaPlus
} from 'react-icons/fa';
import BlogCard from './BlogCard';
import BlogFeatured from './BlogFeatured';
import BlogSidebar from './BlogSidebar';
import BlogAdmin from './BlogAdmin';
// import { useAuth } from '../../contexts/AuthContext';

const BlogMain = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const { user } = useAuth();
  
  const postsPerPage = 6;

  // Fetch blog data
  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      // In production, this would be an API call
      const mockData = {
        posts: [
          {
            id: 1,
            title: '2024 Lagos Real Estate Market Outlook',
            excerpt: 'Analysis of emerging trends in the Lagos property market and investment opportunities for 2024.',
            content: 'Full article content here...',
            category: 'market',
            date: '2023-12-15',
            readTime: '5 min read',
            author: 'Michael Johnson',
            authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            tags: ['Market Analysis', 'Lagos', 'Trends'],
            featured: true,
            slug: '2024-lagos-real-estate-market-outlook',
            views: 1245,
            comments: 23
          },
          // Add more posts...
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

  // Handle post actions
  const handleDeletePost = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      // API call to delete post
      setPosts(posts.filter(post => post.id !== postId));
    }
  };

  const toggleFeatured = async (postId) => {
    // API call to toggle featured status
    const updatedPosts = posts.map(post => ({
      ...post,
      featured: post.id === postId
    }));
    setPosts(updatedPosts);
    setFeaturedPost(updatedPosts.find(post => post.id === postId));
  };

  if (isAdminMode && user?.isAdmin) {
    return <BlogAdmin posts={posts} setPosts={setPosts} categories={categories} />;
  }

  return (
    <section id="blog" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Admin Toggle */}
        {user?.isAdmin && (
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsAdminMode(!isAdminMode)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isAdminMode ? '← View Blog' : 'Admin Panel'}
            </button>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentPosts.map((post) => (
                <BlogCard 
                  key={post.id} 
                  post={post}
                  onDelete={user?.isAdmin ? () => handleDeletePost(post.id) : null}
                  onToggleFeatured={user?.isAdmin ? () => toggleFeatured(post.id) : null}
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
          </div>

          {/* Sidebar */}
          <BlogSidebar 
            recentPosts={posts.slice(0, 4)}
            categories={categories}
            popularPosts={posts.sort((a, b) => b.views - a.views).slice(0, 3)}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
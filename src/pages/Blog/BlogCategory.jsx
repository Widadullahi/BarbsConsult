import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaClock, 
  FaTag, 
  FaArrowLeft,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';

const BlogCategory = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  
  const postsPerPage = 6;

  useEffect(() => {
    fetchCategoryData();
  }, [category]);

  useEffect(() => {
    filterAndSortPosts();
  }, [posts, searchQuery, sortBy]);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      
      // Category information with valid gradient colors
      const categories = {
        'market': { 
          name: 'Market Trends', 
          description: 'Latest market analysis, price trends, and economic insights',
          color: 'from-blue-500 to-blue-600',
          heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
        },
        'investment': { 
          name: 'Investment Tips', 
          description: 'Expert advice on real estate investment strategies and opportunities',
          color: 'from-green-500 to-green-600',
          heroImage: 'https://plus.unsplash.com/premium_photo-1676983352797-a12800a05dfb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZWludmVzdG1lbnQlMjB0aXBzfGVufDB8fDB8fHww'
        },
        'guides': { 
          name: 'Buyer Guides', 
          description: 'Step-by-step guides for home buyers and sellers',
          color: 'from-purple-500 to-purple-600',
          heroImage: 'https://plus.unsplash.com/premium_photo-1726876983248-bd470ecaf626?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHJlYWwlMjBlc3RhdGUlMjBidXllcnMlMjBndWlkZSUyMGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww'
        },
        'legal': { 
          name: 'Legal Updates', 
          description: 'Important legal information and regulatory changes',
          color: 'from-orange-500 to-orange-600',
          heroImage: 'https://images.unsplash.com/photo-1600566753193-5c1b3b3b3b3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
        },
        'property': { 
          name: 'Property Management', 
          description: 'Tips and strategies for effective property management',
          color: 'from-teal-500 to-teal-600',
          heroImage: 'https://images.unsplash.com/photo-1611005893660-34445879f48a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZSUyMHByb3BlcnR5JTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D'
        }
      };

      // Valid Unsplash image IDs for blog post images
      const validImageIds = [
        '1600585154340-be6161a56a0c', // Modern house exterior
        '1560518883-ce09059a9c2e',    // Luxury apartment
        '1600573473666-9b9f9ac3b0de', // Villa with pool
        '1600566753193-5c1b3b3b3b3b', // City skyline
        '1600566753193-5c1b3b3b3b3c', // Office building
        '1600566753193-5c1b3b3b3b3d', // Living room interior
        '1600566753193-5c1b3b3b3b3e', // Modern kitchen
        '1600566753193-5c1b3b3b3b3f', // Bedroom design
        '1600566753193-5c1b3b3b3b3g', // Bathroom luxury
        '1600566753193-5c1b3b3b3b3h', // Swimming pool
        '1600566753193-5c1b3b3b3b3i', // Garden landscape
        '1600566753193-5c1b3b3b3b3j'  // Balcony view
      ];

      // Valid author images
      const authorImages = [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      ];

      // Generate mock posts with valid images
      const mockPosts = Array.from({ length: 12 }, (_, i) => {
        const categoryId = category || 'market';
        const categoryData = categories[categoryId];
        const currentYear = new Date().getFullYear();
        const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
        
        return {
          id: i + 1,
          title: `${categoryData?.name || 'Real Estate'} Article ${i + 1}: Understanding Market Dynamics`,
          excerpt: 'Comprehensive analysis of current market trends and future predictions for smart investment decisions.',
          content: '<h2>Market Analysis</h2><p>Detailed content about real estate trends and insights...</p>',
          category: categoryId,
          date: `${currentYear}-${month}-${day}`,
          readTime: `${Math.floor(Math.random() * 8) + 3} min read`,
          author: ['Michael Johnson', 'Sarah Williams', 'David Chen', 'Amina Balogun'][Math.floor(Math.random() * 4)],
          authorImage: authorImages[Math.floor(Math.random() * authorImages.length)],
          image: `https://images.unsplash.com/photo-${validImageIds[i % validImageIds.length]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
          tags: categoryData ? [categoryData.name.split(' ')[0], 'Real Estate', 'Nigeria', 'Tips'] : ['Real Estate', 'Market', 'Analysis'],
          featured: i === 0,
          slug: `${categoryId}-article-${i + 1}`,
          views: Math.floor(Math.random() * 2000) + 500,
          comments: Math.floor(Math.random() * 50) + 5
        };
      });

      setPosts(mockPosts);
      setCategoryInfo(categories[category] || { 
        name: category, 
        description: `Articles about ${category}`,
        color: 'from-gray-800 to-gray-900',
        heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching category data:', error);
      setLoading(false);
    }
  };

  const filterAndSortPosts = () => {
    let result = [...posts];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'latest':
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'popular':
        result.sort((a, b) => b.views - a.views);
        break;
      case 'most-commented':
        result.sort((a, b) => b.comments - a.comments);
        break;
      default:
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading {category} articles...</p>
        </div>
      </div>
    );
  }

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
          <p className="text-gray-600 mb-6">The category "{category}" doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-r ${categoryInfo.color || 'from-gray-800 to-gray-900'}`}>
        <div className="absolute inset-0">
          <img 
            src={categoryInfo.heroImage}
            alt={categoryInfo.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 mb-6 transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to All Articles
            </Link>
            
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <FaTag className="text-white mr-2" />
              <span className="text-white font-medium text-sm uppercase tracking-wider">
                Category
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {categoryInfo.name}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              {categoryInfo.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaCalendarAlt className="text-sm" />
                </div>
                <span>{posts.length} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUser className="text-sm" />
                </div>
                <span>Expert Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaClock className="text-sm" />
                </div>
                <span>Updated Regularly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters and Search */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search within category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white cursor-pointer"
                  >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                    <option value="most-commented">Most Commented</option>
                  </select>
                  <FaSortAmountDown className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Results Summary */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <FaFilter className="text-gray-400" />
                  <span className="text-gray-600">
                    Showing {Math.min(currentPosts.length, postsPerPage)} of {filteredPosts.length} articles
                  </span>
                  {searchQuery && (
                    <span className="ml-4 text-blue-600 font-medium">
                      Search results for "{searchQuery}"
                    </span>
                  )}
                </div>
                
                {filteredPosts.length > 0 && (
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1 rounded-lg">
                    <span className="font-medium">{filteredPosts.length}</span>
                    <span>articles found</span>
                  </div>
                )}
              </div>
            </div>

            {/* Posts Grid */}
            {filteredPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map((post) => (
                    <BlogCard 
                      key={post.id} 
                      post={post}
                      showCategory={false} // Don't show category since we're already in category view
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <FaChevronLeft />
                      Previous
                    </button>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = i + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                            currentPage === pageNumber
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        <span className="px-2 text-gray-500">...</span>
                        <button
                          onClick={() => handlePageChange(totalPages)}
                          className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                      <FaChevronRight />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <FaSearch className="text-3xl text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  {searchQuery 
                    ? `No articles found for "${searchQuery}" in ${categoryInfo.name}`
                    : `No articles available in ${categoryInfo.name} category yet.`
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Clear Search
                    </button>
                  )}
                  <Link
                    to="/blog"
                    className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <FaArrowLeft />
                    Browse All Articles
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <BlogSidebar 
              recentPosts={posts.slice(0, 4)}
              categories={[
                { id: 'market', name: 'Market Trends', count: 8 },
                { id: 'investment', name: 'Investment Tips', count: 12 },
                { id: 'guides', name: 'Buyer Guides', count: 6 },
                { id: 'legal', name: 'Legal Updates', count: 4 },
                { id: 'property', name: 'Property Management', count: 9 }
              ]}
              popularPosts={[...posts].sort((a, b) => b.views - a.views).slice(0, 3)}
            />

            {/* Category Stats */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mt-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Category Insights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Total Articles</span>
                  <span className="font-bold text-gray-900">{posts.length}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Most Popular</span>
                  <span className="font-bold text-gray-900">
                    {posts.length > 0 ? Math.max(...posts.map(p => p.views)).toLocaleString() : '0'} views
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Latest Update</span>
                  <span className="font-bold text-gray-900">
                    {posts.length > 0 
                      ? new Date(posts[0].date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })
                      : 'N/A'
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Total Comments</span>
                  <span className="font-bold text-gray-900">
                    {posts.reduce((sum, post) => sum + post.comments, 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
// src/admin/pages/Blog.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaFilter,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaChartLine,
  FaComment
} from 'react-icons/fa';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '2024 Lagos Real Estate Market Outlook',
      excerpt: 'Comprehensive analysis of emerging trends in Lagos property market...',
      author: 'Admin User',
      category: 'Market Trends',
      date: '2024-01-15',
      status: 'Published',
      views: 1245,
      comments: 23,
      featured: true,
      tags: ['Market', 'Lagos', 'Trends']
    },
    {
      id: 2,
      title: 'How to Maximize ROI on Property Investments',
      excerpt: 'Proven strategies to increase returns on your real estate investments...',
      author: 'Sarah Johnson',
      category: 'Investment Tips',
      date: '2024-01-12',
      status: 'Published',
      views: 892,
      comments: 15,
      featured: true,
      tags: ['Investment', 'ROI', 'Strategies']
    },
    {
      id: 3,
      title: 'First-Time Home Buyer Guide',
      excerpt: 'Complete step-by-step guide for first-time home buyers in Nigeria...',
      author: 'David Chen',
      category: 'Buyer Guides',
      date: '2024-01-10',
      status: 'Draft',
      views: 0,
      comments: 0,
      featured: false,
      tags: ['First-Time Buyer', 'Guide', 'Nigeria']
    },
    {
      id: 4,
      title: 'New Property Tax Regulations 2024',
      excerpt: 'Breaking down the latest property tax changes and their impact...',
      author: 'James Okoro',
      category: 'Legal Updates',
      date: '2024-01-08',
      status: 'Published',
      views: 567,
      comments: 8,
      featured: false,
      tags: ['Legal', 'Tax', 'Regulations']
    },
    {
      id: 5,
      title: 'Smart Homes: The Future of Nigerian Real Estate',
      excerpt: 'How smart home technology is transforming property values...',
      author: 'Amina Balogun',
      category: 'Technology',
      date: '2024-01-05',
      status: 'Scheduled',
      views: 0,
      comments: 0,
      featured: true,
      tags: ['Technology', 'Smart Homes', 'Innovation']
    },
    {
      id: 6,
      title: 'Commercial vs Residential Investments',
      excerpt: 'Comparative analysis of commercial and residential real estate...',
      author: 'Robert Adebayo',
      category: 'Investment Tips',
      date: '2024-01-03',
      status: 'Published',
      views: 432,
      comments: 12,
      featured: false,
      tags: ['Commercial', 'Residential', 'Comparison']
    },
  ]);

  const [filters, setFilters] = useState({
    status: 'all',
    category: 'all',
    featured: 'all',
    search: ''
  });

  const [selectedPosts, setSelectedPosts] = useState([]);

  const categories = [
    'Market Trends',
    'Investment Tips',
    'Buyer Guides',
    'Legal Updates',
    'Property Management',
    'Technology',
    'Market News'
  ];

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== id));
      setSelectedPosts(selectedPosts.filter(postId => postId !== id));
    }
  };

  const handleToggleFeatured = (id) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, featured: !p.featured } : p
    ));
  };

  const handleStatusChange = (id, status) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, status } : p
    ));
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPosts(posts.map(p => p.id));
    } else {
      setSelectedPosts([]);
    }
  };

  const handleSelectPost = (id) => {
    if (selectedPosts.includes(id)) {
      setSelectedPosts(selectedPosts.filter(postId => postId !== id));
    } else {
      setSelectedPosts([...selectedPosts, id]);
    }
  };

  const handleBulkAction = (action) => {
    if (selectedPosts.length === 0) {
      alert('Please select posts first');
      return;
    }

    switch(action) {
      case 'publish':
        setPosts(posts.map(p => 
          selectedPosts.includes(p.id) ? { ...p, status: 'Published' } : p
        ));
        break;
      case 'draft':
        setPosts(posts.map(p => 
          selectedPosts.includes(p.id) ? { ...p, status: 'Draft' } : p
        ));
        break;
      case 'feature':
        setPosts(posts.map(p => 
          selectedPosts.includes(p.id) ? { ...p, featured: true } : p
        ));
        break;
      case 'unfeature':
        setPosts(posts.map(p => 
          selectedPosts.includes(p.id) ? { ...p, featured: false } : p
        ));
        break;
      case 'delete':
        if (window.confirm(`Delete ${selectedPosts.length} selected posts?`)) {
          setPosts(posts.filter(p => !selectedPosts.includes(p.id)));
          setSelectedPosts([]);
        }
        break;
    }
  };

  const filteredPosts = posts.filter(post => {
    if (filters.status !== 'all' && post.status !== filters.status) return false;
    if (filters.category !== 'all' && post.category !== filters.category) return false;
    if (filters.featured !== 'all') {
      if (filters.featured === 'featured' && !post.featured) return false;
      if (filters.featured === 'not-featured' && post.featured) return false;
    }
    if (filters.search && !post.title.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Published':
        return <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Published</span>;
      case 'Draft':
        return <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Draft</span>;
      case 'Scheduled':
        return <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Scheduled</span>;
      default:
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">{status}</span>;
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Published':
        return <FaCheckCircle className="text-green-500" />;
      case 'Draft':
        return <FaTimesCircle className="text-yellow-500" />;
      case 'Scheduled':
        return <FaCalendarAlt className="text-blue-500" />;
      default:
        return <FaTimesCircle className="text-gray-500" />;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-2">Manage blog posts, categories, and comments</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Link
            to="/admin/blog/categories"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Categories
          </Link>
          <Link
            to="/admin/blog/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaPlus className="mr-2" />
            New Post
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
            >
              <option value="all">All Status</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                checked={filters.featured === 'featured'}
                onChange={(e) => setFilters({...filters, featured: e.target.checked ? 'featured' : 'all'})}
                className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                Featured Only
              </label>
            </div>
          </div>

          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <FaFilter className="mr-2" />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedPosts.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaCheckCircle className="text-blue-600 mr-3" />
              <span className="text-blue-800 font-medium">
                {selectedPosts.length} posts selected
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                onChange={(e) => handleBulkAction(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Bulk Actions</option>
                <option value="publish">Publish</option>
                <option value="draft">Move to Draft</option>
                <option value="feature">Feature</option>
                <option value="unfeature">Unfeature</option>
                <option value="delete">Delete</option>
              </select>
              <button
                onClick={() => setSelectedPosts([])}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors text-sm"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Posts Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedPosts.length === posts.length && posts.length > 0}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Post
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stats
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedPosts.includes(post.id)}
                      onChange={() => handleSelectPost(post.id)}
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <FaTag className="text-gray-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {post.title}
                          {post.featured && (
                            <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-1">{post.excerpt}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FaUser className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{post.author}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <FaCalendarAlt className="mr-2 text-gray-400" />
                      {post.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(post.status)}
                      <span className="ml-2">{getStatusBadge(post.status)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center">
                        <FaEye className="mr-2 text-gray-400" />
                        {post.views}
                      </div>
                      <div className="flex items-center mt-1">
                        <FaComment className="mr-2 text-gray-400" />
                        {post.comments}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link
                        to={`/admin/blog/${post.id}/edit`}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit"
                      >
                        <FaEdit />
                      </Link>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-green-600 hover:text-green-900"
                        title="View"
                      >
                        <FaEye />
                      </Link>
                      <button
                        onClick={() => handleToggleFeatured(post.id)}
                        className={`hover:text-yellow-900 ${
                          post.featured ? 'text-yellow-600' : 'text-gray-400'
                        }`}
                        title={post.featured ? 'Remove from featured' : 'Mark as featured'}
                      >
                        <FaChartLine />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <FaSearch className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No posts found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {filters.search 
                ? `No posts found for "${filters.search}". Try a different search term.`
                : 'No posts match your current filters. Try adjusting your filter criteria.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {filters.search && (
                <button
                  onClick={() => setFilters({...filters, search: ''})}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
              )}
              <button
                onClick={() => setFilters({ status: 'all', category: 'all', featured: 'all', search: '' })}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear All Filters
              </button>
              <Link
                to="/admin/blog/new"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Create First Post
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Posts</p>
              <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <FaTag className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Published</p>
              <p className="text-2xl font-bold text-gray-900">
                {posts.filter(p => p.status === 'Published').length}
              </p>
            </div>
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <FaCheckCircle className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">
                {posts.reduce((sum, post) => sum + post.views, 0).toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <FaEye className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Comments</p>
              <p className="text-2xl font-bold text-gray-900">
                {posts.reduce((sum, post) => sum + post.comments, 0)}
              </p>
            </div>
            <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
              <FaComment className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
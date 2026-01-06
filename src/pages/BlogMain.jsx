// pages/BlogMain.jsx - Main blog listing page
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogFeatured from '../components/blog/BlogFeatured';
import BlogCard from '../components/blog/BlogCard';
import BlogSidebar from '../components/blog/BlogSidebar';

const BlogMain = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      // Mock data - replace with actual API call
      const mockData = {
        posts: [
          {
            id: 1,
            title: '2024 Real Estate Market Outlook in Nigeria',
            excerpt: 'Comprehensive analysis of emerging trends and investment opportunities in the Nigerian real estate market for 2024.',
            content: 'Full article content...',
            category: 'market',
            date: '2024-01-15',
            readTime: '5 min read',
            author: 'Michael Johnson',
            authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            tags: ['Market Analysis', 'Nigeria', 'Trends', 'Investment'],
            featured: true,
            slug: '2024-real-estate-market-outlook-nigeria',
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
      setFeaturedPost(mockData.posts.find(post => post.featured));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blog data:', error);
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    if (activeCategory === 'all') return true;
    return post.category === activeCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Estate <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert analysis, market trends, and actionable advice for your real estate journey
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && <BlogFeatured post={featuredPost} />}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-8">
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
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <BlogSidebar 
              recentPosts={posts.slice(0, 4)}
              categories={categories}
              popularPosts={[...posts].sort((a, b) => b.views - a.views).slice(0, 3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
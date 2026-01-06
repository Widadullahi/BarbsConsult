// components/Blog/BlogSidebar.jsx
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt,
  FaUser,
  FaFire,
  FaTag,
  FaEnvelope
} from 'react-icons/fa';

const BlogSidebar = ({ recentPosts, categories, popularPosts }) => {
  return (
    <div className="space-y-8">
      {/* Categories */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/blog/category/${category.id}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </span>
              </div>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <FaFire className="text-orange-500" />
          <h3 className="text-xl font-bold text-gray-900">Popular Posts</h3>
        </div>
        <div className="space-y-6">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <FaCalendarAlt />
                  <span>{new Date(post.date).toLocaleDateString('short')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
        <p className="text-blue-100 mb-6">
          Get the latest real estate insights and market updates directly in your inbox.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-blue-200 text-white outline-none focus:bg-white/20 focus:border-white/30"
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-blue-200 mt-4">
          No spam. Unsubscribe at any time.
        </p>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex items-center gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <FaCalendarAlt />
                  <span>{new Date(post.date).toLocaleDateString('short')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
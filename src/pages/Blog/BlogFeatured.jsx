// components/Blog/BlogFeatured.jsx
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaClock,
  FaTag
} from 'react-icons/fa';

const BlogFeatured = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="relative mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl p-8">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
            Featured Article
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
              {post.title}
            </Link>
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            {post.excerpt}
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <img 
                src={post.authorImage} 
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <FaCalendarAlt />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <FaClock />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-full"
              >
                <FaTag className="text-xs" />
                {tag}
              </span>
            ))}
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 w-fit"
          >
            Read Full Article
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* Image */}
        <div className="relative h-80 lg:h-full overflow-hidden rounded-xl">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default BlogFeatured;
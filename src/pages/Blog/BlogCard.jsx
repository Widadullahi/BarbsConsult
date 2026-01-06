// components/Blog/BlogCard.jsx
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaTag,
  FaShareAlt,
  FaBookmark,
  FaClock,
  FaEdit,
  FaTrash,
  FaStar
} from 'react-icons/fa';

const BlogCard = ({ post, onDelete, onToggleFeatured }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
        
        {/* Admin Actions */}
        {onDelete && onToggleFeatured && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onToggleFeatured(post.id)}
              className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              title={post.featured ? 'Remove from featured' : 'Mark as featured'}
            >
              <FaStar className={post.featured ? 'text-white' : 'text-gray-300'} />
            </button>
            <Link
              to={`/admin/blog/edit/${post.id}`}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              title="Edit post"
            >
              <FaEdit />
            </Link>
            <button
              onClick={() => onDelete(post.id)}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              title="Delete post"
            >
              <FaTrash />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUser />
            <span>{post.author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              <FaTag className="text-xs" />
              {tag}
            </span>
          ))}
        </div>

        {/* Stats & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{post.views} views</span>
            <span>{post.comments} comments</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="Share">
              <FaShareAlt />
            </button>
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="Save">
              <FaBookmark />
            </button>
            <Link
              to={`/blog/${post.slug}`}
              className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Read More
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
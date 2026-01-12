 // pages/BlogSingle.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaTag,
  FaShareAlt,
  FaBookmark,
  FaArrowLeft,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';
import BlogSidebar from './BlogSidebar';
import BlogMain from './BlogMain';

const BlogSingle = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch post data
    fetchPostData();
    // Increment view count
    incrementViewCount();
  }, [slug]);

  const fetchPostData = async () => {
    // API call to fetch single post
    // This is mock data
    const mockPost = {
      id: 1,
      title: '2024 Lagos Real Estate Market Outlook',
      content: '<p>Full article content here...</p>',
      category: 'market',
      date: '2023-12-15',
      readTime: '5 min read',
      author: 'Michael Johnson',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      authorBio: 'Real Estate Analyst with 10+ years experience',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Market Analysis', 'Lagos', 'Trends'],
      featured: true,
      views: 1245,
      comments: 23
    };

    setPost(mockPost);
    setRelatedPosts([mockPost, mockPost, mockPost]); // Mock related posts
  };

  const incrementViewCount = async () => {
    // API call to increment view count
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    // API call to submit comment
    const comment = {
      id: Date.now(),
      author: 'Current User',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      content: newComment,
      date: new Date().toISOString(),
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-96">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="relative pt-32 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link 
              to="/BlogMain"
              className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6"
            >
              <FaArrowLeft />
              Back to Blog
            </Link>
            
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-3">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm opacity-80">{post.authorBio}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Content */}
            <article className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12 p-6 bg-gray-50 rounded-xl">
              <FaTag className="text-gray-500 mt-1" />
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center justify-between p-6 border-t border-b border-gray-200 mb-12">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <FaBookmark />
                  Save Article
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Share:</span>
                <div className="flex gap-3">
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                    <FaFacebook />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-400 rounded-lg hover:bg-blue-200 transition-colors">
                    <FaTwitter />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    <FaLinkedin />
                  </button>
                  <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                    <FaWhatsapp />
                  </button>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Comments ({post.comments})
              </h3>
              
              {/* Comment Form */}
              <form onSubmit={handleSubmitComment} className="mb-8">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none mb-4"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="p-6 bg-gray-50 rounded-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={comment.authorImage} 
                        alt={comment.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{comment.author}</div>
                        <div className="text-sm text-gray-500">
                          {new Date(comment.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <BlogSidebar 
              recentPosts={relatedPosts}
              categories={[]}
              popularPosts={relatedPosts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
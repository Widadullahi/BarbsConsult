// pages/admin/BlogAdmin.jsx - Blog admin dashboard
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaPlus,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaUpload,
  FaEye,
  FaChartLine,
  FaUsers,
  FaNewspaper
} from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'market',
    tags: [],
    image: '',
    author: '',
    authorImage: '',
    readTime: '5 min read',
    featured: false
  });

  // Add your admin form logic here (similar to the BlogAdmin component from earlier)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Blog Admin Dashboard</h1>
          <p className="text-gray-600">Manage your blog posts and content</p>
        </div>
        
        {/* Add admin interface here */}
        <div className="text-center py-12">
          <p className="text-gray-600">Admin interface implementation pending...</p>
          <button
            onClick={() => navigate('/blog')}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
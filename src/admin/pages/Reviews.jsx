// src/admin/pages/Reviews.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaStar, 
  FaUser, 
  FaHome, 
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaFilter,
  FaEye,
  FaEdit,
  FaTrash,
  FaReply,
  FaThumbsUp,
  FaThumbsDown
} from 'react-icons/fa';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      property: 'Luxury Villa Ikoyi',
      client: 'David Wilson',
      rating: 5,
      title: 'Excellent Service!',
      comment: 'The team was professional and helped us find our dream home. Highly recommended!',
      date: '2024-01-15',
      status: 'Published',
      helpful: 12,
      notHelpful: 2,
      verified: true,
      response: 'Thank you for your kind words, David! We\'re thrilled you found your dream home with us.',
      responseDate: '2024-01-16'
    },
    {
      id: 2,
      property: '3-Bedroom Lekki',
      client: 'Sarah Johnson',
      rating: 4,
      title: 'Good Experience',
      comment: 'Good service overall. The property was as described. Could improve on response time.',
      date: '2024-01-14',
      status: 'Published',
      helpful: 8,
      notHelpful: 1,
      verified: true,
      response: 'Thank you for your feedback, Sarah. We\'re working on improving our response times.',
      responseDate: '2024-01-15'
    },
    {
      id: 3,
      property: 'Office Space VI',
      client: 'Michael Chen',
      rating: 2,
      title: 'Disappointing',
      comment: 'The property wasn\'t as advertised. Several issues were not disclosed upfront.',
      date: '2024-01-13',
      status: 'Pending',
      helpful: 5,
      notHelpful: 3,
      verified: false,
      response: null
    },
    {
      id: 4,
      property: 'Serviced Apartment',
      client: 'Grace Okoro',
      rating: 5,
      title: 'Perfect for Business Trips',
      comment: 'Clean, well-equipped, and in a great location. Will definitely book again.',
      date: '2024-01-12',
      status: 'Published',
      helpful: 15,
      notHelpful: 0,
      verified: true,
      response: 'We\'re glad you enjoyed your stay, Grace! Looking forward to hosting you again.',
      responseDate: '2024-01-13'
    },
    {
      id: 5,
      property: 'Land Ajah',
      client: 'James Anderson',
      rating: 3,
      title: 'Average Experience',
      comment: 'The property was okay but the documentation process took longer than expected.',
      date: '2024-01-11',
      status: 'Published',
      helpful: 4,
      notHelpful: 2,
      verified: true,
      response: 'Thank you for your feedback. We\'re streamlining our documentation process.',
      responseDate: '2024-01-12'
    },
    {
      id: 6,
      property: 'Commercial Space',
      client: 'Amina Balogun',
      rating: 1,
      title: 'Very Poor Service',
      comment: 'Multiple issues with the property and no follow-up from the agent.',
      date: '2024-01-10',
      status: 'Pending',
      helpful: 3,
      notHelpful: 8,
      verified: false,
      response: null
    },
  ]);

  const [filters, setFilters] = useState({
    status: 'all',
    rating: 'all',
    verified: 'all',
    search: ''
  });

  const [selectedReviews, setSelectedReviews] = useState([]);
  const [responseText, setResponseText] = useState('');
  const [respondingTo, setRespondingTo] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReviews(reviews.filter(r => r.id !== id));
      setSelectedReviews(selectedReviews.filter(reviewId => reviewId !== id));
    }
  };

  const handleStatusChange = (id, status) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, status } : review
    ));
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedReviews(reviews.map(r => r.id));
    } else {
      setSelectedReviews([]);
    }
  };

  const handleSelectReview = (id) => {
    if (selectedReviews.includes(id)) {
      setSelectedReviews(selectedReviews.filter(reviewId => reviewId !== id));
    } else {
      setSelectedReviews([...selectedReviews, id]);
    }
  };

  const handleBulkAction = (action) => {
    if (selectedReviews.length === 0) {
      alert('Please select reviews first');
      return;
    }

    switch(action) {
      case 'publish':
        setReviews(reviews.map(r => 
          selectedReviews.includes(r.id) ? { ...r, status: 'Published' } : r
        ));
        break;
      case 'pending':
        setReviews(reviews.map(r => 
          selectedReviews.includes(r.id) ? { ...r, status: 'Pending' } : r
        ));
        break;
      case 'delete':
        if (window.confirm(`Delete ${selectedReviews.length} selected reviews?`)) {
          setReviews(reviews.filter(r => !selectedReviews.includes(r.id)));
          setSelectedReviews([]);
        }
        break;
    }
  };

  const handleSubmitResponse = (reviewId) => {
    if (!responseText.trim()) return;

    setReviews(reviews.map(review => 
      review.id === reviewId ? { 
        ...review, 
        response: responseText,
        responseDate: new Date().toISOString().split('T')[0]
      } : review
    ));

    setResponseText('');
    setRespondingTo(null);
  };

  const handleHelpful = (id) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, helpful: review.helpful + 1 } : review
    ));
  };

  const handleNotHelpful = (id) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, notHelpful: review.notHelpful + 1 } : review
    ));
  };

  const filteredReviews = reviews.filter(review => {
    if (filters.status !== 'all' && review.status !== filters.status) return false;
    if (filters.rating !== 'all' && review.rating !== parseInt(filters.rating)) return false;
    if (filters.verified !== 'all') {
      if (filters.verified === 'verified' && !review.verified) return false;
      if (filters.verified === 'not-verified' && review.verified) return false;
    }
    if (filters.search && !review.client.toLowerCase().includes(filters.search.toLowerCase()) && 
        !review.property.toLowerCase().includes(filters.search.toLowerCase()) &&
        !review.title.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Published':
        return <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Published</span>;
      case 'Pending':
        return <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Pending</span>;
      case 'Spam':
        return <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">Spam</span>;
      default:
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">{status}</span>;
    }
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Reviews Management</h1>
          <p className="text-gray-600 mt-2">Manage and respond to property reviews</p>
        </div>
      </div>

      {/* Rating Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-5xl font-bold text-gray-900 mr-4">{averageRating}</div>
              <div>
                {renderStars(Math.round(averageRating))}
                <div className="text-gray-600 mt-2">{reviews.length} total reviews</div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-lg">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = ratingDistribution[stars];
                const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                
                return (
                  <div key={stars} className="flex items-center">
                    <div className="w-16 text-sm text-gray-600">
                      {stars} star{stars > 1 ? 's' : ''}
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-12 text-sm text-gray-600 text-right">
                      {count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search reviews..."
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.rating}
              onChange={(e) => setFilters({...filters, rating: e.target.value})}
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
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
              <option value="Pending">Pending</option>
              <option value="Spam">Spam</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="verified"
                checked={filters.verified === 'verified'}
                onChange={(e) => setFilters({...filters, verified: e.target.checked ? 'verified' : 'all'})}
                className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="verified" className="ml-2 text-sm text-gray-700">
                Verified Only
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
      {selectedReviews.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaCheckCircle className="text-blue-600 mr-3" />
              <span className="text-blue-800 font-medium">
                {selectedReviews.length} reviews selected
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                onChange={(e) => handleBulkAction(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Bulk Actions</option>
                <option value="publish">Publish</option>
                <option value="pending">Move to Pending</option>
                <option value="delete">Delete</option>
              </select>
              <button
                onClick={() => setSelectedReviews([])}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors text-sm"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between">
              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUser className="text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-bold text-gray-900">{review.client}</h3>
                        {review.verified && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        Review for <Link to="#" className="text-blue-600 hover:text-blue-700">{review.property}</Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedReviews.includes(review.id)}
                      onChange={() => handleSelectReview(review.id)}
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{review.date}</div>
                      <div className="mt-1">{getStatusBadge(review.status)}</div>
                    </div>
                  </div>
                </div>

                {/* Rating and Title */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm text-gray-600">{review.rating}.0</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{review.title}</h4>
                </div>

                {/* Review Comment */}
                <p className="text-gray-700 mb-4">{review.comment}</p>

                {/* Helpful Stats */}
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    onClick={() => handleHelpful(review.id)}
                    className="flex items-center text-sm text-gray-600 hover:text-green-600"
                  >
                    <FaThumbsUp className="mr-1" />
                    Helpful ({review.helpful})
                  </button>
                  <button
                    onClick={() => handleNotHelpful(review.id)}
                    className="flex items-center text-sm text-gray-600 hover:text-red-600"
                  >
                    <FaThumbsDown className="mr-1" />
                    Not Helpful ({review.notHelpful})
                  </button>
                </div>

                {/* Response */}
                {review.response && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center mb-2">
                      <FaReply className="text-blue-600 mr-2" />
                      <span className="font-medium text-blue-900">Your Response</span>
                      <span className="ml-2 text-sm text-gray-500">{review.responseDate}</span>
                    </div>
                    <p className="text-blue-800">{review.response}</p>
                  </div>
                )}

                {/* Response Form */}
                {respondingTo === review.id ? (
                  <div className="mt-4">
                    <textarea
                      value={responseText}
                      onChange={(e) => setResponseText(e.target.value)}
                      placeholder="Write your response..."
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none mb-2"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSubmitResponse(review.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Submit Response
                      </button>
                      <button
                        onClick={() => {
                          setRespondingTo(null);
                          setResponseText('');
                        }}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : !review.response && (
                  <button
                    onClick={() => setRespondingTo(review.id)}
                    className="flex items-center text-blue-600 hover:text-blue-700 mt-2"
                  >
                    <FaReply className="mr-2" />
                    Respond to this review
                  </button>
                )}
              </div>

              {/* Actions */}
              <div className="mt-4 md:mt-0 md:ml-6 flex space-x-2">
                <select
                  value={review.status}
                  onChange={(e) => handleStatusChange(review.id, e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="Published">Publish</option>
                  <option value="Pending">Pending</option>
                  <option value="Spam">Mark as Spam</option>
                </select>
                <button
                  onClick={() => handleDelete(review.id)}
                  className="p-2 text-red-600 hover:text-red-900 bg-red-50 rounded"
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <FaStar className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No reviews found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {filters.search 
                ? `No reviews found for "${filters.search}"`
                : 'No reviews match your current filters.'
              }
            </p>
            <button
              onClick={() => setFilters({ status: 'all', rating: 'all', verified: 'all', search: '' })}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Published Reviews</p>
              <p className="text-2xl font-bold text-gray-900">
                {reviews.filter(r => r.status === 'Published').length}
              </p>
            </div>
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <FaCheckCircle className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Review</p>
              <p className="text-2xl font-bold text-gray-900">
                {reviews.filter(r => r.status === 'Pending').length}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
              <FaClock className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Response Rate</p>
              <p className="text-2xl font-bold text-gray-90  0">
                {reviews.length > 0 
                  ? Math.round((reviews.filter(r => r.response).length / reviews.length) * 100) 
                  : 0}%
              </p>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <FaReply className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
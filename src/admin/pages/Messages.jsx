// src/admin/pages/Messages.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaEnvelopeOpen, 
  FaReply, 
  FaTrash, 
  FaStar,
  FaFilter,
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'David Wilson',
      email: 'david@example.com',
      phone: '+234 801 234 5678',
      subject: 'Inquiry about Lekki Property',
      message: 'I am interested in the 3-bedroom apartment in Lekki Phase 1...',
      date: '2024-01-15 14:30',
      status: 'unread',
      property: 'Luxury Villa Ikoyi',
      important: true,
      type: 'property'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+234 802 345 6789',
      subject: 'General Inquiry',
      message: 'I would like to schedule a consultation about property investment...',
      date: '2024-01-14 11:20',
      status: 'read',
      property: null,
      important: true,
      type: 'general'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael@example.com',
      phone: '+234 803 456 7890',
      subject: 'Property Viewing Request',
      message: 'Can we schedule a viewing for the commercial space in VI?',
      date: '2024-01-13 16:45',
      status: 'read',
      property: 'Office Space VI',
      important: false,
      type: 'viewing'
    },
    {
      id: 4,
      name: 'Grace Okoro',
      email: 'grace@example.com',
      phone: '+234 804 567 8901',
      subject: 'Investment Advice Needed',
      message: 'Looking for guidance on real estate investment opportunities...',
      date: '2024-01-12 09:15',
      status: 'unread',
      property: null,
      important: false,
      type: 'investment'
    },
    {
      id: 5,
      name: 'James Anderson',
      email: 'james@example.com',
      phone: '+234 805 678 9012',
      subject: 'Property Management Inquiry',
      message: 'Interested in your property management services for my apartment...',
      date: '2024-01-11 13:30',
      status: 'read',
      property: 'Serviced Apartment',
      important: false,
      type: 'management'
    },
    {
      id: 6,
      name: 'Amina Balogun',
      email: 'amina@example.com',
      phone: '+234 806 789 0123',
      subject: 'Urgent: Flood Risk Assessment',
      message: 'Need immediate assessment for a property in Ajah area...',
      date: '2024-01-10 10:00',
      status: 'unread',
      property: 'Land Ajah',
      important: true,
      type: 'assessment'
    },
  ]);

  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    important: 'all',
    search: ''
  });

  const [selectedMessages, setSelectedMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const messageTypes = [
    { id: 'property', name: 'Property Inquiry', color: 'bg-blue-100 text-blue-800' },
    { id: 'general', name: 'General Inquiry', color: 'bg-green-100 text-green-800' },
    { id: 'viewing', name: 'Viewing Request', color: 'bg-purple-100 text-purple-800' },
    { id: 'investment', name: 'Investment', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'management', name: 'Management', color: 'bg-orange-100 text-orange-800' },
    { id: 'assessment', name: 'Assessment', color: 'bg-red-100 text-red-800' },
  ];

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    // Mark as read when selected
    if (message.status === 'unread') {
      setMessages(messages.map(m => 
        m.id === message.id ? { ...m, status: 'read' } : m
      ));
    }
  };

  const handleMarkAsRead = (id) => {
    setMessages(messages.map(m => 
      m.id === id ? { ...m, status: 'read' } : m
    ));
  };

  const handleMarkAsUnread = (id) => {
    setMessages(messages.map(m => 
      m.id === id ? { ...m, status: 'unread' } : m
    ));
  };

  const handleToggleImportant = (id) => {
    setMessages(messages.map(m => 
      m.id === id ? { ...m, important: !m.important } : m
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(m => m.id !== id));
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedMessages(messages.map(m => m.id));
    } else {
      setSelectedMessages([]);
    }
  };

  const handleSelectSingle = (id) => {
    if (selectedMessages.includes(id)) {
      setSelectedMessages(selectedMessages.filter(msgId => msgId !== id));
    } else {
      setSelectedMessages([...selectedMessages, id]);
    }
  };

  const handleBulkAction = (action) => {
    if (selectedMessages.length === 0) {
      alert('Please select messages first');
      return;
    }

    switch(action) {
      case 'mark-read':
        setMessages(messages.map(m => 
          selectedMessages.includes(m.id) ? { ...m, status: 'read' } : m
        ));
        break;
      case 'mark-unread':
        setMessages(messages.map(m => 
          selectedMessages.includes(m.id) ? { ...m, status: 'unread' } : m
        ));
        break;
      case 'mark-important':
        setMessages(messages.map(m => 
          selectedMessages.includes(m.id) ? { ...m, important: true } : m
        ));
        break;
      case 'mark-unimportant':
        setMessages(messages.map(m => 
          selectedMessages.includes(m.id) ? { ...m, important: false } : m
        ));
        break;
      case 'delete':
        if (window.confirm(`Delete ${selectedMessages.length} selected messages?`)) {
          setMessages(messages.filter(m => !selectedMessages.includes(m.id)));
          setSelectedMessages([]);
          if (selectedMessage && selectedMessages.includes(selectedMessage.id)) {
            setSelectedMessage(null);
          }
        }
        break;
    }
  };

  const filteredMessages = messages.filter(msg => {
    if (filters.status !== 'all' && msg.status !== filters.status) return false;
    if (filters.type !== 'all' && msg.type !== filters.type) return false;
    if (filters.important !== 'all') {
      if (filters.important === 'important' && !msg.important) return false;
      if (filters.important === 'not-important' && msg.important) return false;
    }
    if (filters.search && !msg.subject.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const unreadCount = messages.filter(m => m.status === 'unread').length;
  const importantCount = messages.filter(m => m.important).length;

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Messages List */}
      <div className={`${selectedMessage ? 'lg:w-1/2' : 'w-full'}`}>
        {/* Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Messages</h2>
              <p className="text-gray-600 mt-1">
                {filteredMessages.length} messages • {unreadCount} unread • {importantCount} important
              </p>
            </div>
            <div className="flex space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
              >
                <option value="all">All Status</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedMessages.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaCheckCircle className="text-blue-600 mr-3" />
                <span className="text-blue-800 font-medium">
                  {selectedMessages.length} messages selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  onChange={(e) => handleBulkAction(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="">Bulk Actions</option>
                  <option value="mark-read">Mark as Read</option>
                  <option value="mark-unread">Mark as Unread</option>
                  <option value="mark-important">Mark as Important</option>
                  <option value="mark-unimportant">Mark as Not Important</option>
                  <option value="delete">Delete</option>
                </select>
                <button
                  onClick={() => setSelectedMessages([])}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors text-sm"
                >
                  Clear Selection
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Messages List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {filteredMessages.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-3xl text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No messages found</h3>
              <p className="text-gray-600 mb-8">
                {filters.search 
                  ? `No messages found for "${filters.search}"`
                  : 'No messages match your current filters.'
                }
              </p>
              <button
                onClick={() => setFilters({ status: 'all', type: 'all', important: 'all', search: '' })}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredMessages.map((message) => {
                const messageType = messageTypes.find(t => t.id === message.type);
                return (
                  <div 
                    key={message.id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedMessage?.id === message.id ? 'bg-blue-50' : ''
                    } ${message.status === 'unread' ? 'bg-blue-50/50' : ''}`}
                    onClick={() => handleSelectMessage(message)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            checked={selectedMessages.includes(message.id)}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleSelectSingle(message.id);
                            }}
                            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {message.status === 'unread' ? (
                                <FaEnvelope className="text-blue-600" />
                              ) : (
                                <FaEnvelopeOpen className="text-gray-400" />
                              )}
                              <h4 className="font-medium text-gray-900">
                                {message.name}
                                {message.important && (
                                  <FaStar className="inline ml-2 text-yellow-500" />
                                )}
                              </h4>
                            </div>
                            <span className="text-xs text-gray-500">{message.date}</span>
                          </div>
                          <p className="text-sm font-medium text-gray-900 mt-1">{message.subject}</p>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-1">{message.message}</p>
                          <div className="flex items-center space-x-3 mt-2">
                            <span className={`px-2 py-0.5 text-xs rounded ${messageType?.color}`}>
                              {messageType?.name}
                            </span>
                            {message.property && (
                              <span className="text-xs text-gray-500">
                                Property: {message.property}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => handleToggleImportant(message.id)}
                          className={`p-1 rounded ${
                            message.important ? 'text-yellow-500' : 'text-gray-400'
                          }`}
                          title={message.important ? 'Mark as not important' : 'Mark as important'}
                        >
                          <FaStar />
                        </button>
                        <button
                          onClick={() => handleDelete(message.id)}
                          className="p-1 text-red-400 hover:text-red-600 rounded"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Message Detail */}
      {selectedMessage && (
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
            {/* Message Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUser className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedMessage.name}</h3>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-sm text-gray-600">{selectedMessage.email}</span>
                      <span className="text-sm text-gray-600">•</span>
                      <span className="text-sm text-gray-600">{selectedMessage.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggleImportant(selectedMessage.id)}
                  className={`p-2 rounded-lg ${
                    selectedMessage.important 
                      ? 'bg-yellow-100 text-yellow-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                  title={selectedMessage.important ? 'Mark as not important' : 'Mark as important'}
                >
                  <FaStar />
                </button>
                <button
                  onClick={() => selectedMessage.status === 'unread' 
                    ? handleMarkAsRead(selectedMessage.id) 
                    : handleMarkAsUnread(selectedMessage.id)}
                  className="p-2 bg-blue-100 text-blue-600 rounded-lg"
                  title={selectedMessage.status === 'unread' ? 'Mark as read' : 'Mark as unread'}
                >
                  {selectedMessage.status === 'unread' ? <FaEnvelopeOpen /> : <FaEnvelope />}
                </button>
              </div>
            </div>

            {/* Message Details */}
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{selectedMessage.subject}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {selectedMessage.date}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded ${
                    messageTypes.find(t => t.id === selectedMessage.type)?.color
                  }`}>
                    {messageTypes.find(t => t.id === selectedMessage.type)?.name}
                  </span>
                </div>
              </div>

              {selectedMessage.property && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">Related Property</h5>
                  <p className="text-blue-800">{selectedMessage.property}</p>
                </div>
              )}

              {/* Message Content */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Message</h5>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 whitespace-pre-line">{selectedMessage.message}</p>
                </div>
              </div>

              {/* Reply Form */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Reply to {selectedMessage.name}</h5>
                <textarea
                  rows="4"
                  placeholder="Type your reply here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none mb-4"
                />
                <div className="flex space-x-3">
                  <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <FaReply className="mr-2" />
                    Send Reply
                  </button>
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="px-6 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <FaTrash className="mr-2 inline" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
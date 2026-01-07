// src/admin/components/StatCard.jsx
import { Link } from 'react-router-dom';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const StatCard = ({ title, value, change, icon, color, link }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600 mb-2">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            <div className={`inline-flex items-center mt-2 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
              {change}
            </div>
          </div>
          <div className={`p-3 rounded-lg ${color} text-white`}>
            {icon}
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">
            View details →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StatCard;
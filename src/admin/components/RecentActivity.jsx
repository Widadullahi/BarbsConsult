// src/admin/components/RecentActivity.jsx
import { Link } from 'react-router-dom';

const RecentActivity = ({ activities }) => {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${activity.color} bg-opacity-10`}>
            {activity.icon}
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-900">
              <span className="font-medium">{activity.user}</span> {activity.action}{' '}
              <Link to="#" className="text-blue-600 hover:text-blue-700">
                {activity.target}
              </Link>
            </p>
            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
          </div>
          <Link to="#" className="text-blue-600 hover:text-blue-700 text-sm">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
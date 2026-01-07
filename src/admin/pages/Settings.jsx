// src/admin/pages/Settings.jsx
import { useState } from 'react';
import { 
  FaSave, 
  FaGlobe, 
  FaEnvelope, 
  FaCreditCard, 
  FaShieldAlt,
  FaBell,
  FaPalette,
  FaUsers,
  FaCog,
  FaCheckCircle
} from 'react-icons/fa';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'Barbs Consult',
    siteDescription: 'A REAL ESTATE INVESTMENT & PROPERTY MANAGEMENT COMPANY',
    contactEmail: 'info@barbs-consultant.com',
    contactPhone: '+234 123 456 7890',
    officeAddress: '123 Business Street, Lagos, Nigeria',
    
    // Website Settings
    maintenanceMode: false,
    allowComments: true,
    allowRegistration: true,
    
    // Payment Settings
    currency: 'NGN',
    currencySymbol: '₦',
    paymentMethods: ['bank-transfer', 'card', 'paypal'],
    taxRate: 7.5,
    
    // Email Settings
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUsername: '',
    smtpPassword: '',
    
    // Security Settings
    twoFactorAuth: false,
    loginAttempts: 5,
    sessionTimeout: 30,
    
    // Notification Settings
    emailNotifications: true,
    propertyAlerts: true,
    blogNotifications: true,
    userNotifications: true,
  });

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSaving(false);
    setSaved(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'general', name: 'General', icon: <FaCog /> },
    { id: 'website', name: 'Website', icon: <FaGlobe /> },
    { id: 'payment', name: 'Payment', icon: <FaCreditCard /> },
    { id: 'email', name: 'Email', icon: <FaEnvelope /> },
    { id: 'security', name: 'Security', icon: <FaShieldAlt /> },
    { id: 'notifications', name: 'Notifications', icon: <FaBell /> },
    { id: 'appearance', name: 'Appearance', icon: <FaPalette /> },
    { id: 'users', name: 'Users & Roles', icon: <FaUsers /> },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">General Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone
                </label>
                <input
                  type="text"
                  value={settings.contactPhone}
                  onChange={(e) => setSettings({...settings, contactPhone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Office Address
                </label>
                <textarea
                  value={settings.officeAddress}
                  onChange={(e) => setSettings({...settings, officeAddress: e.target.value})}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>
        );

      case 'website':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Website Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={(e) => setSettings({...settings, maintenanceMode: e.target.checked})}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="maintenanceMode" className="ml-2 text-sm text-gray-700">
                  Enable Maintenance Mode
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="allowComments"
                  checked={settings.allowComments}
                  onChange={(e) => setSettings({...settings, allowComments: e.target.checked})}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="allowComments" className="ml-2 text-sm text-gray-700">
                  Allow Comments on Blog Posts
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="allowRegistration"
                  checked={settings.allowRegistration}
                  onChange={(e) => setSettings({...settings, allowRegistration: e.target.checked})}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="allowRegistration" className="ml-2 text-sm text-gray-700">
                  Allow User Registration
                </label>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select
                  value={settings.currency}
                  onChange={(e) => setSettings({...settings, currency: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="NGN">Nigerian Naira (₦)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                  <option value="GBP">British Pound (£)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Rate (%)
                </label>
                <input
                  type="number"
                  value={settings.taxRate}
                  onChange={(e) => setSettings({...settings, taxRate: parseFloat(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  step="0.1"
                  min="0"
                  max="100"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Methods
              </label>
              <div className="space-y-2">
                {['bank-transfer', 'card', 'paypal', 'flutterwave', 'remita'].map((method) => (
                  <div key={method} className="flex items-center">
                    <input
                      type="checkbox"
                      id={method}
                      checked={settings.paymentMethods.includes(method)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSettings({
                            ...settings,
                            paymentMethods: [...settings.paymentMethods, method]
                          });
                        } else {
                          setSettings({
                            ...settings,
                            paymentMethods: settings.paymentMethods.filter(m => m !== method)
                          });
                        }
                      }}
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={method} className="ml-2 text-sm text-gray-700 capitalize">
                      {method.replace('-', ' ')}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Email Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SMTP Host
                </label>
                <input
                  type="text"
                  value={settings.smtpHost}
                  onChange={(e) => setSettings({...settings, smtpHost: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SMTP Port
                </label>
                <input
                  type="text"
                  value={settings.smtpPort}
                  onChange={(e) => setSettings({...settings, smtpPort: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SMTP Username
                </label>
                <input
                  type="text"
                  value={settings.smtpUsername}
                  onChange={(e) => setSettings({...settings, smtpUsername: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SMTP Password
                </label>
                <input
                  type="password"
                  value={settings.smtpPassword}
                  onChange={(e) => setSettings({...settings, smtpPassword: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{tabs.find(t => t.id === activeTab)?.name} Settings</h3>
            <p className="text-gray-600">
              Configure {tabs.find(t => t.id === activeTab)?.name?.toLowerCase()} settings here.
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">System Settings</h1>
          <p className="text-gray-600 mt-2">Configure your website and system preferences</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center disabled:opacity-50"
          >
            {saving ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <FaSave className="mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      {saved && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
          <FaCheckCircle className="text-green-500 mr-3" />
          <span className="text-green-800 font-medium">Settings saved successfully!</span>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs */}
        <div className="lg:w-64">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Quick Info */}
          <div className="mt-6 bg-gray-50 rounded-xl p-4">
            <h4 className="font-medium text-gray-900 mb-3">Settings Information</h4>
            <p className="text-sm text-gray-600">
              Changes made here affect the entire system. Make sure to test changes before making them live.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            {renderContent()}
          </div>

          {/* Additional Settings Info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-xl">
              <h4 className="font-medium text-blue-900 mb-2">General Tips</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Always backup before major changes</li>
                <li>• Test email configurations</li>
                <li>• Update contact info regularly</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <h4 className="font-medium text-green-900 mb-2">Security</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Use strong passwords</li>
                <li>• Enable 2FA for admin accounts</li>
                <li>• Regular security audits</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl">
              <h4 className="font-medium text-purple-900 mb-2">Performance</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Optimize images before upload</li>
                <li>• Clear cache regularly</li>
                <li>• Monitor website speed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
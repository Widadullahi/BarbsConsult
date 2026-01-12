import { useState, useEffect } from 'react';
import BarbsContext from './BarbsContext';
import BarbsConsultStats from '../../components/BarbsConsultStats.jsx';

export const BarbsProvider = ({ children }) => {
  const COMPANY_INFO = {
    name: "BARBSCONSULT",
    phone: "+234 7066063908",
    email: "babajidepelumi124@gmail.com",
    address: "No3, Adebiyi Street, onike, Lagos",
    instagram: "barbsconsult",
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('blog_admin_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    if (email === 'admin@barbsconsult.com' && password === 'admin123') {
      const userData = {
        id: 1,
        name: 'Barb Admin',
        email: email,
        isAdmin: true,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      };
      setUser(userData);
      localStorage.setItem('blog_admin_user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('blog_admin_user');
  };

  // ... rest of your logic ...

  const value = {
    COMPANY_INFO,
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false,
    // ... other values
  };

  return (
    <BarbsContext.Provider value={value}>
      {children}
    </BarbsContext.Provider>
  );
};
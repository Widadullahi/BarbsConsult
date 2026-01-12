import React, { createContext, useContext, useState, useEffect } from 'react';
import BarbsConsultStats from '../components/BarbsConsultStats';

const BarbsContext = createContext();

export const useBarbs = () => useContext(BarbsContext);

export const BarbsProvider = ({ children }) => {
  const COMPANY_INFO = {
    name: "BARBSCONSULT",
    phone: "+234 7066063908",
    email: "babajidepelumi124@gmail.com",
    address: "No3, Adebiyi Street, onike, Lagos",
    instagram: "barbsconsult",
  };

  // Auth state
  const [user, setUser] = useState(null);

  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('blog_admin_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Auth functions
  const login = (email, password) => {
    // Simple mock authentication for blog admin
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

  const updateProfile = (data) => {
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem('blog_admin_user', JSON.stringify(updatedUser));
  };

  // Shortcut components
  const BarbsStats = (props) => <BarbsConsultStats {...props} />;
  const BarbsContact = () => <BarbsConsultStats showStats={false} showMap={false} />;
  const BarbsMap = () => <BarbsConsultStats showStats={false} showContact={false} />;
  const BarbsMini = () => <BarbsConsultStats showStats={true} showMap={false} showContact={false} />;

  // Utility functions
  const callBarbs = () => window.open(`tel:+2347066063908`, '_blank');
  const whatsappBarbs = () => window.open(`https://wa.me/2347066063908`, '_blank');
  const emailBarbs = () => window.open(`mailto:babajidepelumi124@gmail.com`, '_blank');

  const value = {
    // Company info
    COMPANY_INFO,
    
    // Auth functions
    user,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false,
    
    // Components
    BarbsStats,
    BarbsContact,
    BarbsMap,
    BarbsMini,
    
    // Utility functions
    callBarbs,
    whatsappBarbs,
    emailBarbs,
  };

  return (
    <BarbsContext.Provider value={value}>
      {children}
    </BarbsContext.Provider>
  );
};
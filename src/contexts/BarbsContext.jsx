import React, { createContext, useContext } from 'react';
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
    COMPANY_INFO,
    BarbsStats,
    BarbsContact,
    BarbsMap,
    BarbsMini,
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

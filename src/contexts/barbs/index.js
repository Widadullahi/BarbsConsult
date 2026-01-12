import BarbsContext from './BarbsContext';
import { BarbsProvider } from './BarbsProvider';

export { BarbsContext, BarbsProvider };

// Custom hook for easy usage
import { useContext } from 'react';

export const useBarbs = () => {
  const context = useContext(BarbsContext);
  if (!context) {
    throw new Error('useBarbs must be used within a BarbsProvider');
  }
  return context;
};
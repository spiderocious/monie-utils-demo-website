import { useState } from 'react';
import { useDebounce } from './useDebounce';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 150);

  return {
    searchQuery,
    setSearchQuery,
    debouncedSearchQuery,
  };
};

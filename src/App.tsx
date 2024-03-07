import { useState } from 'react';
import { SearchForm } from './components/SearchFrom/SearchForm';
import { SearchContext } from './components/SearchResults/SearchContext';
import { SearchResults } from './components/SearchResults/SearchResults';
import { Root } from './types/types';

export default function App() {
  // Добавлены состояния в Context
  const [users, setUsers] = useState<Root>({
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


  // Добавлены функции для изменения состояний в Context
  const changeUsers = (data: Root) => {
    setUsers(data);
  };

  const setErrorChange = (errorType: boolean) => {
    setError(errorType);
  };

  const setLoadingChange = (loadingType: boolean) => {
    setLoading(loadingType);
  };
  

  return (
    <SearchContext.Provider
      value={{ users, changeUsers, error, setErrorChange, loading, setLoadingChange }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}

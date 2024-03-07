import { useState } from 'react';
import { SearchForm } from './components/SearchFrom/SearchForm';
import { SearchContext } from './components/SearchResults/SearchContext';
import { SearchResults } from './components/SearchResults/SearchResults';
import { User } from './types/types';

export default function App() {
  // Добавлен setUsers
  const [users, setUsers] = useState<User[]>([]);

  // Добавлена функция "changeUsers" для изменения состояния
  const changeUsers = (data: User[]) => {
    setUsers(data);
  };

  return (
    <SearchContext.Provider value={{ users, changeUsers }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}

import { useContext, useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import './styles.css';
import { SearchContext } from '../SearchResults/SearchContext';

export function SearchForm() {
  // Добавлены  Context, состояния и debounce
  const { changeUsers, setErrorChange, setLoadingChange } = useContext(SearchContext);
  const [search, setSearch] = useState<string>('');
  const debouncedValue = useDebounce<string>(search, 1000);


  // Добавлена функция "changeText", которая вызывается при изменении значения input
  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };


  // Добавлен useEffect для запроса данных с помощью debounce
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadingChange(true);
        const response = await fetch(`https://dummyjson.com/users/search?q=${search}`);
        const data = await response.json();
        changeUsers(data);
      } catch (error) {
        setErrorChange(true);
      } finally {
        setLoadingChange(false);
      }
    };
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  
  return (
    <div className="searchForm">
      <form>
        <input type="text" value={search} onChange={changeText} />
      </form>
    </div>
  );
}

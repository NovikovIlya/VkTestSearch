import { useContext, useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import './styles.css';
import { SearchContext } from '../SearchResults/SearchContext';

export function SearchForm() {
  // Добавлены  Context, состояния и debounce
  const { changeUsers } = useContext(SearchContext);
  const [search, setSearch] = useState<string>('');
  const debouncedValue = useDebounce<string>(search, 1000);

  // Добавлена функция "changeText", которая вызывается при изменении значения input
  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  // Добавлен useEffect для запроса данных с помощью debounce
  useEffect(() => {
    console.log(search);
    const fetchUsers = async () => {
      const response = await fetch(`https://dummyjson.com/users/search?q=${search}`);
      const data = await response.json();
      changeUsers(data.users);
      console.log(data.users);
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

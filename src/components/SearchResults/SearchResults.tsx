import { useContext } from 'react';
import { SearchContext } from './SearchContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { UserCard } from '../UserCard/UserCard';
import './style.css';

export function SearchResults() {
  const { users, error, loading } = useContext(SearchContext);

  return (
    <>
      {/* Отображаем данные */}
      <div className="usersList">
        {users?.users?.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      {/* Загрузка в виде Skeleton */}
      <div>
        {loading && (
          <div className="usersList">
            <Skeleton style={{ marginBottom: '15px' }} width={342} height={128} />
            <Skeleton style={{ marginBottom: '15px' }} width={342} height={128} />
            <Skeleton style={{ marginBottom: '15px' }} width={342} height={128} />
            <Skeleton style={{ marginBottom: '15px' }} width={342} height={128} />
            <Skeleton style={{ marginBottom: '15px' }} width={342} height={128} />
            <Skeleton width={342} height={128} />
          </div>
        )}
      </div>

      {/* Выводим текст в случае если нет */}
      <div>
        {!loading && users.users.length === 0 && (
          <p className="usersList">Пользователи не найдены</p>
        )}
      </div>
      
      {/* Отображаем в случае ошибки*/}
      <div>{error && <p>Произошла ошибка</p>}</div>
    </>
  );
}

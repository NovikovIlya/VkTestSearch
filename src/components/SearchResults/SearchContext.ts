import { createContext, Context } from 'react';
import { User } from '../../types/types';

interface ISearchContext {
  users: User[];
  changeUsers: (data: User[]) => void;
}

export const SearchContext: Context<ISearchContext> = createContext<ISearchContext>({
  users: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeUsers: (data: User[]) => {},
});

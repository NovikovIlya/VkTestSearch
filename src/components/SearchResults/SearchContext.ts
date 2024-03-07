import { createContext, Context } from 'react';
import { Root } from '../../types/types';

interface ISearchContext {
  users: Root;
  changeUsers: (data: Root) => void;
  error: boolean;
  setErrorChange: (error: boolean) => void;
  loading: boolean;
  setLoadingChange: (loading: boolean) => void;
}

export const SearchContext: Context<ISearchContext> = createContext<ISearchContext>({
  users: {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  changeUsers: () => {},
  setErrorChange: () => {},
  error: false,
  loading: false,
  setLoadingChange: () => {},
});

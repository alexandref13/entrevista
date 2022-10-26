import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';

import { FeedContext, JsonProps } from '../Feed';

type SearchProviderProps = {
  children: ReactNode;
};

type SearchContextData = {
  search: string;
  searchStartDate: string;
  searchEndDate: string;
  filteredSearch: JsonProps[];
  setSearch: Dispatch<SetStateAction<string>>;
  setSearchStartDate: Dispatch<SetStateAction<string>>;
  setSearchEndDate: Dispatch<SetStateAction<string>>;
  setFilteredSearch: Dispatch<SetStateAction<JsonProps[]>>;
  handleClearFilter: () => void;
};

export const SearchContext = createContext({} as SearchContextData);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const { jsons } = useContext(FeedContext);

  const [search, setSearch] = useState('');
  const [searchStartDate, setSearchStartDate] = useState('');
  const [searchEndDate, setSearchEndDate] = useState('');

  const [filteredSearch, setFilteredSearch] = useState<JsonProps[]>([]);

  useEffect(() => {
    setFilteredSearch(jsons);
  }, [jsons]);

  useEffect(() => {
    setSearchStartDate('');
    setSearchEndDate('');

    if (search.length == 0) {
      setFilteredSearch(jsons);
    } else {
      const filter = jsons.filter((json) =>
        json.title.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredSearch(filter);
    }
  }, [search]);

  useEffect(() => {
    setSearch('');
    setSearchEndDate('');

    if (searchStartDate.length == 0) {
      setFilteredSearch(jsons);
    } else {
      const filter = jsons.filter((json) =>
        json.hoursStart.includes(searchStartDate)
      );

      setFilteredSearch(filter);
    }
  }, [searchStartDate]);

  useEffect(() => {
    setSearch('');
    setSearchStartDate('');

    if (searchEndDate.length == 0) {
      setFilteredSearch(jsons);
    } else {
      const filter = jsons.filter((json) =>
        json.hoursEnd.includes(searchEndDate)
      );

      setFilteredSearch(filter);
    }
  }, [searchEndDate]);

  function handleClearFilter() {
    setSearch('');
    setSearchStartDate('');
    setSearchEndDate('');

    setFilteredSearch(jsons);
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        searchStartDate,
        setSearchStartDate,
        searchEndDate,
        setSearchEndDate,
        filteredSearch,
        setFilteredSearch,
        handleClearFilter
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

import { useContext } from 'react';
import { FeedContext } from '../../contexts/Feed';
import { SearchContext } from '../../contexts/Search';
import {
  ClearFilter,
  Container,
  EndDateSearch,
  StartDateSearch,
  TitleSearch
} from './style';

export const Search = () => {
  const { jsons } = useContext(FeedContext);
  const {
    search,
    setSearch,
    searchStartDate,
    setSearchStartDate,
    searchEndDate,
    setSearchEndDate,
    handleClearFilter
  } = useContext(SearchContext);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleHoursStart(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchStartDate(e.target.value);
  }

  function handleHoursEnd(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchEndDate(e.target.value);
  }

  return (
    <Container>
      {jsons?.length > 0 ? (
        <>
          <div>
            <TitleSearch>
              <input
                type="text"
                id="search"
                placeholder="Procure pelo titulo"
                value={search}
                onChange={handleSearch}
              />
            </TitleSearch>
            <StartDateSearch>
              <input
                type="datetime-local"
                id="searchStartDate"
                value={searchStartDate}
                onChange={handleHoursStart}
              />
            </StartDateSearch>

            <EndDateSearch>
              <input
                type="datetime-local"
                id="searchEndDate"
                value={searchEndDate}
                onChange={handleHoursEnd}
              />
            </EndDateSearch>
          </div>
          <div>
            <ClearFilter onClick={handleClearFilter}>
              Limpar filtros
            </ClearFilter>
          </div>
        </>
      ) : null}
    </Container>
  );
};

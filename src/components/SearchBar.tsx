import React, { ChangeEvent, useContext, useState } from 'react';
import '../styles.css';
import { PlacesContext } from '../context/places/PlacesContext';
import SearchResults from './SearchResults';

const SearchBar = () => {
  const [debounce, setDebounce] = useState<NodeJS.Timeout>();
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounce) {
      clearTimeout(debounce);
    }
    setDebounce(
      setTimeout(() => {
        searchPlacesByTerm(event.target.value);
      }, 1000)
    );
  };
  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={onQueryChanged}
      />
      <SearchResults />
    </div>
  );
};

export default SearchBar;

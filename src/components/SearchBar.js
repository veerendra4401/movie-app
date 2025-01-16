import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search for movies..." 
        value={query} 
        onChange={handleChange} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;

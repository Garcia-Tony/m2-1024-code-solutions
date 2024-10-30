import { SearchBar } from './SearchBar';
import { Items } from './Items';
import { useState } from 'react';

type Props = {
  items: string[];
};

export function SearchableList({ items }: Props) {
const [search, setSearch] = useState('');


  return (
    <div className="searchable-list">
      <SearchBar
        value={search}
        onSearchChange={(event) => setSearch(event.target.value)}
      />
      <Items
        items={items.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )}
      />
    </div>
  );
}

export default SearchableList;

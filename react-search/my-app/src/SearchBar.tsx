
type Props = {
  value: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ value, onSearchChange }: Props) {
  return (
    <div>
        <div className="input-wrapper">
          <input
            id="myInput"
            name="myInput"
            placeholder="Search..."
            value={value}
            onChange={onSearchChange}
          />
          <img src="./search-solid.svg" className="search-icon" />
        </div>
    </div>
  );
}

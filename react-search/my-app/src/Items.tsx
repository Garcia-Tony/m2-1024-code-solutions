type Props = {
  items: string[];
};

export function Items({ items }: Props) {
  return (
    <ul className="item-list">
      <b>
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))
        ) : (
          <div className="no-results">
           No items match the filter.
          </div>
        )}
      </b>
    </ul>
  );
}

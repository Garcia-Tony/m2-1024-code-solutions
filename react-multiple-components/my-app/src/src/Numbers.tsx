type Props = {
  items: string[];
  setIndex: (index: number) => void;
  currentIndex: number;
};

export function Numbers({ items, setIndex, currentIndex }: Props) {
  const buttons = [];
  for (let i = 0; i < items.length; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => setIndex(i)}
        style={{
          backgroundColor: i === currentIndex ? 'lightblue' : '',
          color: i === currentIndex ? 'black' : '',
          border: '4px solid black',
          margin: '2px',
          fontSize: '20px',
          outline: 'none',
        }}>
        {i + 0}
      </button>
    );
  }
  return <div>{buttons}</div>;
}

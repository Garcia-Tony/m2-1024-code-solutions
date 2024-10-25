type Props = {
  items: string[];
  setIndex: (index: number) => void;
};

export function Numbers({ items, setIndex }: Props) {
  const buttons = [];
  for (let i = 0; i < items.length; i++) {
    buttons.push(
      <button key={i} onClick={() => setIndex(i)}>
        {i + 0}
      </button>
    );
  }
  return (
    <>
      <div>{buttons}</div>
    </>
  );
}

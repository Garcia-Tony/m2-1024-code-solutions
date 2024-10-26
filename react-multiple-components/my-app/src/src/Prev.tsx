type Props = {
  onClick: () => void;
};

export function Prev({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        border: '4px solid black',
        fontSize: '20px',
      }}>
      Prev
    </button>
  );
}

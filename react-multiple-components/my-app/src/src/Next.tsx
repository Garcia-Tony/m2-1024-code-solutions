type Props = {
  onClick: () => void;
};

export function Next({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        border: '4px solid black',
        fontSize: '20px',
        outline: 'none',
      }}>
      Next
    </button>
  );
}

type Props = {
  items: string[];
  onIndex: number;
};

export function Name({ items, onIndex }: Props) {
  return (
    <div style={{ fontSize: '40px', color: 'black' }}>{items[onIndex]}</div>
  );
}

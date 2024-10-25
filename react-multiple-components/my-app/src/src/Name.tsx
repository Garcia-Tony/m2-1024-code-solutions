type Props = {
  items: string[];
  onIndex: number;
};

export function Name({ items, onIndex }: Props) {
  return <div>{items[onIndex]}</div>;
}

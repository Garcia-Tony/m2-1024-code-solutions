type Props = {
  descs: string[];
  index: number;
  onClick: () => void;
};

export function ImageDescription({ descs, index, onClick }: Props) {
  return (
    <div>
      <p onClick={onClick}>{descs[index]}</p>
    </div>
  );
}

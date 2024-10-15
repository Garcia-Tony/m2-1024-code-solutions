type Props = {
  captions: string[];
  index: number;
  onClick: () => void;
};

export function ImageCaption({ captions, index, onClick }: Props) {
  return (
    <div>
      <h3 onClick={onClick}>{captions[index]}</h3>
    </div>
  );
}

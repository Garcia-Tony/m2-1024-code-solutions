type ImageItem = {
  src: string;
  alt: string;
};

type Props = {
  items: ImageItem[];
  onIndex: number;
};

export function Picture({ items, onIndex }: Props) {
  const { src, alt } = items[onIndex];

  return (
    <div style={{ fontSize: '30px', color: 'black' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '140px',
          height: '200px',
        }}
      />
    </div>
  );
}

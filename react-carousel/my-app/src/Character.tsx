import { useEffect } from 'react';

type ImageItem = {
  src: string;
  alt: string;
};

type Props = {
  items: ImageItem[];
  setIndex: (index: number) => void;
  currentIndex: number;
};

export function Character({ items, setIndex, currentIndex }: Props) {
  const buttons = [];
  for (let i = 0; i < items.length; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => setIndex(i)}
        style={{
          backgroundColor: i === currentIndex ? 'black' : '',
          color: i === currentIndex ? 'black' : '',
          border: '2px solid black',
          margin: '2px',
          fontSize: '2px',
          outline: 'none',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
        }}></button>
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, items.length, setIndex]);

  return <div>{buttons}</div>;
}

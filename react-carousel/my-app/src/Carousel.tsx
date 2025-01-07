import { Character } from './Character';
import { Picture } from './Picture';
import { Prev } from './Prev';
import { Next } from './Next';
import { useState } from 'react';

type ImageItem = {
  src: string;
  alt: string;
};

type Props = {
  items: ImageItem[];
};

export function Carousel({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div
      style={{
        fontSize: '40px',
        border: '2px solid black',
        padding: '50px',
        paddingBottom: '30px',
        paddingTop: '30px',
      }}>
      <div style={{ display: 'flex' }}>
        <Prev onClick={handlePrev} />
        <Picture items={items} onIndex={currentIndex} />
        <Next onClick={handleNext} />
      </div>
      <Character
        items={items}
        setIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default Carousel;

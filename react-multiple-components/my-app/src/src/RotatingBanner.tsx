import { Numbers } from './Numbers';
import { Name } from './Name';
import { useState } from 'react';
import { Prev } from './Prev';
import { Next } from './Next';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
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
    <div>
      <Name items={items} onIndex={currentIndex} />
      <Prev onClick={handlePrev} />
      <Numbers
        items={items}
        setIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
      <Next onClick={handleNext} />
    </div>
  );
}

export default RotatingBanner;

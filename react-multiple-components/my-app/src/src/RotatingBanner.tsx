import { Numbers } from './Numbers';
import { Name } from './Name';
import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Name items={items} onIndex={currentIndex} />
      <Numbers items={items} setIndex={setCurrentIndex} />
    </div>
  );
}

export default RotatingBanner;

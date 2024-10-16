import { useState } from 'react';

type Property = {
  desc: string[];
};

export function ImageDescription({ desc }: Property) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= desc.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div>
      <p onClick={handleClick}>{desc[index]}</p>
    </div>
  );
}

import { TopicCard } from './TopicCard';
import { useState } from 'react';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type bundle = {
  items: Topic[];
};

export function Accordion({ items }: bundle) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <TopicCard
          key={index}
          id={item.id}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;

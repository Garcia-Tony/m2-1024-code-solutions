import { RotatingBanner } from './src/RotatingBanner';
import './App.css';
import { Numbers } from './src/Numbers';
import { Prev } from './src/Prev';
import { Next } from './src/Next';
import { Name } from './src/Name';
import { useState } from 'react';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <RotatingBanner />
      <Name items={items} onIndex={currentIndex} />
      <Prev />
      <Numbers items={items} setIndex={setCurrentIndex} />
      <Next />
    </div>
  );
}

export default App;

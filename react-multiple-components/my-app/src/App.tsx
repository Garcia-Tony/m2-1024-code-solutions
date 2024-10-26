import RotatingBanner from './src/RotatingBanner';
import './App.css';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <div>
      <RotatingBanner items={items} />
    </div>
  );
}

export default App;

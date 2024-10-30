import { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import './App.css';

const label = ['ON', 'OFF'];

export function App() {
  const [click, setClick] = useState(0);

  function getButton() {
    if (click >= label.length - 1) {
      setClick(0);
    } else {
      setClick(click + 1);
    }
  }

  return <ToggleSwitch onClick={getButton} label={label} index={click} />;
}
export default App;

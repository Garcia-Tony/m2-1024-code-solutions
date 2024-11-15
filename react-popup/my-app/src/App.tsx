import './App.css';
import Popup from './Popup';
import { useState, useRef } from 'react';

function App() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleOpen}>
        Pop Up!
      </button>
      <p>Paragraph Above</p>

      <Popup
        isOpen={isOpen}
        positionTo={buttonRef.current}
        onClose={handleClose}
        opacity={0.5}>
        <div
          className="menu-wrapper"
          style={{ border: '2px solid rgba(0, 0, 0, 0.2)', padding: 1 }}>
          <ul className="menu" style={{ listStyleType: 'none', padding: 10 }}>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
            <li>Menu Item 5</li>
          </ul>
        </div>
      </Popup>
      <p>Paragraph Below</p>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const buttonLabel = ['Hot Button'];

export function App() {
  const [click, setClick] = useState(0);

  function handleButtonClick() {
    setClick(click + 1);
  }

  function getButton() {
    if (click < 3) {
      return 'hot-button cold';
    } else if (click < 6) {
      return 'hot-button cool';
    } else if (click < 9) {
      return 'hot-button tepid';
    } else if (click < 12) {
      return 'hot-button warm';
    } else if (click < 15) {
      return 'hot-button hot';
    } else if (click < 18) {
      return 'hot-button nuclear';
    } else {
      return 'hot-button atomic';
    }
  }

  return (
    <>
      <ButtonContainer
        onClick={handleButtonClick}
        className={getButton()}
        label={buttonLabel}
        index={click}
      />
    </>
  );
}

export default App;

import './App.css';
import { Modal } from './modal';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    alert('Something was deleted.');
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Delete Me!</button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <p>Do you really want to delete?</p>
        <button onClick={handleDelete}>Delete</button>

        <button onClick={handleClose}>Cancel</button>
      </Modal>
    </div>
  );
}

export default App;

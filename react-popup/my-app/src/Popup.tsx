import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  positionTo: HTMLButtonElement | null;
  onClose: () => void;
  opacity?: number;
};

function Popup({ isOpen, positionTo, onClose, children }: Props) {
  if (!isOpen || !positionTo) return null;

  const r = positionTo ? positionTo.getBoundingClientRect() : null;

  const top = r ? r.top + r.height / 2 - -150 : '50%';
  const left = r ? r.left + r.width / 2 - 60 : '50%';

  return createPortal(
    <>
      <div
        onClick={onClose}
        style={{ position: 'fixed', top: 0, width: '100vw', height: '100vh' }}>
        <div
          className="menu-wrapper"
          style={{
            position: 'absolute',
            left: `${left}px`,
            top: `${top}px`,
          }}>
          {children}
        </div>
      </div>
    </>,

    document.body
  );
}

export default Popup;

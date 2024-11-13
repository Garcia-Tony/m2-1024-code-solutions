import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modal.current) {
      if (isOpen) {
        modal.current?.showModal();
      } else {
        modal.current.close();
      }
    }
  });

  return (
    <dialog ref={modal} onClose={onClose}>
      {children}
    </dialog>
  );
}
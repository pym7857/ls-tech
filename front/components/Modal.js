import React, { FC, useCallback } from 'react';

import {
    CloseModalButton,
    CreateModal,
} from './ModalStyles';

// Props로 넘겨받은것들을 매개변수로 명시 
const Modal = ({ show, children, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  // show변수가 false면, 화면에서 안보이도록 
  if (!show) return null;

  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
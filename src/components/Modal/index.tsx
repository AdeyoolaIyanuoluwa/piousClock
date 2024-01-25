import * as React from 'react';
import { Dialog, Pane } from 'evergreen-ui';
import { ModalProps } from '../../types';

const Modal = ({ isShown, onClose, width, children }: ModalProps) => {
  return (
    <Pane>
      <Dialog
        isShown={isShown}
        width={width}
        onCloseComplete={onClose}
        hasHeader={false}
        hasFooter={false}
        hasCancel={false}
        hasClose={false}
        topOffset={200}
      >
        {children}
      </Dialog>
    </Pane>
  );
};

export default Modal;

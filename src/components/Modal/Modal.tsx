import React from 'react';
import { Dialog } from '@headlessui/react';
import classNames from 'classnames';
import styles from './modal.module.scss';

const Modal = ({ isOpen, isClose, children, floatRight, width, height, minWidth }: any) => {
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={() => {
                    isClose();
                }}
                className={classNames(floatRight ? styles.modal2 : styles.full_modal)}
            >
                <div
                    className={classNames(floatRight ? styles.full_modal__content2 : styles.full_modal__content)}
                    style={{ width: `${width}px`, minHeight: `${height}px`, minWidth: `${minWidth}px` }}
                >
                    <div>{children}</div>
                </div>
            </Dialog>
        </div>
    );
};

export default Modal;

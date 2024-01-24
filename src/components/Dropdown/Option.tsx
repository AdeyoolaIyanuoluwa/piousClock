import React from 'react';
import styles from '../Dropdown/dropdown.module.scss';
import { OptionProps } from '@/types';

export const Option = ({ children, image, onClick, dropStyles }: OptionProps) => {
    return (
        <div
            className={styles.drop__optionContainer}
            style={dropStyles}
            onClick={onClick}
        >
            <span className={styles.drop__imageLeft}>
                {image && <img src={image} alt="drop-images" />}
            </span>
            <div className={styles.drop__option} aria-hidden>
                {' '}
                {children}
            </div>{' '}
            <span className={styles.drop__imageRight}></span>
        </div>
    );
};

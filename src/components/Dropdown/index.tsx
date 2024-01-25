import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import styles from './dropdown.module.scss';
import { DropdownProps } from '@/types';
import DropdownIcon from "../../assets/arrow-down.svg";

const Dropdown = ({ children, content, style }: DropdownProps) => (
    <div>
        <Menu as="div">
            <div>
                <Menu.Button className={styles.menuButton}>{children ? children :  <img src={DropdownIcon} />}</Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={styles.drop} style={style}>
                    <div>{content}</div>
                </Menu.Items>
            </Transition>
        </Menu>
    </div>
);

export default Dropdown;

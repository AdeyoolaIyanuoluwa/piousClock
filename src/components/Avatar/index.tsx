import React from 'react';
import classNames from 'classnames';
import styles from './avatar.module.scss';
import { AvatarProps } from '../../types';

const Avatar = ({ name, className, profile, url ,size,onClick }: AvatarProps) => {
  return (
    <div className={classNames(className, 'flex')}>
        {url ? (
          <img src={url} className={profile ? styles.profile__img : styles.header__img} />
        ) : (
          <span
            className={classNames(styles.avatar, styles[`avatar__${size}`])}onClick={onClick} >
              
              
            {name.split(' ')[0]?.charAt(0)?.toUpperCase()}
            {name.split(' ')[1]?.charAt(0)?.toUpperCase()}
          </span>
        )}
      </div>
  );
};


export default Avatar;

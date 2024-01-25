import React from 'react';
import classNames from 'classnames';
import styles from './avatar.module.scss';
import { AvatarProps } from '../../types';

const Avatar = ({ name, className, profile, url }: AvatarProps) => {
  return (
    <span className={classNames(className, 'flex')}>
      <div>
        {url ? (
          <img src={url} className={profile ? styles.profile__img : styles.header__img} />
        ) : (
          <span
            className={classNames(profile ? styles.avatar__profile : styles.avatar__placeholder)}>
            {name.split(' ')[0]?.charAt(0)?.toUpperCase()}
            {name.split(' ')[1]?.charAt(0)?.toUpperCase()}
          </span>
        )}
      </div>
    </span>
  );
};


export default Avatar;

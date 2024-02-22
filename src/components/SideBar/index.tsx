import React from 'react'
import styles from './sideBar.module.scss'
import Logo from '../../assets/piouslogo.svg'
import { navLinks } from './navLinks'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
const SideBar = () => {
 
  return (
    <div className={styles.sidebar__wrapper}>
        <div>
          <div className={styles.sidebar__logo}>
              <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className={styles.menu}>
          {navLinks.map((i)=>{
            return(
              <NavLink className={({isActive})=>(isActive ? styles.active : '')} to={i.url}>
                
                <li className={classNames(styles.menu__list)}>
                <img src={i.icon}/>
                 <span> {i.title}</span>
                </li>
              </NavLink>
            )
          })}
        </div>
    </div>
  )
}

export default SideBar
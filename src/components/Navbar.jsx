import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import { CalendarMonth } from '@mui/icons-material'

export default function Navbar() {
   return (
      <nav className={styles.navContainer}>
         <NavLink to={"/teste"} className={styles.navItem}>
            <CalendarMonth/>
            <span>Agenda</span>
         </NavLink>
         <NavLink to={"/teste"} className={styles.navItem}>
            <CalendarMonth/>
            <span>Agenda</span>
         </NavLink>
         <NavLink to={"/teste"} className={styles.navItem}>
            <CalendarMonth/>
            <span>Agenda</span>
         </NavLink>
         <NavLink to={"/teste"} className={styles.navItem}>
            <CalendarMonth/>
            <span>Agenda</span>
         </NavLink>
         <NavLink to={"/teste"} className={styles.navItem}>
            <CalendarMonth/>
            <span>Agenda</span>
         </NavLink>
      </nav>
   )
}

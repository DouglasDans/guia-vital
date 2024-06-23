import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './agendaNav.module.css'

export default function AgendaNav() {
   return (
      <nav className={styles.navContainer}>
         <NavLink to={'/agenda/consultas'} className={styles.navItemA}>
            Consultas Marcadas
         </NavLink>
         <NavLink to={'/agenda/historico'} className={styles.navItem}>
            Histórico
         </NavLink>
      </nav>
   )
}

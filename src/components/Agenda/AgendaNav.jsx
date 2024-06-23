import React from 'react'
import { Link } from 'react-router-dom'
import styles from './agendaNav.module.css'


export default function AgendaNav() {
   return (
      <nav className={styles.navContainer}>
         <Link to={'/agenda/consultas'} className={styles.navItemA}>
            Consultas Marcadas
         </Link>
         <Link to={'/agenda/historico'} className={styles.navItem}>
            Histórico
         </Link>
      </nav>
   )
}

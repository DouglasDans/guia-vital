import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './receitasNav.module.css'

export default function ReceitasNav() {
   return (
      <nav className={styles.navContainer}>
         <NavLink to={'/receitas/medicamentos'} className={styles.navItemA}>
            Medicamentos
         </NavLink>
         <NavLink to={'/receitas'} className={styles.navItem}>
            Minhas Receitas
         </NavLink>
      </nav>
   )
}

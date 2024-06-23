import React from 'react'
import styles from './titlePage.module.css'

export default function TitlePage({title}) {
   return (
      <div className={styles.titlePageContainer}>
         <h1 className={styles.title}>{title}</h1>
      </div>
   )
}

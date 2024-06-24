import React from 'react'
import styles from './titlePage.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function TitlePageChat({title}) {
   return (
      <div className={styles.titlePageContainer}>
         <ArrowBackIcon/>
         <h1 className={styles.title}>{title}</h1>
         <p></p>
      </div>
   )
}

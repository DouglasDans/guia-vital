import React from 'react'
import styles from './titlePage.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
export default function TitlePageChat({title}) {
   return (
      <div className={styles.titlePageContainer}>
         <Link to={"/chat"} style={{color: 'black'}}><ArrowBackIcon/></Link>
         <h1 className={styles.title}>{title}</h1>
         <p></p>
      </div>
   )
}

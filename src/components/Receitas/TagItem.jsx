import React from 'react'
import styles from './tagItem.module.css'

export default function TagItem({status}) {
   return (
      <span className={styles.tagItemContainer}>
         {status}
      </span>
   )
}
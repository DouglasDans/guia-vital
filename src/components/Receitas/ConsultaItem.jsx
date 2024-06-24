import React from 'react'
import TagItem from './TagItem'
import styles from './consultaItem.module.css'

export default function ConsultaItem({provisorioTag = "Agendado"}) {
   return (
      <div className={styles.consultaItemContainer}>
         <TagItem status={provisorioTag}/>

         <div className={styles.listItem}>

            <div className={styles.item}>
               <small>Especialidade</small>
               <span className={styles.bold}>Cardiologista</span>
            </div>

            <div className={styles.item}>
               <small>Doutor</small>
               <span className={styles.bold}>Preston Burke</span>
            </div>

            <div className={styles.item}>
               <small>Data</small>
               <span className={styles.bold}>23/06/2024</span>
            </div>

            <div className={styles.item}>
               <small>Hora</small>
               <span className={styles.bold}>8h00</span>
            </div>
            
            <div className={styles.item}>
               <small>Unidade</small>
               <span className={styles.bold}>Hospital São Paulo</span>
            </div>
            
         </div>

      </div>
   )
}

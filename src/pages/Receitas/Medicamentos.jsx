import React, { Fragment } from 'react'
import Navbar from '../../components/global/Navbar'
import TitlePage from '../../components/global/TitlePage'
import ReceitasNav from '../../components/Receitas/ReceitasNav'
import Container from '../../components/Container'

export default function Medicamentos() {
   return (
      <Fragment>
         <Navbar/>

         <TitlePage title={"Medicamentos"}/>
         <ReceitasNav/>
         <Container>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
               <div style={{background: '#f5f5f5', padding: '1rem', borderRadius: '4px', height: '80px', display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                  <div>
                     <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span style={{ fontWeight: '600'}}>Ibuprofeno</span>
                        <small style={{ fontWeight: '600'}}>A cada 4h</small>
                     </div>
                     <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <small style={{ fontWeight: '600'}}>400mg</small>
                        <small style={{ fontWeight: '600'}}>3 dias</small>
                     </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                     <span>1° Dose:</span>
                     {/* <small>3 dias</small> */}
                  </div>
               </div>
               <div style={{background: '#f5f5f5', padding: '1rem', borderRadius: '4px', height: '80px', display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                  <div>
                     <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span style={{ fontWeight: '600'}}>Dipirona</span>
                        <small style={{ fontWeight: '600'}}>A cada 6h</small>
                     </div>
                     <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <small style={{ fontWeight: '600'}}>500mg</small>
                        <small style={{ fontWeight: '600'}}>3 dias</small>
                     </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                     <span>1° Dose: <span style={{fontSize: '1.2rem', fontWeight: '600'}}>15h</span></span>
                     <button style={{background: '#C7F5FF', fontWeight: '600', padding: '0.5rem 2rem', textDecoration: 'none', color: 'black', borderRadius: '4px', border: 0}}>
                        Registrar 1° Dose
                     </button>
                  </div>
               </div>
            </div>
         </Container>

      </Fragment>
   )
}

import React, { Fragment } from 'react'
import Navbar from '../components/global/Navbar'
import TitlePage from '../components/global/TitlePage'
import Container from '../components/Container'

export default function Lembretes() {
  return (
    <Fragment>
      <Navbar/>

      <TitlePage title={"Lembretes"}/>

      <Container>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <div style={{display:'flex', flexDirection: 'column', marginBottom: '1rem'}}>
            <small>21 de Junho</small>
            <span style={{fontWeight: '600'}}>Doses do dia</span>
          </div>

          <div style={{display:'flex', gap: '0.5rem', flexDirection: 'column'}}>
            <span style={{fontWeight: '600'}}>19:00</span>
            <div style={{border: '1px solid rgba(0, 0, 0, 0.15)', padding: '1rem', borderRadius: '4px'}}>
              <span style={{fontWeight: '600', fontSize: '1.2rem'}}>Ibuprofeno</span>
              <br/>
              <small  style={{fontWeight: '600'}}>400mg</small>
            </div>
          </div>

          <div style={{display:'flex', gap: '0.5rem', flexDirection: 'column'}}>
            <span style={{fontWeight: '600'}}>21:00</span>
            <div style={{border: '1px solid rgba(0, 0, 0, 0.15)', padding: '1rem', borderRadius: '4px'}}>
              <span style={{fontWeight: '600', fontSize: '1.2rem'}}>Dipirona</span>
              <br/>
              <small  style={{fontWeight: '600'}}>500mg</small>
            </div>
          </div>

          <div style={{display:'flex', gap: '0.5rem', flexDirection: 'column'}}>
            <span style={{fontWeight: '600'}}>23:00</span>
            <div style={{border: '1px solid rgba(0, 0, 0, 0.15)', padding: '1rem', borderRadius: '4px'}}>
              <span style={{fontWeight: '600', fontSize: '1.2rem'}}>Ibuprofeno</span>
              <br/>
              <small  style={{fontWeight: '600'}}>500mg</small>
            </div>
          </div>
        </div>

      
      </Container>

    </Fragment>
  )
}

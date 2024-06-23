import React, { Fragment } from 'react'
import Navbar from '../../components/global/Navbar'
import TitlePage from '../../components/global/TitlePage'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Fragment>
      <Navbar/>

      <TitlePage title={"Olá Paciente"}/>

      <Container>
        <div style={{border: '1px solid rgba(0, 0, 0, 0.15)', padding: '2rem 1rem', borderRadius: '4px'}}>
          <span style={{fontSize: '1.3rem'}}>Como você está se sentindo</span>
          <p>É importante que você nos diga como está se sentindo para que um médico te ajude, se necessário</p>
          <Link to={'/'} style={{background: '#C7F5FF', fontWeight: '600', padding: '0.5rem 2rem', textDecoration: 'none', color: 'black', borderRadius: '4px'}}>Registrar Idiomas</Link>
        </div>
      </Container>

    </Fragment>
  )
}

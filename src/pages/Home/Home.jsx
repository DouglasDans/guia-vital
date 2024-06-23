import React, { Fragment } from 'react'
import Navbar from '../../components/global/Navbar'
import TitlePage from '../../components/global/TitlePage'
import Container from '../../components/Container'

export default function Home() {
  return (
    <Fragment>
      <Navbar/>

      <TitlePage title={"Olá Paciente"}/>

      <Container>
        a
      </Container>

    </Fragment>
  )
}

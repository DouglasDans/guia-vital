import React, { Fragment } from 'react'
import Navbar from '../../components/global/Navbar'
import TitlePage from '../../components/global/TitlePage'
import AgendaNav from '../../components/Agenda/AgendaNav'
import ConsultaItem from '../../components/Agenda/ConsultaItem'
import Container from '../../components/Container'

export default function ConsultasMarcadas() {
  return (
    <Fragment>
      <Navbar/>

      <TitlePage title={"Consultas Marcadas"}/>
      <AgendaNav/>

      <Container>
        <ConsultaItem/>
      </Container>

    </Fragment>
  )
}

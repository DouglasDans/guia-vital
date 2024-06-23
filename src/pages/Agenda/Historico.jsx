import React, { Fragment } from 'react'
import Navbar from '../../components/global/Navbar'
import TitlePage from '../../components/global/TitlePage'
import AgendaNav from '../../components/Agenda/AgendaNav'
import Container from '../../components/Container'
import ConsultaItem from '../../components/Agenda/ConsultaItem'

export default function Historico() {
  return (
    <Fragment>
      <Navbar/>

      <TitlePage title={"Histórico de consultas"}/>
      <AgendaNav/>

      <Container>
        <ConsultaItem provisorioTag={"Paciente Atendido"}/>
      </Container>

    </Fragment>
  )
}

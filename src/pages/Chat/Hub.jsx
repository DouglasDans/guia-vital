import React, { Fragment } from 'react'
import Navbar from '../../components/global/Navbar'
import TitlePage from '../../components/global/TitlePage'
import Container from '../../components/Container'

export default function Hub() {
   return (
      <Fragment>
         <Navbar/>

         <TitlePage title={"Chat"}/>

         <Container>
            a
         </Container>

      </Fragment>
   )
}

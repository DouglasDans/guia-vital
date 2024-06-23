import React, { Fragment } from 'react'
import Navbar from '../../components/global/Navbar'
import TitlePage from '../../components/global/TitlePage'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'

export default function Hub() {
   return (
      <Fragment>
         <Navbar/>

         <TitlePage title={"Chat"}/>

         <Container>
            <Link to={'/chat/mensagem'} style={style}>
               <small>Hora</small>
               <span style={{fontWeight: '600'}}>8h00</span>
            </Link>
         </Container>

      </Fragment>
   )
}

const style = {
   display:'flex', 
   flexDirection: 'column',
   backgroundColor: "#f5f5f5",
   padding: '1rem',
   textDecoration: 'none',
   color: 'black'
}
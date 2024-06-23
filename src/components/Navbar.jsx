import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { Alarm, CalendarMonth, Chat, Home, ReceiptLong } from '@mui/icons-material'

export default function Navbar() {
   return (
      <nav className={"navContainer"}>
         <NavLink to={"/agenda/consultas"} className={"navItem"}>
            <CalendarMonth/>
            <span>Agenda</span>
         </NavLink>
         <NavLink to={"/chat"} className={"navItem"}>
            <Chat/>
            <span>Chat</span>
         </NavLink>
         <NavLink to={"/"} className={"navItem"}>
            <Home/>
            <span>Início</span>
         </NavLink>
         <NavLink to={"/lembretes"} className={"navItem"}>
            <Alarm/>
            <span>Lembrentes</span>
         </NavLink>
         <NavLink to={"/receitas"} className={"navItem"}>
            <ReceiptLong/>
            <span>Receitas</span>
         </NavLink>
      </nav>
   )
}

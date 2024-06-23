import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { Alarm, CalendarMonth, Chat, Home, ReceiptLong } from '@mui/icons-material'

export default function Navbar() {
   return (
      <nav className={"navContainer"}>
         <NavLink to={"/teste"} className={"navItem"}>
            <CalendarMonth/>
            <span>Agenda</span>
         </NavLink>
         <NavLink to={"/teste"} className={"navItem"}>
            <Chat/>
            <span>Chat</span>
         </NavLink>
         <NavLink to={"/"} className={"navItem"}>
            <Home/>
            <span>Início</span>
         </NavLink>
         <NavLink to={"/teste"} className={"navItem"}>
            <Alarm/>
            <span>Lembrentes</span>
         </NavLink>
         <NavLink to={"/teste"} className={"navItem"}>
            <ReceiptLong/>
            <span>Agenda</span>
         </NavLink>
      </nav>
   )
}

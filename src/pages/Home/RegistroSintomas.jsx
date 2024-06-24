import React, { Fragment } from 'react'
import Container from '../../components/Container'
import TitlePage from '../../components/global/TitlePage'
import { Close } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import style from "../Home/resgitrosintomas.module.css"

export default function RegistroSintomas() {
  return (
    <Fragment>

      <TitlePage title={"Olá Paciente"} />
      <Container>

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}><Close /></Link>

          <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
            <span style={{ color: "#5c5c5c" }}>21 de junho</span>
            <p style={{ fontSize: "1.1rem" }}>Como você está se sentindo hoje?</p>
          </div>

        </div>

        <div className={style.card_sintoma}>
          <p className={"titulo_sintoma"}>Dores</p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <div className={style.opcao_sintoma}>Nenhuma</div>
            <div className={style.opcao_sintoma}>Leve</div>
            <div className={style.opcao_sintoma}>Moderada</div>
            <div className={style.opcao_sintoma}>Forte</div>
          </div>
        </div>

        <div className={style.card_sintoma}>
          <p className={"titulo_sintoma"}>Aparência do local da cirurgia</p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <div className={style.opcao_sintoma}>Limpo</div>
            <div className={style.opcao_sintoma}>Secreções</div>
            <div className={style.opcao_sintoma}>Sangue</div>
            <div className={style.opcao_sintoma}>Seco</div>
          </div>
        </div>

        <div className={style.card_sintoma}>
          <p className={"titulo_sintoma"}>Descreva mais</p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <textArea name="descricao_sintomas" rows="5" cols="50"/>
          </div>
        </div>  


        <div style={{marginTop: "2rem", display: "flex", justifyContent: "center"}}>
          <button className={style.btn_salvar}>Salvar</button>
        </div>
      </Container>

    </Fragment>

  )
}

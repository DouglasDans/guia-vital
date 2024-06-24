import { Fragment } from "react";
import Navbar from "../../components/global/Navbar";
import TitlePage from "../../components/global/TitlePage";
import Container from "../../components/Container";
import ReceitasNav from "../../components/Receitas/ReceitasNav";


export default function Receitas() {
  return (
    <Fragment>
      <Navbar/>

      <TitlePage title={"Receitas"}/>
      <ReceitasNav/>
      <Container>
        a
      </Container>

    </Fragment>
  )
}

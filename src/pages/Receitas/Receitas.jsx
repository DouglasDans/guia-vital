import { Fragment } from "react";
import Navbar from "../../components/global/Navbar";
import TitlePage from "../../components/global/TitlePage";
import Container from "../../components/Container";
import ReceitasNav from "../../components/Receitas/ReceitasNav";
import TagItem from "../../components/Agenda/TagItem";


export default function Receitas() {
  return (
    <Fragment>
      <Navbar/>

      <TitlePage title={"Receitas"}/>
      <ReceitasNav/>
      <Container>

        <div style={{background: '#f5f5f5', padding: '1rem', borderRadius: '4px', height: '160px', display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
            <TagItem status={'Válida'}/>
          </div>

          <div style={{display: 'flex',flexDirection: 'column'}}>
            <span style={{ fontWeight: '600'}}>Medicamentos</span>
            <span>Ibuprofeno - 400mg</span>
            <span>Dipirona - 500mg</span>
          </div>


          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <button style={{background: '#C7F5FF', fontWeight: '600', padding: '0.5rem 2rem', textDecoration: 'none', color: 'black', borderRadius: '4px', border: 0}}>Usar Medicamentos</button>
            <button style={{background: '#C7F5FF', fontWeight: '600', padding: '0.5rem 2rem', textDecoration: 'none', color: 'black', borderRadius: '4px', border: 0}}>Baixar Receita</button>
          </div>
        </div>



      </Container>

    </Fragment>
  )
}

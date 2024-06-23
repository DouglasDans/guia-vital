import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import RegistroSintomas from "./pages/Home/RegistroSintomas";
import ConsultasMarcadas from "./pages/Agenda/ConsultasMarcadas";
import Historico from "./pages/Agenda/Historico";
import Hub from "./pages/Chat/Hub";
import Chat from "./pages/Chat/Chat";
import Lembretes from "./pages/Lembretes";
import Receitas from "./pages/Receitas";

export default function Router(){
   return(
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/registrosintomas" element={<RegistroSintomas/>}/>
         <Route path="/agenda/consultas" element={<ConsultasMarcadas/>}/>
         <Route path="/agenda/historico" element={<Historico/>}/>
         <Route path="/chat" element={<Hub/>}/>
         <Route path="/chat/mensagem" element={<Chat/>}/>
         <Route path="/lembretes" element={<Lembretes/>}/>
         <Route path="/receitas" element={<Receitas/>}/>
      </Routes>
   )
}
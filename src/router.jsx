import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function Router(){
   return(
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/teste" element={<h1>Teste página 2</h1>}/>
      </Routes>
   )
}
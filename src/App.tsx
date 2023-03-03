import './App.css';
import SignInSide from "./logIn"
import MyWaifu from './Componentes/waifuHome';
import { Route, Routes } from "react-router-dom";
import "./estiloCardMap.css"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<SignInSide />} />
    <Route path="/waifuHome" element={<MyWaifu />} />
    </Routes>
    
    </>
  );
}

export default App;

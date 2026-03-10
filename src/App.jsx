import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { TelaInicail } from "./Pages/TelaInicial";
import { Comprovante } from "./Pages/Comprovante"; // Mudou aqui para Pages
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicail />} />
        <Route path="/Caixa" element={<Home />} />
        <Route path="/comprovante" element={<Comprovante />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
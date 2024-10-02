import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Login from "../components/Login";
import Feed from "../components/Feed";
import FormProduto from "../components/FormProduto";
import CadastroProdutor from "../components/CadastroProdutor";
import CadastroCliente from "../components/CadastroCliente";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/novo_produto" element={<FormProduto />} />
        <Route path="/cadastro_produtor" element={<CadastroProdutor />} />
        <Route path="/cadastro_cliente" element={<CadastroCliente />} />
      </Routes>
    </Router>
  );
};
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"

function App() {

  return (
    <BrowserRouter>
    {/* Aqui, entre <BrowserRouter> e <Routes>, o conteúdo é exibido em todas as páginas,
    então abaixo temos um cabeçalho fixo. */}
    <Link to="/" style={{ paddingRight: "15px" }}>Início</Link>
    <Link to="/sobre">Sobre</Link> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<h2>Página não encontrada!</h2>} /> {/*Rota curinga pra 
        casos de erro 404, coloque na última linha do bloco. */}
        <Route path="/users" element={<h1>Usuários</h1>} /> 
        <Route path="/users/:user" element={<Users />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App //Apenas um export default por arquivo.

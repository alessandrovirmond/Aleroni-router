import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "pages/Inicio";
import Cardapio from "pages/Cardapio";
import Menu from "components/Menu";
import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrao";
import Sobre from "pages/Sobre";
import NotFound from "pages/NotFound";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path='*' element={<NotFound />} />
            <Route path='prato/:id' element={<Prato />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}

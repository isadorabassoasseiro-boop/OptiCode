import Header from "./components/Header";
import Hero from "./components/Hero";
import Solucao from "./components/Solucao";
import PublicoAlvo from "./components/PublicoAlvo";
import Galeria from "./components/Galeria";
import Equipe from "./components/Equipe";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <>
      <Header />
        <Hero />
        <Solucao />
        <PublicoAlvo />
        <Galeria />
        <Equipe />
        <Contato />
      <Footer />
    </>
  );
}

export default App;
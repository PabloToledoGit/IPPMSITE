import "./App.css";
import Titulo from "./components/Titulo";
import Menu from "./components/Link";

function App() {
  return (
    <div className="App">
      <div className="d-flex bg-dark justify-content-between">
        <Titulo titulo="Profetizando Milagres" />
        <div className="divlinks">
          <Menu menu="Inicio" links="*" />
          <Menu menu="Sobre" links="*" />
          <Menu menu="Contatos" links="*" />
          <Menu menu="Live" links="https://ippm.vercel.app/" />
        </div>
      </div>
      <Titulo titulo="Profetizando Milagres" />
    </div>
  );
}

export default App;

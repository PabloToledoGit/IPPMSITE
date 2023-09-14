import "./App.css";
import Titulo from "./components/Titulo";
import Menu from "./components/Link";

function App() {
  return (
    <div className="App">
      <div className="d-flex bg-dark justify-content-between">
        <Titulo titulo="Profetizando Milagres" />
        <div className="divlinks">
          <Menu menu="Home" links="*" />
          <Menu menu="Sobre" links="*" />
          <Menu menu="Contatos" links="*" />
          <Menu menu="Oração" links="*" />
        </div>
      </div>
    </div>
  );
}

export default App;

import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Sobre from "./components/Sobre/sobre";
import Projetos from "./components/Projetos/projetos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Sobre />
      <Projetos />
    </div>
  );
}

export default App;

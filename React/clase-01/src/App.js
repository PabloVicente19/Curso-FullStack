import "./App.css";
import Titulo from "./components/Titulo/Titulo";
import Parrafo from "./components/Parrafo/Parrafo";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Titulo />
      <Parrafo>Hola, Parrafo</Parrafo>
    </Container>
  );
}

export default App;

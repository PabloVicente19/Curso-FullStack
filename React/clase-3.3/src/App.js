import './App.css';
import { ComponenteClase } from './components/ComponenteClase/ComponenteClase';
import { ComponenteFuncional } from './components/ComponenteFuncional/ComponenteFuncional';

function App() {
  return (
    <div className="App">
      <ComponenteFuncional></ComponenteFuncional>
      <ComponenteClase></ComponenteClase>
    </div>
  );
}

export default App;

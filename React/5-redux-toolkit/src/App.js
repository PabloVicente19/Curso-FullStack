import { Provider } from "react-redux";
import "./App.css";
import Contador from "./components/Contador/Contador";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Contador />
    </Provider>
  );
}

export default App;

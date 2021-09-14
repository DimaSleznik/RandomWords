import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { Routing } from "./routing";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="Main">
          <Routing></Routing>
        </div>
      </div>
    </Provider>
  );
}

export default App;

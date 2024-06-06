import "./App.css";
import List from "./components/List/List.tsx";
import { DetailProvider } from "./context/DetailContext.tsx";

function App() {
  return (
    <div className="App">
      <DetailProvider>
        <header className="App-header">
          <p>Star Wars Enciclopedia</p>
        </header>
        <List />
      </DetailProvider>
    </div>
  );
}

export default App;

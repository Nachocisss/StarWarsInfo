import "./App.css";
import { Header } from "./components/Header/Header.tsx";
import List from "./components/List/List.tsx";
import { DetailProvider } from "./context/DetailContext.tsx";

function App() {
  return (
    <div className="App">
      <DetailProvider>
        <Header />
        <List />
      </DetailProvider>
    </div>
  );
}

export default App;

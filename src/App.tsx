import { Header } from "./Components/Layout/Header";
import { Sidenav } from "./Components/Layout/Sidenav";
import { DataContextProvider } from "./Contexts/DataContext";
import { Resumo } from "./Pages/Resumo";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;

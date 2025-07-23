import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Layout/Header";
import { Sidenav } from "./Components/Layout/Sidenav";
import { DataContextProvider } from "./Contexts/DataContext";
import { Resumo } from "./Pages/Resumo";
import { Vendas } from "./Pages/Vendas";
import "./global.css";
import { Venda } from "./Pages/Venda";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;

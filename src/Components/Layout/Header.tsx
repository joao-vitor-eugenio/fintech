import "./Header.css";
import React from "react";
import { DateRange } from "../Forms/DateRange";
import { Meses } from "../Elements/Meses";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [titulo, setTitulo] = React.useState("Resumo");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/vendas") {
      setTitulo("Vendas");
    } else {
      setTitulo("Resumo");
    }
  }, [location.pathname]);

  return (
    <header className="mb">
      <div className="date-range mb">
        <DateRange />
        <h1 className="box bg-3">{titulo}</h1>
      </div>
      <Meses />
    </header>
  );
};

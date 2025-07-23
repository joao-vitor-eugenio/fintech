import "./VendaItem.css";
import type { IVenda } from "../../Contexts/DataContext";
import { NavLink } from "react-router-dom";

export const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="box venda-item">
      <NavLink to={`/vendas/${venda.id}`} className="mono-space">
        {venda.id}
      </NavLink>

      <div>{venda.nome}</div>

      <div>
        {venda.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

import "./Sidenav.css";
import FintechSVG from "../../assets/fintech.svg";
import resumo from "../../assets/icons/resumo.svg";
import vendas from "../../assets/icons/vendas.svg";
import { NavLink } from "react-router-dom";

export const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <img
        src={FintechSVG}
        alt="Fintech - Logo"
        className="mb"
        title="Fintech - Logo"
      />
      <ul>
        <li>
          <span>
            <img src={resumo} />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
      </ul>
    </nav>
  );
};

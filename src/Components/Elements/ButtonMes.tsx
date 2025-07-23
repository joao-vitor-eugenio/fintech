import { useDataContext } from "../../Contexts/DataContext";
import "./ButtonMes.css";

const nomeMes = (mes: number) => {
  const data = new Date();
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    new Date(data.getFullYear(), data.getMonth() + mes, 1)
  );
};

export const ButtonMes = ({ mes }: { mes: number }) => {
  const { setInicio, setFinal } = useDataContext();

  const setMes = (mes: number) => {
    const data = new Date();
    const inicio = new Date(data.getFullYear(), data.getMonth() + mes, 1);
    const final = new Date(data.getFullYear(), data.getMonth() + mes + 1, 0);
    const inicioFormatado = inicio.toISOString().split("T")[0];
    const finalFormatado = final.toISOString().split("T")[0];

    setInicio(inicioFormatado);
    setFinal(finalFormatado);
  };

  return (
    <div className="buttonMes" onClick={() => setMes(mes)}>
      {nomeMes(mes)}
    </div>
  );
};

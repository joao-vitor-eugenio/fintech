import "./Resumo.css";
import { useDataContext } from "../Contexts/DataContext";
import GraficoVendas from "../Components/Elements/GraficoVendas";

export const Resumo = () => {
  const { data } = useDataContext();

  if (!data) {
    return null;
  }

  const totalizadorR$ = (dados: { preco: number }[]) => {
    return dados
      .reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
  };

  const totalVendasSucesso = totalizadorR$(
    data.filter((item) => item.status !== "falha")
  );

  const totalVendasPagas = totalizadorR$(
    data.filter((item) => item.status === "pago")
  );

  const totalAReceber = totalizadorR$(
    data.filter((item) => item.status === "processando")
  );

  const totalPagamentosComErro = totalizadorR$(
    data.filter((item) => item.status === "falha")
  );

  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>{totalVendasSucesso}</span>
        </div>

        <div className="box">
          <h2>Recebido</h2>
          <span>{totalVendasPagas}</span>
        </div>

        <div className="box">
          <h2>A receber</h2>
          <span>{totalAReceber}</span>
        </div>

        <div className="box">
          <h2>Pagamentos com erro</h2>
          <span>{totalPagamentosComErro}</span>
        </div>
      </div>

      <div className="box">
        <GraficoVendas data={data} />
      </div>
    </section>
  );
};

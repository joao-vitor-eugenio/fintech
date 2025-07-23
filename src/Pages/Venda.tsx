import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import type { IVenda } from "../Contexts/DataContext";

export const Venda = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch<IVenda>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (!data) return null;
  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

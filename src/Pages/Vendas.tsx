import { useDataContext } from "../Contexts/DataContext";
import { VendaItem } from "../Components/Elements/VendaItem";

export const Vendas = () => {
  const { data } = useDataContext();

  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

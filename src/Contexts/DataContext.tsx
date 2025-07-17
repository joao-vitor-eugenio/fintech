import React from "react";
import useFetch from "../Hooks/useFetch";

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
};

type IDataContext = {
  data: IVenda[] | null;
  error: string | null;
  loading: boolean;
};

const DataContext = React.createContext<IDataContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext deve ser utilizado com DataContextProvider");
  }
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, error, loading } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas"
  );

  return (
    <DataContext.Provider value={{ data, error, loading }}>
      {children}
    </DataContext.Provider>
  );
};
